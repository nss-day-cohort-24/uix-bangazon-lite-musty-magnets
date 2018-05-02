import React, {Component} from 'react';
import ReactDOM from 'react-dom';
let faker = require('faker');

export class UserInfo extends Component {
    componentDidMount(){
        let userImage = faker.image.image();
        console.log(userImage);
    }
    render() {
      return (
        <div className="UserInfo">
        hey there
        </div>
      );
    }
  }