import React from 'react';
import UserLoginFormTemplate from './UserLoginFormTemplate';

class UserLoginForm extends React.Component {



    getUserValues() {
        let userEmail = document.getElementById('userEmail').value;
        let userPassword = document.getElementById('userPassword').value;
        
        let count = 0;

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
                                    console.log("Congratulations, you've been here before.");
                                }
                            // console.log(element.useremail.includes(userEmail));
                            }
                            catch(e){
                                if(count<1){
                                    console.log("Doesn't exist, see?", e);
                                    count++;
                                }
                                
                            }
                            // if(element.useremail.includes(userEmail)){
                            //     console.log("Found a useremail for element :", element);
                            // }
                            // else{
                            //     console.log(":-(");
                            // }
                        });
                    },
                    (rejected) =>{


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