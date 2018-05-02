import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Topnavbar from './components/Topnavbar';
import Sidenav from './components/Sidenav';
import Display from './components/Display';

class App extends Component {
  render() {
    return (
        <div className="App">
          <BrowserRouter />
              <Topnavbar />
              <Sidenav />
              <Display />
          <BrowserRouter />
      </div>
    );
  }
}

export default App;
