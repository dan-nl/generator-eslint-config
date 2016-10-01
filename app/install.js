/* eslint no-invalid-this: off */

'use strict';

/**
 * module dependencies
 */
var chalk = require( 'chalk' );

/**
 * @returns {undefined}
 */
function install() {
  this.log( chalk.cyan( 'npm install' ) + ' for ' + this.options.namespace );

  this.npmInstall(
    [ 'eslint', 'dan-nl/eslint-config-dan-nl' ],
    { 'save-dev': true }
  );
}

module.exports = install;
