'use strict'

const paths = require('../../config/paths.json')

const gulp = require('gulp')
const sass = require('gulp-sass')

// This file provides the build tasks for the Fractal theme assets
// To keep the "theme" assets separate, static assets can be found in /fractal/govuk-theme/

gulp.task('fractal:assets', [
  'fractal:assets:styles',
  'fractal:assets:scripts',
  'fractal:assets:images'
])

/*
 * Copy the theme assets to the static build location
 *
 * Fractal should do this, but it looks like a bug. Mentioned to
 * the fractal team and they're going to look into it.
 *
 * Once fixed [1] and [2] can be removed.
 */

// Styles - compile SCSS
gulp.task('fractal:assets:styles', () => {
  console.log('theme styles compiled')
  return gulp.src(paths.fractalThemeScss + '**/**/*.scss')
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: [paths.fractalThemeScss + 'tech-docs-template']
    }).on('error', sass.logError))
    .pipe(gulp.dest(paths.fractalThemeCss))
    // [1] Copy the theme assets to the static build location
    .pipe(gulp.dest(paths.distFractal + 'theme/css'))
})

// Scripts
gulp.task('fractal:assets:scripts', () => {
  return gulp.src(paths.fractalThemeJs + '**/*.js')
    .pipe(gulp.dest(paths.distFractal + 'theme/scripts'))
})

// Images
gulp.task('fractal:assets:images', () => {
  console.log('theme images copied')
  return gulp.src(paths.fractalThemeImages + '*')
    // [2] Copy the theme assets to the static build location
    .pipe(gulp.dest(paths.distFractal + 'theme/images'))
})
