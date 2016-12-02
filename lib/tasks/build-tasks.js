'use strict'

const paths = require('../../config/paths.json')

const gulp = require('gulp')

// Copy images
gulp.task('build:tasks', () => {
  return gulp.src(paths.npmTasksFractal)
    .pipe(gulp.dest(paths.bundleGovukTasks))
})
