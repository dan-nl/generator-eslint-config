'use strict';

/**
 * @returns {void}
 */
function initializing() {
  this.package_json = this.package_json || this.fs.readJSON( './package.json' ) || '{}';
}

module.exports = initializing;
