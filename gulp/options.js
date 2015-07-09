'use strict';
var fs = require('fs');
var jsHint = JSON.parse(fs.readFileSync(require.resolve('../.jshintrc'), 'utf8'));

var options = {
    appName: 'GreatDate',
    appOutput: './www/dist',
    jsHint: jsHint,
    karmaConfig: 'test/config/karma.conf.js',
    common: 'www/common/**/*.js',
    features: 'www/features/**/*.js',
    sass: ['./scss/**/*.scss'],
    specs: {
        sources: [
            './www/common/**/*.js',
            './www/features/**/*.js'
        ],
        tests: [
            './test/unit/client/**/*.js'
        ]
    }
};

module.exports = options;

