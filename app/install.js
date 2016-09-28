'use strict';

function install() {
  this.log( 'installing for eslint-config' );

  this.npmInstall(
    [ 'eslint', 'dan-nl/eslint-config-dan-nl' ],
    { 'save': true }
  );
}

module.exports = install;
