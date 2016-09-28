'use strict';

function writing() {
  this.fs.copyTpl(
    this.templatePath( '.eslintignore' ),
    this.destinationPath( './.eslintignore' )
  );

  this.fs.copyTpl(
    this.templatePath( '.eslintrc.js' ),
    this.destinationPath( './.eslintrc.js' )
  );
}

module.exports = writing;
