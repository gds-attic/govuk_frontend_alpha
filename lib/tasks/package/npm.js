'use strict'

const packageJson = require('../../../package.json')
const paths = require('../../../config/paths.json')
const packageName = require('../../../gulpfile.js').packageName

const gulp = require('gulp')
const runSequence = require('run-sequence')
const run = require('gulp-run')
const del = require('del')
const fs = require('fs')

const buildNpmPackageJson = () => {
  const npmPackageJson = {}
  npmPackageJson['name'] = packageJson.name
  npmPackageJson['version'] = packageJson.version
  npmPackageJson['description'] = packageJson.description
  npmPackageJson['repository'] = packageJson.repository
  npmPackageJson['author'] = packageJson.author
  npmPackageJson['license'] = packageJson.license
  npmPackageJson['bugs'] = packageJson.bugs
  npmPackageJson['homepage'] = packageJson.homepage
  // THIS IS A LATE NIGHT HACK, MAYBE JUST USE THE ORIGINAL PACKAGE.JSON SOMEHOW
  npmPackageJson['dependencies'] = {
    "@frctl/fractal": "^1.0.8",
    "@frctl/nunjucks": "^1.0.1",
    "run-sequence": "^1.2.2"
  }

  return JSON.stringify(npmPackageJson)
}

gulp.task('package:npm', cb => {
  runSequence('package:npm:prepare', 'package:npm:json', 'package:npm:build', 'package:npm:copy', 'package:npm:clean', cb)
})

gulp.task('package:npm:prepare', () => {
  gulp.src(paths.bundleCss + '**/*').pipe(gulp.dest(paths.npmCss))
  gulp.src(paths.bundleImg + '**/*').pipe(gulp.dest(paths.npmImg))
  gulp.src(paths.bundleScss + '**/*').pipe(gulp.dest(paths.npmScss))
  gulp.src(paths.bundleJs + '**/*').pipe(gulp.dest(paths.npmJs))
  gulp.src(paths.bundleTemplates + '**/*').pipe(gulp.dest(paths.npmTemplates))
  gulp.src(paths.bundleViews + '**/*').pipe(gulp.dest(paths.npmViews))
  gulp.src(paths.bundleComponents + '**/*').pipe(gulp.dest(paths.npmComponents))
  gulp.src(paths.bundleNpmTasks + "*").pipe(gulp.dest(paths.npmTasks))
  gulp.src(paths.bundleNpmPaths).pipe(gulp.dest(paths.npmConfig))
  return gulp.src('./package.json').pipe(gulp.dest(paths.npm))
})

gulp.task('package:npm:json', cb => fs.writeFile(paths.npm + 'package.json', buildNpmPackageJson(), cb))
gulp.task('package:npm:build', () => run(`cd ${paths.npm} && npm pack`).exec())
gulp.task('package:npm:copy', () => gulp.src(`${paths.npm}${packageName}.tgz`).pipe(gulp.dest(paths.pkg)))
gulp.task('package:npm:clean', () => del(`${paths.npm}${packageName}.tgz`))
