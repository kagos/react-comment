import React, { Component } from 'react';

class Head extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="primary light-font">{this.props.title}</h1>
        <h2 className="secondary light-font">{this.props.pageTitle}</h2>
      </div>
    );
  }
}

export { Head };
