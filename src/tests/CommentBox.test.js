import React from 'react';
import ReactDOM from 'react-dom';
import { CommentBox } from '../components/CommentBox';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CommentBox />, div);

  it('has a submit button', () => {
    const button = document.getElementByClass('comment-submit-btn');
    ReactDom.isDOMComponent(button);

    expect('is clickable', () => {
      const node = this;
      ReactTestUtils.Simulate.click(node);
    });
  });
});
