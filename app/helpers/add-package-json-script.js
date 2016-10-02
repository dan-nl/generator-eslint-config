'use strict';

/**
 * module dependencies
 */
var chalk = require( 'chalk' );
var extend = require( 'deep-extend' );
var fs = require( 'fs' );

/**
 * @param {Object} generator
 * @returns {undefined}
 */
function addPackageJsonScript( generator ) {
  var new_content;

  if ( generator.package_json.scripts && typeof generator.package_json.scripts.eslint === 'string' ) {
    generator.log(
      chalk.cyan( 'identical' ) +
      ' script ' +
      chalk.blue( 'eslint' ) +
      ' already exists in package.json'
    );

    return;
  }

  generator.log( chalk.cyan( 'adding scripts' ) + ' to package.json for eslint-config' );
  generator.log( chalk.green( '   script' ) + ' eslint' );

  new_content = extend( {}, generator.package_json, { scripts: { eslint: 'eslint .' } } );
  fs.writeFileSync( generator.destinationPath( 'package.json' ), JSON.stringify( new_content ) );
}

module.exports = addPackageJsonScript;
