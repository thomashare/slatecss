'use strict';

/**
 * test deps
 */
let assert = require('assert');

/**
 * other deps
 */
let path = require('path');
let fs = require('fs');
let fse = require('fs-extra');
let child = require('child_process');

const OUTPUT_CSS_PATH = path.resolve('css');
const CSS_MIN_PATH = path.resolve(OUTPUT_CSS_PATH, 'slate.min.css');
const CSS_PATH = path.resolve(OUTPUT_CSS_PATH, 'slate.css');

describe('The build', function () {

	beforeEach(function (done) {
		fse.remove(OUTPUT_CSS_PATH, function () {
			done();
		});
	});

	it(`creates "${CSS_MIN_PATH}" when running "slate-min" task`, function () {
		this.timeout(60000);

		child.execSync('gulp slate-min', {
			cwd: path.resolve(__dirname, '../')
		});

		try {
			fs.accessSync(CSS_MIN_PATH);
			assert.ok(true);
		} catch (e) {
			assert.ok(false);
		}

	});

	it(`creates "${CSS_PATH}" when running "slate" task`, function () {
		this.timeout(60000);

		child.execSync('gulp slate', {
			cwd: path.resolve(__dirname, '../')
		});

		try {
			fs.accessSync(CSS_PATH);
			assert.ok(true);
		} catch (e) {
			assert.ok(false);
		}

	});

});


