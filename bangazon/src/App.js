import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Topnavbar from './components/Topnavbar';
import Sidenav from './components/Sidenav';
import Display from './components/Display';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
              <Topnavbar />
              <Sidenav />
              <Display />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
