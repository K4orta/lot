'use strict';
module.exports = function(gulp) {
  var browserify = require('browserify'),
      source = require('vinyl-source-stream'),
      buffer = require('vinyl-buffer'),
      gutil = require('gulp-util'),
      uglify = require('gulp-uglify'),
      livereload = require('gulp-livereload');


  gulp.task('browserify', function() {
    browserify(['./public/js/main.js'])
      .bundle()
      .pipe(source('main.js'))
      .pipe(buffer())
      // .pipe(uglify())
      .pipe(gulp.dest('./public/dist/'))
      .pipe(livereload());
  });
};
