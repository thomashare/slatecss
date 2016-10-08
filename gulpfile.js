var gulp = require('gulp');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['slate-min', 'watch']);

gulp.task('watch', function() {
  return gulp.watch(['./styl/**/*.styl', './custom/**/*.styl'], ['slate-min']);
});

gulp.task('slate', ['sourcemaps'], function() {
  return gulp.src('./styl/slate.styl')
  .pipe(stylus({
    'include css': true
  }))
  .pipe(autoprefixer())
  .pipe(gulp.dest('./css'));
});

gulp.task('slate-min', ['sourcemaps'], function() {
  return gulp.src('./styl/slate.styl')
  .pipe(stylus({
    'include css': true
  }))
  .pipe(autoprefixer())
  .pipe(cssnano())
  .pipe(rename({
    extname: '.min.css'
  }))
  .pipe(gulp.dest('./css'));
});

gulp.task('sourcemaps', function() {
  return gulp.src('./styl/slate.styl')
  .pipe(sourcemaps.init())
  .pipe(stylus({
    'include css': true
  }))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./css'));
});
