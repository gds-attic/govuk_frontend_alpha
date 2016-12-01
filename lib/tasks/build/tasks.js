'use strict'

const paths = require('../../../config/paths.json')

const gulp = require('gulp')

// Copy images
gulp.task('build:tasks', () => {
  return gulp.src(paths.npmFractal)
    .pipe(gulp.dest(paths.bundleNpmGovukTasks))
})
