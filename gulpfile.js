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
require('./lib/tasks/build-templates.js')
require('./lib/tasks/build-components.js')
require('./lib/tasks/build-images.js')
require('./lib/tasks/build-styles.js')
require('./lib/tasks/build-scripts.js')
require('./lib/tasks/build-npm-assets.js')
require('./lib/tasks/build-tasks.js')

require('./lib/tasks/package-npm.js')
require('./lib/tasks/package-gem.js')

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

// Build distribution
// This runs the build task to build the assets from app to dist/bundle
gulp.task('build', cb => {
  runSequence('clean', [
    'build:templates',
    'build:components',
    'build:images',
    'build:styles',
    'build:scripts',
    'build:npm-assets',
    'build:tasks'
  ], cb)
})

// Linting
gulp.task('lint', ['lint:styles', 'lint:scripts', 'lint:tests'])

// Task to run the tests
// This runs build before testing the preview task, to copy assets to dist/bundle and /public
gulp.task('test', cb => {
  runSequence('lint', 'test:lib', 'test:toolkit', 'build', 'test:preview', cb)
})

// Package the contents of dist
gulp.task('package', cb => {
  runSequence('build', ['package:gem', 'package:npm'], cb)
})

// Preview
// This runs the build task first, watches and starts the server
gulp.task('preview', cb => {
  runSequence('build', 'start:server', ['browser-sync', 'watch'], cb)
})

