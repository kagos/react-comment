import React, { Component } from 'react';
import { CommentBox } from './components/CommentBox';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CommentBox />
      </div>
    );
  }
}

export default App;