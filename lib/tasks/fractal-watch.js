'use strict'

const paths = require('../../config/paths.json')
const gulp = require('gulp')

// Watch tasks for the fractal theme assets
gulp.task('fractal:watch', [
  'watch:fractal:assets:styles',
  'watch:fractal:assets:scripts',
  'watch:fractal:assets:images'
])

// Watch scss files, call the fractal:theme:styles task to compile to css
gulp.task('watch:fractal:assets:styles', function () {
  console.log('watch styles changed')
  return gulp.watch(paths.fractalThemeScss + '**/*.scss', ['fractal:assets:styles'])
})

// Watch theme scripts
gulp.task('watch:fractal:assets:scripts', function () {
  return gulp.watch(paths.fractalThemeJs + '**/*.js', ['fractal:assets:scripts'])
})

// Watch theme images
gulp.task('watch:fractal:assets:images', function () {
  return gulp.watch(paths.fractalThemeImg + '**/*', ['fractal:assets:images'])
})
