import React, {Component} from 'react';
import ReactDOM from 'react-dom';
let faker = require('faker');
let count = 0;


export class UserInfo extends Component {
  
  
    componentDidMount(){
        let userImage = faker.image.image();
        console.log(userImage);
      count++;
        if (count === 2){

          console.log("2");
          // let fakeData = new XMLHttpRequest();
          // fakeData.open("POST", "http://localhost:3000/order");
          // fakeData.send();
    
          // fakeData.addEventListener("load", function(){
    
          //   var data = JSON.parse(this.responseText);
          //   console.log("Data: ", data);
        }
    }

    compon
    render() {
      
      return (
        <div className="UserInfo">
        hey there
        </div>
      );
    }
 












    componentWillMount(){
      
      count++;
      if (count === 1){
        let fakeData = new XMLHttpRequest();
        fakeData.open("GET", "http://localhost:3000/order");
        fakeData.send();

        fakeData.addEventListener("load", function(){

          var data = JSON.parse(this.responseText);
          console.log("Data: ", data);
    });
    



    
  } 



}

}