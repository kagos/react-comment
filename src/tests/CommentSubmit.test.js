import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import { CommentSubmit } from '../components/CommentSubmit';

describe('CommentSubmit', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CommentSubmit />, div);
  });

  it('has a submit button', () => {
    const component = ReactTestUtils.renderIntoDocument(<CommentSubmit />);
    const button = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'comment-submit-button');

    test('is clickable', () => {
      const spy = jest.spyOn(button, 'submitComment');
      const canSubmit = button.submitComment();

      expect(spy).toHaveBeenCalled();
      expect(canSubmit).toBe(true);

      spy.mockReset();
      spy.mockRestore();
    });
  });

  it('has a cancel button', () => {
    const component = ReactTestUtils.renderIntoDocument(<CommentSubmit />);
    const button = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'comment-cancel-button');

    test('is clickable', () => {
      const spy = jest.spyOn(button, 'cancelComment');
      const canCancel = button.cancelComment();

      expect(spy).toHaveBeenCalled();
      expect(canCancel).toBe(true);

      spy.mockReset();
      spy.mockRestore();
    });
  });
});
