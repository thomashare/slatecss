'use strict';

let gulp = require('gulp');
let stylus = require('gulp-stylus');
let autoprefixer = require('gulp-autoprefixer');
let csspurge = require('gulp-css-purge');
let cssnano = require('gulp-cssnano');
let rename = require('gulp-rename');
let sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['slate-min', 'slate']);

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
    .pipe(csspurge())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css'));
});

gulp.task('slate-min', function () {
  return gulp.src('./styl/slate.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus({ 'include css': true }))
    .pipe(autoprefixer())
    .pipe(csspurge())
    .pipe(cssnano())
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css'));
});

gulp.task('margins', function () {
  return gulp.src('./styl/margins.styl')
    .pipe(stylus())
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(gulp.dest('./css'));
});

gulp.task('backgrounds', function () {
  return gulp.src('./styl/backgrounds.styl')
    .pipe(stylus())
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(gulp.dest('./css'));
});

gulp.task('divided', function () {
  return gulp.src('./styl/divided.styl')
    .pipe(stylus())
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(gulp.dest('./css'));
});
