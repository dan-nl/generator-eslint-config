'use strict';

/**
 * @type {*[]}
 */
var prompts = [
  {
    default: true,
    message: 'install eslint-config',
    name: 'install-eslint',
    type: 'confirm'
  },
  {
    default: 'dan-nl/eslint-config-dan-nl',
    message: 'eslint shared config on github',
    name: 'eslint-shared-config',
    type: 'input',
    when: function ( answers ) {
      return answers[ 'install-eslint' ];
    }
  }
];

module.exports = prompts;
