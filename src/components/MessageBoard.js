import React, { Component } from 'react';
import { Comment } from '../components/Comment';

class MessageBoard extends Component {

  getAvatarUrl = () => {
    // TODO - 3/14/2017 - KA
    // Remove RandomKitten generator .. maybe

    const randomKittenUrlArr = [
      'http://s3-us-west-1.amazonaws.com/witty-avatars/default-avatar-1-l.jpg',
      'http://s3-us-west-1.amazonaws.com/witty-avatars/default-avatar-2-l.jpg',
      'http://s3-us-west-1.amazonaws.com/witty-avatars/default-avatar-3-l.jpg',
      'http://s3-us-west-1.amazonaws.com/witty-avatars/default-avatar-4-l.jpg',
      'http://s3-us-west-1.amazonaws.com/witty-avatars/default-avatar-5-l.jpg'];

    const rand = Math.ceil(Math.random() * randomKittenUrlArr.length);

    return randomKittenUrlArr[rand];
  }

  comment = {
    date: new Date(),
    text: 'Hooray for cats!',
    author: {
      name: 'XX_mr_orange_pants_XX',
      avatarUrl: this.getAvatarUrl()
    }
  }

  render() {
    return (
      <div className="message-board-container">
        <Comment content={this.comment} />
      </div>
    );
  }
}

export { MessageBoard };
