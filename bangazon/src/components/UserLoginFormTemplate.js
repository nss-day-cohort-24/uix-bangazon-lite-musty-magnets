import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import Buttons from './Buttons';


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
      <Buttons class={`btn-account-cancel`} label={"Cancel"} />
      <Button onClick={() => { props.getUserValues() }}>Submit</Button>
    </Form>
  );
}

export default UserLoginFormTemplate;