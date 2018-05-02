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
      <BrowserRouter />
      <div className="App">
      <UserInfo />


              <Topnav />
              <Sidenav />
              <Display />
       </div>
          <BrowserRouter />


    );
  }
}

export default App;
