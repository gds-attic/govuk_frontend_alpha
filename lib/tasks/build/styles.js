'use strict'

const paths = require('../../../config/paths.json')

const gulp = require('gulp')
const runSequence = require('run-sequence')
const rename = require('gulp-rename')

const sass = require('gulp-sass')
const nano = require('gulp-cssnano')

// Compile Sass to CSS
gulp.task('build:styles', cb => {
  runSequence('lint:styles', [
    'build:styles:copy',
    'build:styles:compile'
  ], cb)
})

gulp.task('build:styles:compile', () => {
  return gulp.src(paths.assetsScss + '**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.bundleCss))
    .pipe(gulp.dest(paths.publicCss))
    .pipe(rename({ suffix: '.min' }))
    .pipe(nano())
    .pipe(gulp.dest(paths.bundleCss))
})
gulp.task('build:styles:copy', () => {
  return gulp.src(paths.assetsScss + '**/*.scss')
    .pipe(gulp.dest(paths.bundleScss))
})
