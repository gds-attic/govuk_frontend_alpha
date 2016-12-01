const gulp = require('gulp')
const runSequence = require('run-sequence')

require('./templates.js')
require('./views.js')
require('./components.js')
require('./images.js')
require('./styles.js')
require('./scripts.js')
require('./tasks.js')
require('./npm.js')


gulp.task('build', cb => {
  runSequence('clean', [
    'build:templates',
    'build:components',
    'build:views',
    'build:images',
    'build:styles',
    'build:tasks',
    'build:npm'
  ], cb)
})



