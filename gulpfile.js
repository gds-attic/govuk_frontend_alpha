'use strict'

const packageJson = require('./package.json')

// Gulp utility
const gulp = require('gulp')
const del = require('del')
const rename = require('gulp-rename')
const runSequence = require('run-sequence')

// Templates
const transpiler = require('./lib/transpilation/transpiler.js')

// Styles
const sass = require('gulp-sass')
const sasslint = require('gulp-sass-lint')
const nano = require('gulp-cssnano')

// Javascript
const standard = require('gulp-standard')
const rollup = require('rollup-stream')
const vinylSource = require('vinyl-source-stream')
const vinylBuffer = require('vinyl-buffer')
const uglify = require('gulp-uglify')
const uglifySaveLicense = require('uglify-save-license')

// Testing
const mocha = require('gulp-mocha')
const jasmineBrowser = require('gulp-jasmine-browser')
const SpecReporter = require('jasmine-spec-reporter')

// Packaging
const tar = require('gulp-tar')
const gzip = require('gulp-gzip')

// Configuration
const paths = require('./config/paths.js')

// Task for cleaning the distribution
gulp.task('clean', () => {
  return del([paths.dist + '*'])
})

// Task for transpiling the templates
let transpileRunner = templateLanguage => {
  return gulp.src(paths.templates + '*.html')
    .pipe(transpiler(templateLanguage, packageJson.version))
    .pipe(rename({extname: '.html.' + templateLanguage}))
    .pipe(gulp.dest(paths.distTemplates))
}
gulp.task('build:templates', ['build:templates:nunjucks', 'build:templates:erb', 'build:templates:handlebars', 'build:templates:django'])
gulp.task('build:templates:nunjucks', transpileRunner.bind(null, 'nunjucks'))
gulp.task('build:templates:erb', transpileRunner.bind(null, 'erb'))
gulp.task('build:templates:handlebars', transpileRunner.bind(null, 'handlebars'))
gulp.task('build:templates:django', transpileRunner.bind(null, 'django'))

// Compile Sass to CSS
gulp.task('build:styles', cb => {
  runSequence('lint:styles', ['build:styles:copy', 'build:styles:compile'], cb)
})
gulp.task('build:styles:compile', () => {
  gulp.src(paths.assetsScss + '**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.distCss))
    .pipe(rename({ suffix: '.min' }))
    .pipe(nano())
    .pipe(gulp.dest(paths.distCss))
})
gulp.task('build:styles:copy', () => {
  gulp.src(paths.assetsScss + '**/*.scss')
    .pipe(gulp.dest(paths.distScss))
})

// Build single Javascript file from modules
let scriptsBuilder = fileName => {
  return rollup({
    entry: paths.assetsJs + fileName + '.manifest.js',
    context: 'window'
  })
    .pipe(vinylSource(fileName + '.js'))
    .pipe(gulp.dest(paths.distJs))
    .pipe(vinylBuffer())
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify({
      preserveComments: uglifySaveLicense
    }))
    .pipe(gulp.dest(paths.distJs))
}
gulp.task('build:scripts', cb => {
  runSequence('lint:scripts', [
    'build:scripts:copy',
    'build:scripts:elements',
    'build:scripts:govuk-template',
    'build:scripts:govuk-template-ie',
    'build:scripts:toolkit'
  ], cb)
})
gulp.task('build:scripts:elements', scriptsBuilder.bind(null, 'elements'))
gulp.task('build:scripts:govuk-template', scriptsBuilder.bind(null, 'govuk-template'))
gulp.task('build:scripts:govuk-template-ie', scriptsBuilder.bind(null, 'govuk-template-ie'))
gulp.task('build:scripts:toolkit', scriptsBuilder.bind(null, 'toolkit'))
gulp.task('build:scripts:copy', () => {
  gulp.src(paths.assetsJs + '**/*.js')
    .pipe(gulp.dest(paths.distJs))
})

// Task to run the tests
gulp.task('test', ['test:lib', 'test:toolkit'])
gulp.task('test:lib', () => gulp.src(paths.testSpecs + '*.js', {read: false})
  .pipe(mocha())
)
// Ideally these pre-existing toolkit tests will be rewritten at some point
// to use mocha rather than requiring Jasmine as well.
gulp.task('test:toolkit', () => gulp.src([
  paths.npm + 'jquery/dist/jquery.js',
  paths.assetsJs + 'toolkit/**/*.js',
  paths.testSpecs + 'toolkit/unit/**/*.spec.js'
])
  .pipe(jasmineBrowser.specRunner({console: true}))
  .pipe(jasmineBrowser.headless({reporter: new SpecReporter()}))
)

// Linting
gulp.task('lint', ['lint:styles', 'lint:scripts', 'lint:tests'])
gulp.task('lint:styles', () => {
  gulp.src(paths.assetsScss + '**/*.scss')
    .pipe(sasslint())
    // if the .yml file is in /config, this fails :(
    // .pipe(sasslint({
    //   config: paths.config + '.sass-lint.yml'
    // }))
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError())
})
gulp.task('lint:scripts', () => {
  gulp.src([
    '!' + paths.assetsJs + '**/vendor/**/*.js',
    paths.assetsJs + '**/*.js'
  ])
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: true,
      quiet: true
    }))
})
gulp.task('lint:tests', () => {
  gulp.src(paths.test + '**/*.js')
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: true,
      quiet: true
    }))
})

// Build distribution
gulp.task('build', cb => {
  runSequence('clean', ['build:templates', 'build:styles', 'build:scripts'], cb)
})

// Build packages
gulp.task('package', cb => {
  runSequence('clean', 'build', [
    'package:npm'
  ], cb)
})

// Build NPM package
gulp.task('package:npm', () => {
  gulp.src([
    'package.json',
    paths.dist + '**/*'
  ])
  .pipe(gulp.dest(paths.distPkgNpm))
  .pipe(tar(packageJson.name + '-' + packageJson.version + '.tar'))
  .pipe(gzip())
  .pipe(gulp.dest(paths.distPkgNpm))
})
