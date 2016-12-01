const gulp = require('gulp')
const runSequence = require('run-sequence')


require('./npm.js')
require('./gem.js')

gulp.task('package', cb => {
  runSequence('build', ['package:gem', 'package:npm'], cb)
})