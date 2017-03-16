import React, { Component } from 'react';

class Comment extends Component {
  formatDate = (date) => date.toLocaleDateString();

  render() {
    return(
      <div className="comment comment-border">
        <img className="avatar" src={this.props.content.avatarUrl} />
        <div className="comment-body">
          <div className="author">
            {this.props.content.nickname}
          </div>
          <div className="date">
            {this.props.content.timestamp}
          </div>
          <div className="text">
            {this.props.content.message}
          </div>
        </div>
      </div>
    );
  }
}

export { Comment };
