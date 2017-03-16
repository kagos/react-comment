import React, { Component } from 'react';
import { CommentSubmit } from '../components/CommentSubmit';

class SubmitCommentBox extends Component {

  render() {
    return (
      <div className="submit-comment-box">
        <h3 className="dark light-font">Leave a comment</h3>
        <textarea id="submit-comment-input" className="primary-border" />
        <CommentSubmit />
      </div>
    )
  }
}

export { SubmitCommentBox };
