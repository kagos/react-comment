import React, { Component } from 'react';
import Rx from 'rx';
import $ from 'jquery';
import { Comment } from '../components/Comment';
import { SubmitCommentBox } from '../components/SubmitCommentBox';

class MessageBoard extends Component {

  componentDidMount() {
      const button = document.getElementById('comment-submit-button');
      const textField = document.getElementById('submit-comment-input');
      const nickname = this.props.nickname;
      const avatarUrl = this.props.avatarUrl;
      const clickStream = Rx.Observable.fromEvent(button, 'click').map(e => true);
      const textEnteredStream = Rx.Observable.fromEvent(textField, 'keyup').map(e => e.target.value);
      const sendMessageStream = Rx.Observable.merge(clickStream);
      const mergedStream = textEnteredStream.takeUntil(sendMessageStream);

      let text = '';
      let onNext = t => { text = t }
      let onError = e => {}
      let onComplete = () => {
        // TODO - 3/15/2017 - KA
        // Remove static URL (http://localhost:3001/comment)

        $.post('http://localhost:3001/comment',
          {
            'message': text,
            'nickname': nickname,
            'timestamp': Date.now(),
            'avatarUrl': avatarUrl
          }
        );

        textField.value = '';
        textField.focus();
        mergedStream.subscribe(onNext, onError, onComplete);
      }

      mergedStream.subscribe(onNext, onError, onComplete);
  }

  render() {
    return (
      <div className="message-board-container">
        {
          this.props.messages.map((message, index) =>
            <Comment key={index} content={message} />
          )
        }
        <SubmitCommentBox />
      </div>
    );
  }
}

export { MessageBoard };
