import React from 'react';
let faker = require('faker');

class UserInfo extends Component {
    fakeUser(){
        let userImage = faker.image.image();
        console.log(userImage);
    }
    render() {
      return (
        <div className="UserInfo">
        </div>
      );
    }
  }