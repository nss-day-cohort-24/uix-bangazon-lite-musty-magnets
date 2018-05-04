import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductSellFormTemplate.css';

 let  ProductSellFormTemplate = (props) => {

    return (
        <div className="container sell_product_window">
            <h3 className="sell_product">Sell a Product</h3>
            <Form>
                <div className="row">
                  <div className="col-5">

                    <img src="http://via.placeholder.com/250x250"></img>

                    <FormGroup> {/*Image URL*/}
                        <Label for="imageURL">Image URL</Label>
                        <Input type="url" name="imageURL" id="imageURL" placeholder="Enter an image url for your product here" />
                    </FormGroup>

                    <div className="row align-self-end">
                      <FormGroup className="col">{/*Price per Unit*/}
                          <Label for="prodPrice">Product Price</Label>
                          <Input type="text" name="prodPrice" id="prodPrice" placeholder="$0.00" />
                      </FormGroup>

                      <FormGroup className="col"> {/*Quantity*/}
                        <Label for="prodQuantity">Units Available</Label>
                        <Input type="text" name="prodQuantity" id="prodQuantity" placeholder="0" />
                      </FormGroup>
                    </div>

                  </div>

                  <div className="col-7">
                    <FormGroup> {/*Product Name*/}
                        <Label for="prodName">Product Name/Title</Label>
                        <Input type="text" name="prodName" id="prodName" placeholder="Enter your product name here" />
                    </FormGroup>
                    <FormGroup> {/*Category*/}
                        <Label for="prodCategory">Product Category</Label>
                        <Input type="select" name="prodCategory" id="prodCategory">
                            <option selected>Select a category</option>
                            <option>Electronics</option>
                            <option>Outdoor</option>
                            <option>Books</option>
                            <option>Video Games</option>
                            <option>Miscellaneous</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="prodDescription">Product Description</Label>
                        <Input type="textarea" name="prodDescription" id="prodDescription" rows="4" />
                    </FormGroup>

                    <div className="row mx-auto sell_product_buttons align-items-start">
                      <Button className="col-5 btn btn-cancel">Cancel</Button>
                      <Button className="col-5 btn btn-add" onClick={() => { props.getValues() }}>Add Product</Button>
                    </div>

                  </div>

                </div>{/*Wraps columns*/} 

            </Form>
        </div>
    );
  }

export default ProductSellFormTemplate; 
