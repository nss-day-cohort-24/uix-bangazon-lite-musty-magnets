import React from 'react';
import CreateUserFormTemplate from './CreateUserFormTemplate';

export default class CreateUserForm extends React.Component {

getValues() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let userEmail = document.getElementById('userEmail').value;
    let userPass = document.getElementById('userPass').value;
    let userAddress = document.getElementById('userAddress').value;
    let userCity = document.getElementById('userCity').value;
    let userState = document.getElementById('userState').value;
    let userZip = document.getElementById('userZip').value;
    let userTel = document.getElementById('userTel').value;
    let userCC = document.getElementById('userCC').value;
    let userCRV = document.getElementById('userCRV').value;
    console.log("create user form values", firstName, lastName, userEmail, userPass, userAddress, userCity, userState, userZip, userTel, userCC, userCRV);
}

  render() {
    return (
        <div>
            <CreateUserFormTemplate 
            getValues = {this.getValues}/>
        </div>
    );
  }
}