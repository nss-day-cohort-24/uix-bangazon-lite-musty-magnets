import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductSellFormTemplate.css';


<div className="News-body"> 
        <img src={props.image}  className="News-photo" alt=""/> 
        <h5 className="News-hed"> <a href={props.url} target="_blank">{props.title} </a></h5> 
        <p className="News-description"><span className="News-source">{props.source}</span>  &mdash; {props.description} </p> 

let ProductItem = (props) => {
    return (  
    
    <div className="Product-item">
    <h3 className="sell_product">Sell a Product</h3>
    <div>
        <div className="row">
          <div className="col-5">

            <img src={props.image} className="Product-item-img" alt=""></img>

            <div>
                <Label for="imageURL">Image URL</Label>
                <Input type="url" name="imageURL" id="imageURL" placeholder="Enter an image url for your product here" />
            </div>

            <div className="row align-self-end">
              <div> className="col">{/*Price per Unit*/}
                  <Label for="prodPrice">Product Price</Label>
                  <Input type="text" name="prodPrice" id="prodPrice" placeholder="$0.00" />
              </div>

              <div className="col"> {/*Quantity*/}
                <Label for="prodQuantity">Units Available</Label>
                <Input type="text" name="prodQuantity" id="prodQuantity" placeholder="0" />
              </div>
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

    </div>
</div>
    )
}