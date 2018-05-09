import React from 'react';
import { Button, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductItem.css';
import './button.css';


let ProductItem = (props) => {
    return (  
    
        <div className="Product-item">
            
            <div className="row">
            
                <div className="col-7">
                    <img src={props.image} className="Product-item-img" alt=""></img>
                    <p className="col text-right product-item-Qty">Qty {props.quantity} </p>
                    
                    <div className="row Product-item-row">
                        <h2 className="col-6 text-left">${props.price}</h2>
                        <div className="col d-flex justify-content-end">
                            <Button className="btn-add-to-cart col-5" onClick={this.addToCart}>Add to cart</Button>{' '}
                            <Input placeholder="ex 10" type="number" step="1" className="cartInput" name="cartInput" id="cartInput" />
                        </div>
                    </div>
                    
                      
                </div>

                <div className="col product-detail-div">
                    <h2 className="pd-name">{props.name}</h2>
                    <Label className="pd-category">{props.category}</Label>
                    <h2 className="description-h2">Product Description</h2>
                    <p className="pd-description">{props.description} </p>
                </div>

            </div>
        </div>
       
    )
}

export default ProductItem;