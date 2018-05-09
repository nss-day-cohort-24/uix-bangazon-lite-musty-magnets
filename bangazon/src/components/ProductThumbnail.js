import React from 'react';
import "./productThumbnail.css"

let ProductThumbnail = (props) => {
    return(
        <div className="card mt-4 mr-2 ml-2 product-card justify-content-center text-center text-align-center" >
            <div className="productImageDiv">
                <img className="card-img-top" src="https://img.etsystatic.com/il/17906a/1270947660/il_570xN.1270947660_p1ea.jpg?version=0" alt="Card cap" />
                </div>
                <h2 className="card-title text-center">DINOSAUR PLANTER</h2>
                <div className="card-body">
                <div className="row align-items-between">
                    <p className="card-text col text-left">$15.00 </p>
                    <p className="card-text col text-right prod-qty">Qty 13</p>
                </div>         
            </div>
        </div>
    )
}

export default ProductThumbnail;