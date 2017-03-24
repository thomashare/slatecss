'use strict';

let gulp = require('gulp');
let stylus = require('gulp-stylus');
let postcss = require('gulp-postcss');
let sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['slate-min', 'slate']);

gulp.task('watch', function () {
	return gulp.watch(['styl/**/*.styl', 'custom/**/*.styl'], ['slate']);
});

gulp.task('slate', function () {
	return gulp.src('./styl/slate.styl')
		.pipe(sourcemaps.init())
		.pipe(stylus({'include css': true}).on('error', function () {
			this.end();
		}))
		.pipe(postcss([require('autoprefixer')]))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./css'));
});

gulp.task('slate-min', function () {
	let rename = require('gulp-rename');

	return gulp.src('./styl/slate.styl')
		.pipe(sourcemaps.init())
		.pipe(stylus({'include css': true}))
		.pipe(postcss([
			require('autoprefixer'),
			require('cssnano')
		]))
		.pipe(rename({
			extname: '.min.css'
		}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./css'));
});

gulp.task('margins', function () {
	return gulp.src('./styl/margins.styl')
		.pipe(stylus())
		.pipe(postcss([
			require('autoprefixer'),
			require('cssnano')
		]))
		.pipe(gulp.dest('./css'));
});

gulp.task('backgrounds', function () {
	return gulp.src('./styl/backgrounds.styl')
		.pipe(stylus())
		.pipe(postcss([
			require('autoprefixer'),
			require('cssnano')
		]))
		.pipe(gulp.dest('./css'));
});

gulp.task('divided', function () {
	return gulp.src('./styl/divided.styl')
		.pipe(stylus())
		.pipe(postcss([
			require('autoprefixer'),
			require('cssnano')
		]))
		.pipe(gulp.dest('./css'));
});
