import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductItem.css';


let ProductItem = (props) => {
    return (  
    
        <div className="Product-item">
            <Button className="btn-close " label="Close X" onClick={() => { props.function() }}>Close X</Button> 
            
            <div className="row">
            
                <div className="col">
                    <img /*src={props.image}*/  src="https://img.etsystatic.com/il/419a72/1084610244/il_570xN.1084610244_i1r5.jpg?version=0"
                    className="Product-item-img" alt=""></img>
                    
                    <div className="row Product-item-row">
                        <div className="col text-left">{/* {props.price} */} $15.00 </div>
                        <div className="col text-right"> QTY{/*{props.quantity}*/} 1</div>
                    </div>
                    
                        <Button className="col btn-add-to-cart" onClick={() => { props.getValues() }}>Add to cart</Button>
                   
                </div>

                <div className="col">
                    <h2>{/*{props.name}*/}Product Name goes here</h2>
                    <Label>{/*{props.category}*/}Catergory Art</Label>
                    <p>{/*{props.description}*/} Christian wall art Matthew 5:16, let your light shine before others, bible verse, bible psalm, bible quote, matthew print, bible verse wall art. </p>
                </div>

            </div>
        </div>
       
    )
}

export default ProductItem;