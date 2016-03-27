'use strict';

/**
 * @module LogMixin
 */
module.exports = {

  /**
   * @type {Array} _methodsToLog
   * @private
   */
  _methodsToLog: ['componentWillUpdate', 'componentDidUpdate', 'componentWillMount', 'componentDidMount', 'componentWillUnmount'],

  /**
   * @method initialize
   * @private
   */
  initialize: function initialize(method, args) {
    var self = this;
    this._methodsToLog.map(function (method) {
      self[method] = function () {
        console.log(method, arguments);
      };
    });
  }
};