import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

let CreateUserFormTemplate = (props) => {

    return (
      <Form>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input type="text" name="firstName" id="firstName" placeholder="Ricky" />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input type="text" name="lastName" id="lastName" placeholder="Bobby" />
        </FormGroup>
        <FormGroup>
          <Label for="newUserEmail">Email</Label>
          <Input type="email" name="newUserEmail" id="newUserEmail" placeholder="RickyBobby@gmail.com" />
        </FormGroup>
        <FormGroup>
          <Label for="newUserPass">Password</Label>
          <Input type="password" name="newUserPass" id="newUserPass" placeholder="Enter a unique password" />
        </FormGroup>
        <FormGroup>
          <Label for="userAddress">Address</Label>
          <Input type="text" name="userAddress" id="userAddress" placeholder="Enter your mailing address" />
        </FormGroup>
        <FormGroup>
          <Label for="userCity">City</Label>
          <Input type="text" name="userCity" id="userCity" placeholder="Schenectady" />
        </FormGroup>
        <FormGroup>
          <Label for="userState">State</Label>
          <Input type="text" name="userState" id="userState" placeholder="NY" />
        </FormGroup>
        <FormGroup>
          <Label for="userZip">Zipcode</Label>
          <Input type="number" name="userZip" id="userZip" placeholder="12301" />
        </FormGroup>
        <FormGroup>
          <Label for="userTel">Phone Number</Label>
          <Input type="tel" name="userTel" id="userTel" placeholder="212-555-1234" />
        </FormGroup>
        <FormGroup>
          <Label for="userCC">Credit Card Number</Label>
          <Input type="number" name="userCC" id="userCC" placeholder="1234 5678 9102 3456" />
        </FormGroup>
        <FormGroup>
          <Label for="userCRV">CRV</Label>
          <Input type="number" name="userCRV" id="userCRV" placeholder="456" />
        </FormGroup>

        <Button color="success" className="float-right" onClick={() => { props.getNewUserValues() }}>Create Account</Button>
      </Form>
    );
  }

export default CreateUserFormTemplate;