'use strict';

var generators = require( 'yeoman-generator' );
var generator = {};

generator.configuring = require( './configuring' );
generator.initializing = require( './initializing' );
generator.prompting = require( './prompting' );
generator.install = require( './install' );
generator.writing = require( './writing' );

module.exports = generators.Base.extend( generator );
