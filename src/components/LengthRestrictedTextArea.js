import React, { Component } from 'react';

class LengthRestrictedTextArea extends Component {
  // TODO - 3/13/2017 - KA
  // Create logic for passing maxLength
  // Create logic for counting length

  render() {
    return (
      <textarea className="len-restrict-textarea" maxLength="140"></textarea>
    );
  }
}

export { LengthRestrictedTextArea };
