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
 











    
    componentWillMount(){

    let fakeData = new XMLHttpRequest();
    fakeData.open("GET", "http://localhost:3000/order");
    fakeData.send();

    fakeData.addEventListener("load", function(){

      var data = JSON.parse(this.responseText);
      console.log("Data: ", data);
    });
  } 

}