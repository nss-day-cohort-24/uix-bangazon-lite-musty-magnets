import React from 'react';
import CreateUserFormTemplate from './CreateUserFormTemplate';
let newuserobject = {};

export default class CreateUserForm extends React.Component {
constructor(props){
        super(props);
        // this.state = existingUser;
        // this.getUserValues = this.getUserValues.bind(this);

    }

componentDidMount(){
    // this.setState({existingUser});
    // console.log("The component has rendered. " , this.state);
}
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
    //excluded state, zipcode..

    newuserobject = {

        
        first_name : firstName,
        last_name : lastName,
        useremail: newUserEmail,
        userpassword : newUserPass,
        address : userAddress,
        city : userCity,  
        phone : userTel, 
        cardnumber : userCC,
        crv : userCRV

    }
    
    console.log("create user form values", firstName, lastName, newUserEmail, newUserPass, userAddress, userCity, userState, userZip, userTel, userCC, userCRV);
    console.log("Object to pass: ", JSON.stringify(newuserobject));
    fetch("http://localhost:3000/user",
    {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method: "POST",
        body: JSON.stringify(newuserobject)

    }).then((resp)=>{ 
        console.log("Response!!!: ", resp);
        }).catch((error)=>{
            console.log("Error :", error);
        }); 
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