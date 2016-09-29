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

  if ( typeof this.package_json.scripts.eslint === 'string' ) {
    return;
  }

  this.fs.extendJSON( './package.json', { scripts: { eslint: 'eslint .' } } );
}

module.exports = writing;
