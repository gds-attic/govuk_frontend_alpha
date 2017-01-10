'use strict'

const gulp = require('gulp')
// require the Fractal instance
const fractal = require('../../lib/fractal/config/fractal.js')
// keep a reference to the fractal CLI console utility
const logger = fractal.cli.console
const paths = require('../../config/paths')

/*
 * Run a static export of the project web UI.
 *
 * This task will report on progress using the 'progress' event emitted by the
 * builder instance, and log any errors to the terminal.
 *
 * The build destination will be the directory specified in the 'builder.dest'
 * configuration option set above.
 */

gulp.task('fractal:build', ['fractal:assets'], function () {
  const builder = fractal.web.builder()
  builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'))
  builder.on('error', err => logger.error(err.message))

  return builder.build().then(() => {
    logger.success('Fractal build completed!')

    // Fix theme assets not being copied, see below
    copyThemeAssets()
  })
})

/*
 * Copy the theme assets to the static build location
 *
 * Fractal should do this, but it looks like a bug. Mentioned to
 * the fractal team and they're going to look into it.
 */
const copyThemeAssets = () => {
  gulp.src(paths.fractalThemeCss + '*.css').pipe(gulp.dest(paths.distFractal + 'theme/css'))
  gulp.src(paths.fractalThemeImages + '*').pipe(gulp.dest(paths.distFractal + 'theme/images'))
}
