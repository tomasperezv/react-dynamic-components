import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

jest.unmock('../react-textarea.js');
import ReactTextarea from '../react-textarea.js';

describe('ReactTextaarea initialization', () => {

  var textarea = null;
  beforeEach(() => {

    textarea = TestUtils.renderIntoDocument(
      <ReactTextarea />
    );

  });

  it('Textarea initialization: default text', () => {
    const node = ReactDOM.findDOMNode(textarea).children[0];
    expect(node.textContent).toBe('');
  });

  it('Textarea initialization: text length indicator', () => {
    var text = 'New text';
    const element = ReactDOM.findDOMNode(textarea).children[0];
    TestUtils.Simulate.change(element, { target: { value: text } });
    expect(element.textContent).toBe(text);
  });

});
