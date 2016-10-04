/* eslint no-sync: off */

'use strict';

/**
 * module dependencies
 */
var chalk = require( 'chalk' );
var extend = require( 'deep-extend' );
var fs = require( 'fs' );
var loadJson = require( 'yeoman-helpers' ).loadJson;

/**
 * @param {Object} generator
 * @returns {undefined}
 */
function addPackageJsonScript( generator ) {
  var extend_content;
  var new_content;
  var package_json;

  package_json = loadJson( generator.destinationPath( 'package.json' ), { sync: true } );

  generator.log( chalk.cyan( 'config' ) );

  if ( package_json.scripts && typeof package_json.scripts.eslint === 'string' ) {
    generator.log( chalk.green( '   script already exists' ) + ' eslint' );

    return;
  }

  generator.log( chalk.green( '   create script' ) + ' eslint' );

  extend_content = {
    scripts: {
      eslint: 'eslint .'
    }
  };

  new_content = extend( {}, package_json, extend_content );
  fs.writeFileSync( generator.destinationPath( 'package.json' ), JSON.stringify( new_content ) );
}

module.exports = addPackageJsonScript;
