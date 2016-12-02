'use strict'
const paths = require('../../config/paths.json')
const gulp = require('gulp')

// Copy images
gulp.task('build:npm-assets', () => {
  gulp.src(paths.npmPackageJson)
     .pipe(gulp.dest(paths.bundle))
  return gulp.src(paths.packagePaths)
    .pipe(gulp.dest(paths.bundle))
})
