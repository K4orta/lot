var gulp = require('gulp');

require('gulp-load')(gulp);
gulp.loadTasks(__dirname);

gulp.task('default', [
  'less',
  'browserify',
  'watch'
]);

gulp.task('build', [
  'less',
  'browserify'
]);
