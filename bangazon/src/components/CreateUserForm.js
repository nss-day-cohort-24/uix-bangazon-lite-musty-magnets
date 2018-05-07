import React from 'react';
import CreateUserFormTemplate from './CreateUserFormTemplate';
let newuserobject = {};
let newRegistration = false;

export default class CreateUserForm extends React.Component {
constructor(props){
        super(props);
        // this.state = existingUser;
        // this.getUserValues = this.getUserValues.bind(this);

    }

componentDidMount(){
    // this.setState({existingUser});
    // console.log("The componennpt has rendered. " , this.state);
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
    let count = 1;

    fetch("http://localhost:3000/user",
    {
        method: "GET"
    }).then((resp)=>{ 
        resp.json().then(
            (resolved) =>{
                // for each element of the array
                resolved.forEach((element, index)=>{
                    // if the email includes the string
                    try{
                        if(element.email.includes(newUserEmail)){
                        console.log("User found. Not a new address", element);
                        newRegistration=false; //
                    }// if the email doesn't include the string
                    else if(!element.email.includes(newUserEmail)){
                        console.log("Not a match", count);
                        count++;
                        console.log((resolved.length-1===index), count > 0);
                        if((resolved.length-1===index) && count > 0)
                        {   
                            
                            newRegistration = true;
                            console.log("New registration.", newRegistration);
                        }
                        
                    }}
                    catch(e){
                        console.log("It broke! What DID you DO???!?!");
                    }    
                });
                
            
            newuserobject = {
                id: count,
                first_name : firstName,
                last_name : lastName,
                email: newUserEmail,
                userpassword : newUserPass,
                address : userAddress,
                city : userCity,  
                phone : userTel, 
                cardnumber : userCC,
                crv : userCRV
                }
            console.log("True?", newRegistration, "Object?", newuserobject); 

            if(newRegistration){

                    
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
                        // Id field added to Db.json users
                
                    }).then((resp)=>{ 
                        console.log("Response: ", resp.statusText,".", resp);
                        }).catch((error)=>{
                            console.log("Error :", error.statusText,".");;
                        }); 
            }
        }
        
        )
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