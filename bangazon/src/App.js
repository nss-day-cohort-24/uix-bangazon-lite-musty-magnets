import React, { Component } from 'react';
import './App.css';

import { UserInfo } from './db';


import { BrowserRouter } from 'react-router-dom';
import Topnavbar from './components/Topnavbar';
import Sidenav from './components/Sidenav';
import Display from './components/Display';
import UserModal from './components/UserModal';


class App extends Component {
  render() {
    return (
       <BrowserRouter>
        <div className="App">
              <UserInfo />
              <Topnavbar />
              
              <div className="row">
                <Sidenav className="col-3"/>
                <Display className="col-9"/>
                <UserModal />
              </div>
             
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
