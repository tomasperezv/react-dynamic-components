/**
 * @component ReactTextarea
 */
import React from 'react';
import LogMixin from './mixins/log.js';

// Initialize the methods that will be exposed by the mixin
LogMixin.initialize();

var Textarea = React.createClass({

  /**
   * @type {Array} mixins
   */
  mixins: [LogMixin],

  /**
   * @type {Object} propTypes
   */
  propTypes: {
    text: React.PropTypes.string
  },

  /**
   * @method getInitialState
   */
  getInitialState: function() {
    return {
      text: this.props.text || ''
    }
  },

  /**
   * @method render
   */
  render: function() {
    return React.DOM.div(null,
      React.DOM.textarea({
        defaultValue: this.state.text,
        onChange: this._textChange
      }),
      React.DOM.h3(null, this.state.text.length)
    );
  },

  /**
   * @method _textChange
   * @param {Event} ev
   * @private
   */
  _textChange: function(ev) {
    this.setState({
      text: ev.target.value
    });
  }
});

module.exports = Textarea;
