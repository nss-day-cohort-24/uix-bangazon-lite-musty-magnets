import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class ProductSellForm extends React.Component {
  render() {
    return (
        <div className="container">
            <Form>
                <FormGroup>
                <Label for="prodName">Product Name/Title</Label>
                <Input type="text" name="prodName" id="prodName" placeholder="Enter your product name here" />
                </FormGroup>
                <FormGroup>
                <Label for="prodCategory">Product Category</Label>
                <Input type="select" name="prodCategory" id="prodCategory">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
                </FormGroup>
                <FormGroup>
                <Label for="imageURL">Image URL</Label>
                <Input type="url" name="imageURL" id="imageURL" placeholder="Enter an image url for your product here" />
                </FormGroup>
                <FormGroup>
                <Label for="prodDescription">Product Description</Label>
                <Input type="textarea" name="prodDescription" id="prodDescription" />
                </FormGroup>
                <FormGroup>
                <Label for="prodQuantity">Quantity of Product Available</Label>
                <Input type="text" name="prodQuantity" id="prodQuantity" placeholder="0" />
                </FormGroup>
                <FormGroup>
                <Label for="prodPrice">Product Price</Label>
                <Input type="text" name="prodPrice" id="prodPrice" placeholder="$0.00" />
                </FormGroup>
                <Button>Cancel</Button>
                <Button>Submit</Button>
            </Form>
        </div>
    );
  }
}