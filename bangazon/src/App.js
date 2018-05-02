import React, { Component } from 'react';
import './App.css';

import { UserInfo } from './db.js';

import { BrowserRouter } from 'react-router-dom';
import Topnav from './components/Topnav';
import Sidenav from './components/Sidenav';
import Display from './components/Display';


class App extends Component {
  render() {
    return (
        <div className="App">
          <BrowserRouter />
              <UserInfo />
              <Topnav />
              <Sidenav />
              <Display />
          <BrowserRouter />    
        </div>
    );
  }
}

export default App;
