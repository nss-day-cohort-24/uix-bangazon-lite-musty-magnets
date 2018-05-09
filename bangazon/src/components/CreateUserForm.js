import React from 'react';
import CreateUserFormTemplate from './CreateUserFormTemplate';


let User = {

    id: null,
    first_name : null,
    last_name : null,
    email: null,
    userpassword : null,
    address : null,
    seller : null,
    city : null,  
    phone : null, 
    cardnumber : null,
    crv : null
};

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

export default class CreateUserForm extends React.Component {
constructor(props){
        super(props);
        this.state = {User};
        this.getNewUserValues = this.getNewUserValues.bind(this);
        // this.getExistingUser = this.getExistingUser.bind(this);
    }

componentDidMount(){
    // this.setState({existingUser});
    // console.log("The componennpt has rendered. " , this.state);
}




// getExistingUser(existingUser){
// // Set existing user to login
//     User = {
//         uid: getRandomInt(99999 - 10000),
//         id: existingUser.id,
//         first_name : existingUser.first_name,
//         last_name : existingUser.last_Name,
//         email: existingUser.email,
//         userpassword : existingUser.password,
//         address : existingUser.address,
//         seller: existingUser.seller,  
//         phone : existingUser.phone, 
//         cardnumber : existingUser.cardnumber,
//         crv : existingUser.crv
//     }

//     console.log("Logging in existing user.");
//     this.setState( {User}, function(){
//         console.log("Logged in:", this.state);
//     });
//     console.log("Fetching...");
//     fetch('http://localhost:3000/user?id=4',{
//         method: "PATCH",
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//             },
//         body: JSON.stringify({
//             "isActive?" : true 
//         })

//     }).then((resp)=>{
//         console.log("Response: ", resp.statusText,".", resp);

//     });
// }
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

    // Get the users,
    fetch("http://localhost:3000/user",
    {
        method: "GET"
    }).then((resp)=>{ //then pass the response
        let newRegistration = false;
        resp.json().then( //take that response and turn it into a json, then...
            (resolved) =>{ // the thenable is ready, and 
                // for each element of the array like object
                resolved.forEach((element, index)=>{ // take the element and it's index
                    // if the email includes the string
                    try{ //try this block
                        if(element.email.includes(newUserEmail)){ //if it is true that email includes this string...
                        newRegistration=false; //set to false
                        console.log("User found. Not a new address", element, "new Registration set to", newRegistration);
                        
                    }// if the email doesn't include the string
                    else if(!element.email.includes(newUserEmail)){ //if false then run this block of code
                        count++;
                        if((resolved.length-1===index) && count > 0) // if the array is at its end, and count is greater than one...
                        {   
                            
                            newRegistration = true;
                            console.log("New registration.", newRegistration);
                        }
                        
                    }}
                    catch(e){
                        console.log("Well, the world's ending... I guess.");
                    }    
                });
                
            
            User = {
                uid: getRandomInt(99999 - 10000),
                id: count,
                first_name : firstName,
                last_name : lastName,
                email: newUserEmail,
                password : newUserPass,
                address : userAddress,
                city : userCity,  
                phone : userTel, 
                cardnumber : userCC,
                seller : null,
                crv : userCRV
                }


            console.log("End of code block:", !newRegistration); 

            if(newRegistration){

                    
                    console.log("create user form values", firstName, lastName, newUserEmail, newUserPass, userAddress, userCity, userState, userZip, userTel, userCC, userCRV);
                    console.log("Object to pass: ", JSON.stringify(User));
                    fetch("http://localhost:3000/user",
                    {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                            },
                        method: "POST",
                        body: JSON.stringify(User)
                        // Id field added to Db.json users
                
                    }).then((resp)=>{
                            console.log("Response: ", resp.statusText,".", resp);

                        }
                        //END OF TEST
                        ).catch((error)=>{
                            console.log("Error :", error.statusText,".");;
                        }); 
                        
                        
                        this.setState({User}, function(){
                            console.log("Updated:", this);
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