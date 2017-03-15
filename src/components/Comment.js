import React, { Component } from 'react';

class Comment extends Component {
  formatDate = (date) => date.toLocaleDateString();

  render() {
    return(
      <div className="comment comment-border">
        <img className="avatar"
         src={this.props.content.author.avatarUrl}
         alt={this.props.content.author.name} />
        <div className="comment-body">
          <div className="author">
            {this.props.content.author.name}
          </div>
          <div className="date">
            {this.formatDate(this.props.content.date)}
          </div>
          <div className="text">
            {this.props.content.text}
          </div>
        </div>
      </div>
    );
  }
}

export { Comment };
