'use strict';

var generators = require( 'yeoman-generator' );
var generator = {};

generator.install = require( './install' );
generator.writing = require( './writing' );

module.exports = generators.Base.extend( generator );
