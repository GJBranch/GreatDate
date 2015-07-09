'use strict';
var gulp = require('gulp');
require('./test/test-client');

gulp.task('test', ['test-client']);
