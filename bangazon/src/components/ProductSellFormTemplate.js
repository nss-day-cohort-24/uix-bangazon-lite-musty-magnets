import React from 'react';
import { Form, FormGroup, Label, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductSellFormTemplate.css';
import Buttons from "./Buttons";
import { NavLink } from 'react-router-dom';
import productImage from '../images/productImage.png'

 let  ProductSellFormTemplate = (props) => {

    return (
        <div className="col-10 mx-auto pt-3 sell_product_window">
            <h3 className="sell_product">Sell a Product</h3>
            <Form>
                <div className="row">
                  <div className="col-5">

                    <img src={productImage} alt=""></img>

                    <FormGroup> {/*Image URL*/}
                        <Label for="imageURL">Image URL</Label>
                        <Input type="url" name="imageURL" id="imageURL" placeholder="Enter an image url for your product here" />
                    </FormGroup>

                    <div className="row align-self-end">
                      <FormGroup className="col">{/*Price per Unit*/}
                          <Label for="prodPrice">Product Price</Label>
                          <InputGroup className="priceInputGroup">
                            <InputGroupAddon addonType="prepend" className="prependDollar">$</InputGroupAddon>
                            <Input placeholder="ex 10.00" type="number" step="1" className="priceInput" name="prodPrice" id="prodPrice" />
                        </InputGroup>
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
                            <option>Select a category</option>
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

                      <NavLink to="/"><Buttons class={`btn-cancel`} label={"Cancel"} function={props.getValues}/></NavLink>
                      <NavLink to="/"><Buttons class={'btn-list-item'} label={"List Product"} function={props.getValues} /></NavLink>

                    </div>

                  </div>

                </div>{/*Wraps columns*/} 

            </Form>
        </div>
    );
  }

export default ProductSellFormTemplate; 
