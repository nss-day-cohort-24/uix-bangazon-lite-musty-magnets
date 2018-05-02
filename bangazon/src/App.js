import React, { Component } from 'react';
import './App.css';

import { UserInfo } from './db.js';

import { BrowserRouter } from 'react-router-dom';
import Topnavbar from './components/Topnavbar';
import Sidenav from './components/Sidenav';
import Display from './components/Display';


class App extends Component {
  render() {
    return (
     <div>
       <BrowserRouter>
        <div className="App">
              <UserInfo />
              <Topnavbar />
              <Sidenav />
              <Display />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
