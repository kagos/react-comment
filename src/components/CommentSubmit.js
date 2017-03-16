import React, { Component } from 'react';

class CommentSubmit extends Component {
  render() {
    return (
      <div className="submit-comment-button-container">
        <button id="comment-submit-button" className="comment-submit-button primary light-font">
          Submit
        </button>
        <button className="comment-cancel-button secondary light-font">
          Cancel
        </button>
      </div>
    )
  }
}

export { CommentSubmit };
