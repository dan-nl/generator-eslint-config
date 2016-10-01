/* eslint no-invalid-this: off */

'use strict';

/**
 * module dependencies
 */
var chalk = require( 'chalk' );

/**
 * @returns {undefined}
 */
function writing() {
  this.package_json = this.package_json || this.fs.readJSON( './package.json' ) || '{}';

  this.fs.copyTpl(
    this.templatePath( '.eslintignore' ),
    this.destinationPath( './.eslintignore' )
  );

  this.fs.copyTpl(
    this.templatePath( '.eslintrc.js' ),
    this.destinationPath( './.eslintrc.js' )
  );

  if ( this.package_json.scripts && typeof this.package_json.scripts.eslint === 'string' ) {
    this.log(
      chalk.cyan( 'identical' ) +
      ' script ' +
      chalk.blue( 'eslint' ) +
      ' already exists in package.json'
    );

    return;
  }

  this.log( chalk.cyan( 'adding scripts' ) + ' to package.json for eslint-config' );
  this.log( chalk.green( '   script' ) + ' eslint' );

  this.fs.extendJSON( './package.json', { scripts: { eslint: 'eslint .' } } );
}

module.exports = writing;
