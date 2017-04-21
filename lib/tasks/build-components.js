'use strict'

const paths = require('../../config/paths.json')
const packageJson = require('../../package.json')

const gulp = require('gulp')
const rename = require('gulp-rename')

const transpiler = require('../transpilation/transpiler.js')

let transpileRunner = templateLanguage => {
  // Templates starting with underscores are ignored
  return gulp.src(paths.srcComponents + '[^_]*/[^_]*.njk')
    .pipe(transpiler.transpileComponent(templateLanguage, packageJson.version))
    // `dirname` drops the extra level of dir, `button/button.ext` => `button.ext`
    .pipe(rename({dirname: '', extname: '.' + transpiler.extensionForTarget(templateLanguage)}))
    .pipe(gulp.dest(paths.bundleComponents))
}

// Task for transpiling the templates
gulp.task('build:components', [
  'build:components:nunjucks',
  'build:components:erb',
  'build:components:handlebars'
])

gulp.task('build:components:nunjucks', transpileRunner.bind(null, 'nunjucks'))
gulp.task('build:components:erb', transpileRunner.bind(null, 'erb'))
gulp.task('build:components:handlebars', transpileRunner.bind(null, 'handlebars'))
