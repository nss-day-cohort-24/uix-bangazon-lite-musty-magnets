import React, { Component } from 'react';
import './App.css';
let faker = require('faker');

var randomName = faker.name.findName();
console.log("random Name",randomName);

class App extends Component {
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
