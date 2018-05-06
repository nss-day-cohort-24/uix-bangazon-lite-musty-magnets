import React from 'react';
import "./productThumbnail.css"

let ProductThumbnail = (props) => {
    return(
        <div className="card mt-4 mr-2 ml-2 product-card" >
                    <img className="card-img-top" src="https://img.etsystatic.com/il/17906a/1270947660/il_570xN.1270947660_p1ea.jpg?version=0" alt="Card cap" />
                    <h2 className="card-title">{props.name}</h2>

                    <div className="card-body ">
                        <div className="row">
                            <p className="card-text col text-left">{props.price} </p>
                            <p className="card-text col text-right prod-qty">{props.quantity}</p>
                        </div>         
                    </div>
        </div>
    )
}

export default ProductThumbnail;