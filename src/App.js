import React, { Component } from 'react';
import { Head } from './components/Head';
import { MessageBoard } from './components/MessageBoard';
import { SubmitCommentBox } from './components/SubmitCommentBox';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head title="A1 Message Board" pageTitle="Comments" />
        <MessageBoard />
        <SubmitCommentBox />
      </div>
    );
  }
}

export default App;
