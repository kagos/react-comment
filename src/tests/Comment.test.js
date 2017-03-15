import React from 'react';
import ReactDOM from 'react-dom';
import { Comment } from '../components/Comment';

const comment = {
  date: new Date(),
  text: 'Hooray for tests!',
  author: {
    name: 'XX_mr_test_pants_XX',
    avatarUrl: 'http://s3-us-west-1.amazonaws.com/witty-avatars/default-avatar-1-l.jpg'
  }
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Comment content={comment} />, div);
});
