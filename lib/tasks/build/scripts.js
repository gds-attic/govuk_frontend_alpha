'use strict'

const paths = require('../../../config/paths.json')

const gulp = require('gulp')
const runSequence = require('run-sequence')
const rename = require('gulp-rename')

const rollup = require('rollup-stream')
const vinylSource = require('vinyl-source-stream')
const vinylBuffer = require('vinyl-buffer')
const uglify = require('gulp-uglify')
const uglifySaveLicense = require('uglify-save-license')

let scriptsBuilder = fileName => {
  return rollup({
    entry: paths.assetsJs + fileName + '.manifest.js',
    context: 'window'
  })
    .pipe(vinylSource(fileName + '.js'))
    .pipe(gulp.dest(paths.bundleJs))
    .pipe(gulp.dest(paths.publicJs))
    .pipe(vinylBuffer())
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify({
      preserveComments: uglifySaveLicense
    }))
    .pipe(gulp.dest(paths.bundleJs))
}

// Build single Javascript file from modules
gulp.task('build:scripts', cb => {
  runSequence('lint:scripts', [
    'build:scripts:copy',
    'build:scripts:elements',
    'build:scripts:govuk-template',
    'build:scripts:govuk-template-ie',
    'build:scripts:toolkit'
  ], cb)
})

gulp.task('build:scripts:elements', scriptsBuilder.bind(null, 'elements'))
gulp.task('build:scripts:govuk-template', scriptsBuilder.bind(null, 'govuk-template'))
gulp.task('build:scripts:govuk-template-ie', scriptsBuilder.bind(null, 'govuk-template-ie'))
gulp.task('build:scripts:toolkit', scriptsBuilder.bind(null, 'toolkit'))
gulp.task('build:scripts:copy', () => {
  return gulp.src(paths.assetsJs + '**/*.js')
    .pipe(gulp.dest(paths.bundleJs))
})
