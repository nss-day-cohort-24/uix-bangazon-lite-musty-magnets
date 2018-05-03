import React from 'react';
import CreateUserFormTemplate from './CreateUserFormTemplate';

export default class CreateUserForm extends React.Component {

getNewUserValues() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let newUserEmail = document.getElementById('newUserEmail').value;
    let newUserPass = document.getElementById('newUserPass').value;
    let userAddress = document.getElementById('userAddress').value;
    let userCity = document.getElementById('userCity').value;
    let userState = document.getElementById('userState').value;
    let userZip = document.getElementById('userZip').value;
    let userTel = document.getElementById('userTel').value;
    let userCC = document.getElementById('userCC').value;
    let userCRV = document.getElementById('userCRV').value;
    console.log("create user form values", firstName, lastName, newUserEmail, newUserPass, userAddress, userCity, userState, userZip, userTel, userCC, userCRV);
}

  render() {
    return (
        <div>
            <CreateUserFormTemplate 
            getNewUserValues = {this.getNewUserValues}/>
        </div>
    );
  }
}