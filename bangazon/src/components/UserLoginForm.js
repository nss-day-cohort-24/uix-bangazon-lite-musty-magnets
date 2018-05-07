import React from 'react';
import UserLoginFormTemplate from './UserLoginFormTemplate';
let count = 0;
let existingUser = { useremail: null, userpassword: null};
class UserLoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = existingUser;
        this.getUserValues = this.getUserValues.bind(this);

    }
    componentDidMount(){
        this.setState({existingUser});
        console.log("The component has rendered. " , this.state);
    }
    getUserValues() {
        let userEmail = document.getElementById('userEmail').value;
        let userPassword = document.getElementById('userPassword').value;
        
        //Get the user.
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
                                console.log("Login found user. Email:", userEmail," Password:", userPassword);
                                existingUser = {useremail: userEmail, userpassword: userPassword}
                                this.setState({existingUser},function(){
                                    console.log("User is now registered in updated state: ", this);
                                    });  
                                }
                            }
                            catch(e){
                                if(count>=1){
                                    console.log("ERROR:", e, count);
                                    count++;
                                }
                            }
                            finally{
                                if(count>1){
                                    
                                    console.log("No element matched the query key. Are you sure the element you're searching for exists in the db.json?");
                                    count++;
                                }
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
                getUserValues = {this.getUserValues}/>
            </div>
        );
    }
}

export default UserLoginForm;