import React from 'react';
import UserLoginFormTemplate from './UserLoginFormTemplate';

class UserLoginForm extends React.Component {

    getUserValues() {
        let userEmail = document.getElementById('userEmail').value;
        let userPassword = document.getElementById('userPassword').value;
        console.log("user login values", userEmail, userPassword);
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