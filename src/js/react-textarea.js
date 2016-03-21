var ReactTextarea = React.createClass({
  propTypes: {
    defaultText: React.PropTypes.string
  },
  render: function() {
    return React.DOM.div(null,
      React.DOM.textarea({
        defaultValue: this.props.defaultText
      }),
      React.DOM.h3(null, this.props.defaultText.length)
    );
  }
});
