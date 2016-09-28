'use strict';

function install() {
  this.npmInstall(
    [ 'eslint', 'dan-nl/eslint-config-dan-nl' ],
    { 'save': true }
  );
}

module.exports = install;
