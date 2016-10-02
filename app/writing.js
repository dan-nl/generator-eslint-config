/* eslint no-invalid-this: off */

'use strict';

/**
 * module dependencies
 */
var addPackageJsonScript = require( './helpers/add-package-json-script' );

/**
 * @returns {undefined}
 */
function writing() {
  this.fs.copyTpl(
    this.templatePath( '.eslintignore' ),
    this.destinationPath( './.eslintignore' )
  );

  this.fs.copyTpl(
    this.templatePath( '.eslintrc.js' ),
    this.destinationPath( './.eslintrc.js' )
  );

  addPackageJsonScript( this );
}

module.exports = writing;
