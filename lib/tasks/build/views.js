'use strict'

const packageJson = require('../../../package.json')
const paths = require('../../../config/paths.json')

const gulp = require('gulp')
const rename = require('gulp-rename')

const transpiler = require('../../transpilation/transpiler.js')

let transpileRunner = templateLanguage => {
  return gulp.src([
  	paths.views + '*.html.nunjucks'
  ])
    .pipe(transpiler(templateLanguage, packageJson.version))
    .pipe(rename({extname: "." + templateLanguage }))
    .pipe(gulp.dest(paths.bundleViews))
}

// Task for transpiling the templates
gulp.task('build:views', [
  'build:views:nunjucks',
  'build:views:erb',
  'build:views:handlebars',
  'build:views:django'
])

gulp.task('build:views:nunjucks', transpileRunner.bind(null, 'nunjucks'))
gulp.task('build:views:erb', transpileRunner.bind(null, 'erb'))
gulp.task('build:views:handlebars', transpileRunner.bind(null, 'handlebars'))
gulp.task('build:views:django', transpileRunner.bind(null, 'django'))
