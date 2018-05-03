import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

 let  ProductSellFormTemplate = (props) => {

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
                        <option>Electronics</option>
                        <option>Outdoor</option>
                        <option>Books</option>
                        <option>Video Games</option>
                        <option>Miscellaneous</option>
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
                <Button onClick={() => { props.getValues() }}>Submit</Button>
            </Form>
        </div>
    );
  }

export default ProductSellFormTemplate; 
