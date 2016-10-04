/* eslint no-invalid-this: off */

'use strict';

/**
 * @returns {undefined}
 */
function writing() {
  if ( !this.options.PromptAnswers.get( 'install-eslint' ) ) {
    return;
  }

  this.fs.copyTpl(
    this.templatePath( '.eslintignore' ),
    this.destinationPath( '.eslintignore' )
  );

  this.fs.copyTpl(
    this.templatePath( '.eslintrc.js' ),
    this.destinationPath( '.eslintrc.js' )
  );
}

module.exports = writing;
