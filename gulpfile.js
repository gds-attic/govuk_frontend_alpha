'use strict'

// Configuration
const packageJson = require('./package.json')
const paths = require('./config/paths.json')
exports.packageName = packageJson.name + '-' + packageJson.version

// Gulp utility
const gulp = require('gulp')
const browserSync = require('browser-sync')
const del = require('del')
const runSequence = require('run-sequence')
const taskListing = require('gulp-task-listing')

// Gulp sub-tasks
require('./lib/tasks/build')
require('./lib/tasks/package')


require('./lib/tasks/lint.js')
require('./lib/tasks/test.js')

require('./lib/tasks/fractal.js')
require('./lib/tasks/preview.js')
require('./lib/tasks/browser-sync.js')
require('./lib/tasks/watch.js')
require('./lib/tasks/start-server.js')

// Run 'gulp help' to list available tasks
gulp.task('help', taskListing.withFilters(null, 'help'))

// Task for cleaning the distribution
gulp.task('clean', () => del([paths.dist + '*', paths.public + '*']))


// Package the contents of dist
gulp.task('package', cb => {
  runSequence('build', ['package:gem', 'package:npm'], cb)
})

// Linting
gulp.task('lint', ['lint:styles', 'lint:scripts', 'lint:tests'])

// Task to run the tests
// This runs build before testing the preview task, to copy assets to dist/bundle and /public
gulp.task('test', cb => {
  runSequence('lint', 'test:lib', 'test:toolkit', 'build', 'test:preview', cb)
})



// Preview
// This runs the build task first, watches and starts the server
gulp.task('preview', cb => {
  runSequence('build', 'start:server', ['browser-sync', 'watch'], cb)
})


