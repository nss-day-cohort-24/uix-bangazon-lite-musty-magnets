import React, { Component } from 'react';
import './App.css';
import { UserInfo } from './db';

class App extends Component {
  render() {
    return (
      <div className="App">
      <UserInfo />
      </div>
    );
  }
}

export default App;
