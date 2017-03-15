import React, { Component } from 'react';

class CommentSubmit extends Component {
  clearComment() {
    // TODO - 3/14/2017 - KA
    // Clear textarea in SubmitCommentBox
    alert("CommentSubmit.clearComment");
  }

  submitComment() {
    // TODO - 3/13/2017 - KA
    // API call to DB
    // Return success/fail status
    alert("CommentSubmit.submitComment");

  }
  render() {
    return (
      <div className="submit-comment-button-container">
        <button className="comment-submit-button primary light-font" onClick={this.submitComment}>
          Submit
        </button>
        <button className="comment-cancel-button secondary light-font" onClick={this.clearComment}>
          Cancel
        </button>
      </div>
    )
  }
}

export { CommentSubmit };
