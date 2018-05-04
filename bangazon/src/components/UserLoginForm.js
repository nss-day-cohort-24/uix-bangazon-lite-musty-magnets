import React from 'react';
import UserLoginFormTemplate from './UserLoginFormTemplate';
let count = 0;

class UserLoginForm extends React.Component {



    getUserValues() {
        let userEmail = document.getElementById('userEmail').value;
        let userPassword = document.getElementById('userPassword').value;
        let existingUser = {
            "useremail": userEmail,
            "userpassword": userPassword
          }
        fetch("http://localhost:3000/user",
            {
                method: "GET"
            }).then((resp)=>{ 
                resp.json().then(
                    (resolved) =>{
                        console.log(resolved);
                        resolved.forEach(element => {
                            try{
                                if(element.useremail.includes(userEmail)){
                                   // Do Something here.
                                   console.log("Successful");


                                }
                            }
                            catch(e){
                                if(count<1){
                                    console.log("ERROR 6295: This number has been disconnected.", e);
                                    count++;
                                }
                            }
                            finally{
                                console.log("No element matched the query key.");
                            }
                        });
                    },
                    (rejected) =>{
                        console.log("ERROR 6295: This number has been disconnected.");

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