import React from 'react';
import "./productThumbnail.css";


let CategoryProdTemplate = (props) => {

    const categoryItems = props.data.map((product, index) =>
    <div key={index} className="card mt-4 mr-2 ml-2 product-card" >
            <img className="card-img-top" src={product.image} alt="Card cap" />
            <h2 className="card-title">{product.name}</h2>
            <div className="card-body ">
                <div className="row">
                    <p className="card-text col text-left">{product.price}</p>
                    <p className="card-text col text-right prod-qty">{product.quantity}</p>
                </div>         
            </div>
    </div>
    )
    return(
        <div>
            {categoryItems}
        </div>
    )
}


export default CategoryProdTemplate;