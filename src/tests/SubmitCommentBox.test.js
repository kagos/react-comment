import React from 'react';
import ReactDOM from 'react-dom';
import { SubmitCommentBox } from '../components/SubmitCommentBox';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SubmitCommentBox />, div);
});
