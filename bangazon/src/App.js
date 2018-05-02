import React, { Component } from 'react';
import './App.css';
import { UserInfo } from './db.js';

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
