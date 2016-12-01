'use strict'

const paths = require('../../../config/paths.json')

const gulp = require('gulp')

// Copy images
gulp.task('build:images', () => {
  return gulp.src(paths.assetsImg + '**/*')
    .pipe(gulp.dest(paths.bundleImg))
    .pipe(gulp.dest(paths.publicImg))
})
