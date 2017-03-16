import React, { Component } from 'react';
import Rx from 'rx';
import io from 'socket.io-client';
import { Head } from './components/Head';
import { MessageBoard } from './components/MessageBoard';
import './css/app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      messages: [],
      nickname: this.createRandomNickname(6),
      avatarUrl: this.getAvatarUrl()
    }
  }

  componentDidMount() {
    var socket = io.connect('http://localhost:3001');
    var props = this.props;
    var users = this.state.users;
    var messages = this.state.messages;
    var self = this;

    var socketIdStream = Rx.Observable.create(observer => {
      socket.on('my socketId', data => { observer.onNext(data); });
    });

    socketIdStream.subscribe(data => {
      socket.emit('client connect', {
        nickname: props.nickname,
        socketId: data.socketId,
        connectTime: data.connectTime
      });
    });

    var socketAllUsersStream = Rx.Observable.create(observer => {
      socket.on('all users', data => { observer.onNext(data); });
    });

    socketAllUsersStream.subscribe(data => {
      self.setState({users: data});
    });

    var socketMessageStream = Rx.Observable.create(observer => {
      socket.on('message', data => {
        observer.onNext(data);
      });
    });

    socketMessageStream.subscribe(data => {
      messages.push(data);
      self.setState(messages);
    });
  }

  createRandomNickname = len => {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for(var i = 0; i < len; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  getAvatarUrl = () => {
    const randomKittenUrlArr = [
      'http://s3-us-west-1.amazonaws.com/witty-avatars/default-avatar-1-l.jpg',
      'http://s3-us-west-1.amazonaws.com/witty-avatars/default-avatar-2-l.jpg',
      'http://s3-us-west-1.amazonaws.com/witty-avatars/default-avatar-3-l.jpg',
      'http://s3-us-west-1.amazonaws.com/witty-avatars/default-avatar-4-l.jpg',
      'http://s3-us-west-1.amazonaws.com/witty-avatars/default-avatar-5-l.jpg'];

    const rand = Math.floor(Math.random() * randomKittenUrlArr.length);

    return randomKittenUrlArr[rand];
  }

  render() {
    return (
      <div className="App">
        <Head
          title="Cat Facts"
          pageTitle={this.state.nickname} />
        <MessageBoard
          nickname={this.state.nickname}
          avatarUrl={this.state.avatarUrl}
          messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
