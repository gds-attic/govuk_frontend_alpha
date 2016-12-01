'use strict'

const paths = require('../../../config/paths.json')

const gulp = require('gulp')

// Copy images
gulp.task('build:npm', () => {
  gulp.src(paths.paths)
    .pipe(gulp.dest(paths.bundle))
  return gulp.src(paths.npmPackageJson)
    .pipe(gulp.dest(paths.bundle))
})
