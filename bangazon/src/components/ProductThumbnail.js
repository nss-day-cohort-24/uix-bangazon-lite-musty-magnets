import React from 'react';
import "./productThumbnail.css"

let ProductThumbnail = (props) => {
    return(
        <div className="card mt-4 mr-2 ml-2 product-card" >
            <div className="productImageDiv">
                <img className="card-img-top" src={props.image}  alt="Card cap" />
                </div>
                <h2 className="card-title text-center">{props.name} </h2>
                <div className="card-body">
<<<<<<< HEAD
                <div className="row align-items-center">
                    <p className="card-text col text-left">${props.price}</p>
                    <p className="card-text col text-right prod-qty">qty{props.quantity}</p>
=======
                <div className="row align-items-between">
                    <p className="card-text col text-left">$15.00 </p>
                    <p className="card-text col text-right prod-qty">Qty 13</p>
>>>>>>> master
                </div>         
            </div>
        </div>
    )
}

export default ProductThumbnail;