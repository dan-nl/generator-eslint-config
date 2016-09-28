'use strict';

var generators = require( 'yeoman-generator' );
var generator = {};

generator.writing = require( './writing' );
generator.install = require( './install' );

module.exports = generators.Base.extend( generator );
