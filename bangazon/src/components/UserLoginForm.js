import React from 'react';
import UserLoginFormTemplate from './UserLoginFormTemplate';

class UserLoginForm extends React.Component {



    getUserValues() {
        let userEmail = document.getElementById('userEmail').value;
        let userPassword = document.getElementById('userPassword').value;
        console.log("user login values", userEmail, userPassword);


        let existingUser = {
            "useremail": userEmail,
            "userpassword": userPassword
          }
        console.log("This is the existing user:", existingUser);
    
        fetch("http://localhost:3000/user",
            {
                method: "GET"
            }).then((resp)=>{ 
                resp.json().then(
                    (resolved) =>{
                        
                    }
                );
            });
                 
            }


    render() {
        return (
            <div>
                <UserLoginFormTemplate
                getUserValues = {this.getUserValues} />
            </div>
        );
    }
}

export default UserLoginForm;