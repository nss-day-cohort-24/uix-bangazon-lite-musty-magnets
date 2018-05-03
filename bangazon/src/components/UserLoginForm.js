import React from 'react';
import UserLoginFormTemplate from './UserLoginFormTemplate';

export default class UserLoginForm extends React.Component {

    getValues() {
        let userEmail = document.getElementById('userEmail').value;
        let userPassword = document.getElementById('userPassword').value;
        console.log("user login values", userEmail, userPassword);
    }

    render() {
        return (
            <div>
                <UserLoginFormTemplate
                    getValues={this.getValues} />
            </div>
        );
    }
}