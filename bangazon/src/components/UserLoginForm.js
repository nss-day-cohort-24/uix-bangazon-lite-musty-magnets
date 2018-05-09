import React from 'react';
import UserLoginFormTemplate from './UserLoginFormTemplate';
let count = 0;
let User = {};

class UserLoginForm extends React.Component {
    
        
        render() {
            
            if(!this.props.auth){
                return (
                    <div>
                    <UserLoginFormTemplate
                        toggleAll={this.props.toggleAll}
                        getUserValues={this.props.getUserValues} 
                    />
                </div>
            );  
            }
            else{

                console.log("APP GOES HERE.");
                return(
                    <div></div>
                );
            }
    }
}

export default UserLoginForm;