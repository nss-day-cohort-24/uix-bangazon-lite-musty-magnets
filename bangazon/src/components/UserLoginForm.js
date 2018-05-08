import React from 'react';
import UserLoginFormTemplate from './UserLoginFormTemplate';
let count = 0;
let User = {

    // id: null,
    // auth: null,
    // first_name : null,
    // last_name : null,
    // email: null,
    // userpassword : null,
    // address : null,
    // seller : null,
    // city : null,  
    // phone : null, 
    // cardnumber : null,
    // crv : null
};

class UserLoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            User : {},
            auth: false
        };
        this.getUserValues = this.getUserValues.bind(this);

    }
    componentDidMount(){
        this.setState({User});
        console.log("The component has rendered. " , this.state);
    }
    getUserValues() {
        let userEmail = document.getElementById('userEmail').value;
        let userPassword = document.getElementById('userPassword').value;
        
        //Get the user.
        fetch(`http://localhost:3000/user?email=${userEmail}&&password=${userPassword}`,
        {
            method: "GET"
        }).then((resp)=>{ 
            resp.json().then(
                (resolved) =>{
                    console.log("Returned? ", resolved);
                    if (resolved.length === 0 ){
                        console.log("No users. ");
                    }

                    else{
                        console.log("New User, set the state.");
                        this.setState({
                            User : resolved[0], 
                            auth: true
                        });

                    }
               
                    },
                    (rejected) =>{
                        console.log("ERROR 6295: This number has been disconnected.");
                    }
                );
            });   
        }
        
        
        render() {
            
            if(!this.state.auth){
                return (
                    <div>
                    <UserLoginFormTemplate
                    getUserValues = {this.getUserValues}/>
                </div>
            );  
            }
            else{

                console.log("APP GOES HERE.");
                return(
                    <div>{this.state.User.first_name}</div>
                );
            }
    }
}

export default UserLoginForm;