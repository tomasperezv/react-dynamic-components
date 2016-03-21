import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ReactTextarea from '../react-textarea.js';

describe('sum', () => {

  var component = null;
  beforeEach(() => {
    var element = TestUtils.renderIntoDocument('<div></div>');
    component = ReactDOM.render(React.createElement(ReactTextarea, {
      text: 'Textarea component'
    }), element);
  });

  it('Textarea state initialization', () => {
    expect(component.getInitialState().text).toBe('Textarea component');
  });

});
