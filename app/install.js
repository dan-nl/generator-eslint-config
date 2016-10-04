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
  var PromptAnswers = this.options.PromptAnswers;

  if ( !PromptAnswers.get( 'install-eslint' ) ) {
    return;
  }

  this.log( chalk.cyan( 'install' ) );
  this.log( chalk.green( '   package' ) + ' eslint' );
  this.log( chalk.green( '   package' ) + ' ' + PromptAnswers.get( 'eslint-shared-config' ) );

  this.npmInstall(
    [ 'eslint', PromptAnswers.get( 'eslint-shared-config' ) ],
    { 'save-dev': true }
  );
}

module.exports = install;
