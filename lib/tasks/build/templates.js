'use strict'

const packageJson = require('../../../package.json')
const paths = require('../../../config/paths.json')

const gulp = require('gulp')
const rename = require('gulp-rename')

const transpiler = require('../../transpilation/transpiler.js')

let transpileRunner = templateLanguage => {
  return gulp.src([
  	paths.templates + '*.html.nunjucks',
  ])
    .pipe(transpiler(templateLanguage, packageJson.version))
    .pipe(rename({extname: "." + templateLanguage }))
    .pipe(gulp.dest(paths.bundleTemplates))
}

// Task for transpiling the templates
gulp.task('build:templates', [
  'build:templates:nunjucks',
  'build:templates:erb',
  'build:templates:handlebars',
  'build:templates:django'
])

gulp.task('build:templates:nunjucks', transpileRunner.bind(null, 'nunjucks'))
gulp.task('build:templates:erb', transpileRunner.bind(null, 'erb'))
gulp.task('build:templates:handlebars', transpileRunner.bind(null, 'handlebars'))
gulp.task('build:templates:django', transpileRunner.bind(null, 'django'))
