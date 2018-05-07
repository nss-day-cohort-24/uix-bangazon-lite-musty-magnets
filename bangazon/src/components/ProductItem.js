import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductSellFormTemplate.css';


let ProductItem = (props) => {
    return (  
    
        <div className="Product-item">
            <div className="row">
            
            <div className="col-3">
                <img src={props.image} className="Product-item-img" alt=""></img>
                <div className="row">
                <div className="col align-self-end">{props.price}</div>
                <div className="col align-self-start"> {props.quantity}</div>
                </div>
            </div>

            <div className="col-3">
                <h2>{props.name}</h2>
                <Label>{props.category}</Label>
                <p>{props.description}</p>

                <div className="row mx-auto sell_product_buttons align-items-start">
                <Button className="col btn btn-cancel">Cancel</Button>
                <Button className="col btn btn-add-to-cart" onClick={() => { props.getValues() }}>Add to cart</Button>
                </div>
            </div>

            </div>
        </div>
    )
}

export default ProductItem;