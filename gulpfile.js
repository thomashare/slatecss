'use strict';

var gulp = require('gulp');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['slate-min']);

gulp.task('watch', function () {
  return gulp.watch(['styl/**/*.styl', 'custom/**/*.styl'], ['slate']);
});

gulp.task('slate', function () {
  return gulp.src('./styl/slate.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus({ 'include css': true }).on('error', function () {
      this.end();
    }))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
});

gulp.task('slate-min', ['slate'], function () {
  return gulp.src('./styl/slate.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
});
