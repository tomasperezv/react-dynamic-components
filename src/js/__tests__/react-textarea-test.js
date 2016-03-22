import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

jest.unmock('../react-textarea.js');
import ReactTextarea from '../react-textarea.js';

describe('ReactTextaarea initialization', () => {

  var textarea = null;
  var elements = {
    textarea: null,
    lengthFeedback: null
  };

  beforeEach(() => {
    textarea = TestUtils.renderIntoDocument(
      <ReactTextarea />
    );

    elements.textarea = ReactDOM.findDOMNode(textarea).children[0];
    elements.lengthFeedback = ReactDOM.findDOMNode(textarea).children[1];
  });

  it('Textarea initialization: default text', () => {
    expect(elements.textarea.textContent).toBe('');
  });

  it('Textarea initialization: text length indicator', () => {
    expect(elements.lengthFeedback.textContent).toBe('0');

    var text = 'New text';
    TestUtils.Simulate.change(elements.textarea, { target: { value: text } });
    expect(elements.lengthFeedback.textContent).toBe('' + text.length);
  });

});
