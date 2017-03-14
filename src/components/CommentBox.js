import React, { Component } from 'react';
import { LengthRestrictedTextArea } from '../components/LengthRestrictedTextArea';

class CommentBox extends Component {
  render() {
    return (
      <div className="comment-box">
        <LengthRestrictedTextArea maxLength="140" />
        <CommentSubmit />
      </div>
    )
  }
}

class CommentSubmit extends Component {
  allowSubmission = true;
  submitBtnText = "Submit";

  submitComment(allowSubmission) {
    // TODO - 3/13/2017 - KA
    // API call to DB
    // Return success/fail status
    // Update button text on submit
    alert("CommentSubmit.submitComment");

    //this.allowSubmission = true;
    //this.submitBtnText = "";
  }
  render() {
    return (
      <button className="comment-submit-btn" onClick={this.allowSubmission ? this.submitComment() : ""}>
        {this.submitBtnText}
      </button>
    )
  }
}

export { CommentBox };
