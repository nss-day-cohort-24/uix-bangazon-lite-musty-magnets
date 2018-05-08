import React, { Component } from 'react';
import './App.css';

import { UserInfo } from './components/db';

import { BrowserRouter } from 'react-router-dom';
import Topnavbar from './components/Topnavbar';
import Sidenav from './components/Sidenav';
import Display from './components/Display';

import './components/button.css';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
        <div className="App">
              <UserInfo />
              <Topnavbar />
              
              <div className="row">
                <Sidenav className="col-2"/>
                <Display className="col-10" />
              </div>
             
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
