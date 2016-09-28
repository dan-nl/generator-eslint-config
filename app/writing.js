'use strict';

function writing() {
  var package_json = this.fs.readJSON( './package.json' );

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
