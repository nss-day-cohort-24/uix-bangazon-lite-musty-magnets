import React, {Component} from 'react';
import ReactDOM from 'react-dom';
let faker = require('faker');

export class UserInfo extends Component {
    componentWillMount(){
      let users = [];
      for(let i=0;i<10;i++){
        let uid = faker.random.number();
        let userFName = faker.name.firstName();
        let userLName = faker.name.lastName();
        let userAddress = faker.address.streetAddress();
        let userPhone = faker.phone.phoneNumber();
        let seller = faker.random.boolean();
        let userImage = faker.image.image();

      users.push({
        "uid": uid,
        "first_name": userFName,
        "last_name": userLName,
        "address": userAddress,
        "phone": userPhone,
        "seller": seller,
        "image":userImage

      })
    }
      console.log(users);
      fetch("http://localhost:3000/user",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(users)
})
    }
    render() {
      return (
        <div className="UserInfo">
        hey there
        </div>
      );
    }
  }