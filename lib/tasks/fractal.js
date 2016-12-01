'use strict'

const paths = require('../../config/paths.json')
const packageJson = require('../../package.json')

const gulp = require('gulp')
const runSequence = require('run-sequence')

/*
 * Configure a Fractal instance.
 *
 * This configuration could also be done in a separate file, provided that this file
 * then imported the configured fractal instance from it to work with in your Gulp tasks.
 * i.e. const fractal = require('./my-fractal-config-file');
 */

// Create a new Fractal instance and export it for use elsewhere if required
const fractal = module.exports = require('@frctl/fractal').create()

fractal.set('project.title', 'GOV.UK Frontend Alpha')
fractal.set('project.version', 'v' + packageJson.version)
fractal.set('project.author', 'Government Digital Service developers')

// Tell Fractal where the documentation pages will live
fractal.docs.set('path', paths.appDocs)

// Tell Fractal where the components will live
fractal.components.set('path', paths.appComponents)

// Specify a preview layout for a component
fractal.components.set('default.preview', '@preview')

// Load the Nunjucks template engine
fractal.components.engine('@frctl/nunjucks')

// Change the file extension for the view template using the ext configuration option
fractal.components.set('ext', '.nunj')

// Specify a directory of static assets
fractal.web.set('static.path', paths.public)

// Set the static HTML build destination
fractal.web.set('builder.dest', paths.bundle)

const logger = fractal.cli.console // keep a reference to the fractal CLI console utility

/*
 * Start the Fractal server
 *
 * In this example we are passing the option 'sync: true' which means that it will
 * use BrowserSync to watch for changes to the filesystem and refresh the browser automatically.
 * Obviously this is completely optional!
 *
 * This task will also log any errors to the console.
 */

gulp.task('fractal:start', function () {
  const server = fractal.web.server({
    sync: true
  })
  server.on('error', err => logger.error(err.message))
  return server.start().then(() => {
    logger.success(`Fractal server is now running at ${server.url}`)
  })
})

/*
 * Run a static export of the project web UI.
 *
 * This task will report on progress using the 'progress' event emitted by the
 * builder instance, and log any errors to the terminal.
 *
 * The build destination will be the directory specified in the 'builder.dest'
 * configuration option set above.
 */

gulp.task('fractal:build', function () {
  const builder = fractal.web.builder()
  builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'))
  builder.on('error', err => logger.error(err.message))
  return builder.build().then(() => {
    logger.success('Fractal build completed!')
  })
})

// Fractal
// This runs the build task first, then starts Fractal
gulp.task('fractal', cb => {
  runSequence('build', ['fractal:start'], cb)
})
