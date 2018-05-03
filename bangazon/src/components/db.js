import React, {Component} from 'react';
import ReactDOM from 'react-dom';
let faker = require('faker');

export class UserInfo extends Component {
    componentWillMount(){

    }
    render() {
      for(let i=0;i<10;i++){
        let newImage = faker.image.people();
        console.log(newImage);
      }
      return (
        
        <div className="UserInfo">
        hey there
        </div>
      );
    }
  }