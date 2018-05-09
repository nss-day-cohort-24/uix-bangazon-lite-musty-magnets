import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Buttons from './Buttons';
import LoginButton from './LoginButton';



let UserLoginFormTemplate = (props) => {

  return (
    <Form>
      <FormGroup>
        <Label for="userEmail">Email</Label>
        <Input type="email" name="userEmail" id="userEmail" placeholder="Enter your email" />
      </FormGroup>
      <FormGroup>
        <Label for="userPassword">Password</Label>
        <Input type="password" name="userPassword" id="userPassword" placeholder="Enter your password" />
      </FormGroup>
      <LoginButton class={"btn-login float-right"} function={props.getUserValues} toggle={props.toggle}  toggleAll={props.toggleAll} label={"Login"} />
    </Form>
  );
}

export default UserLoginFormTemplate;