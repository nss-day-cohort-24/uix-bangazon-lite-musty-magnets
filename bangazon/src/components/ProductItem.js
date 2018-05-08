import React from 'react';
import { Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductItem.css';


let ProductItem = (props) => {
    return (  
    
        <div className="Product-item">
            
            <div className="row">
            
                <div className="col">
                    <img src={props.image} className="Product-item-img" alt=""></img>
                    
                    <div className="row Product-item-row">
                        <div className="col text-left">{props.price}  </div>
                        <div className="col text-right"> QTY {props.quantity} </div>
                    </div>
                    
                      
                </div>

                <div className="col">
                    <h2>{props.name}</h2>
                    <Label>{props.category}</Label>
                    <p>{props.description} </p>
                </div>

            </div>
        </div>
       
    )
}

export default ProductItem;