import React, { Component } from 'react';
import { CommentSubmit } from '../components/CommentSubmit';

class SubmitCommentBox extends Component {
  render() {
    return (
      <div className="submit-comment-box">
        <h3 className="primary light-font">Leave a comment</h3>
        <textarea className="primary-border" />
        <CommentSubmit />
      </div>
    )
  }
}

export { SubmitCommentBox };
