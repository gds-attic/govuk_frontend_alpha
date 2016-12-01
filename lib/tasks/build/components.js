'use strict'

const paths = require('../../../config/paths.json')
const gulp = require('gulp')

// Task for building the components
gulp.task('build:components', [
  'build:components:nunjucks'
])

gulp.task('build:components:nunjucks', () => {
  return gulp.src(paths.components + '**/*.html.nunjucks')
  .pipe(gulp.dest(paths.bundleComponents))
})
