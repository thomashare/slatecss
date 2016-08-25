var gulp = require('gulp');
var stylus = require('gulp-stylus');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');

gulp.task('default', ['slate-min', 'watch']);

gulp.task('watch', function() {
  return gulp.watch('./styl/**/*.styl', ['slate-min']);
});

gulp.task('slate', function() {
  return gulp.src('./styl/slate.styl')
  .pipe(stylus({
    'include css': true
  }))
  .pipe(gulp.dest('./css'));
});

gulp.task('slate-min', ['slate'], function() {
  return gulp.src('./styl/slate.styl')
  .pipe(stylus({
    'include css': true
  }))
  .pipe(cssnano())
  .pipe(rename({
    extname: '-min.css'
  }))
  .pipe(gulp.dest('./css'));
});
