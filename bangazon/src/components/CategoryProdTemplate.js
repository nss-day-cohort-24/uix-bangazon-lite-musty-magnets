import React from 'react';
import "./productThumbnail.css";


let CategoryProdTemplate = (props) => {

    const categoryItems = props.data.map((product, index) =>
    <div key={index} className="card mt-4 mr-2 ml-2 product-card" >
            <img className="card-img-top" src={product.image} alt="Card cap" />
            <h2 className="card-title text-center">{product.name}</h2>
            <div className="card-body d-flex align-items-end justify-content-between">
                <div className="d-flex align-items-end justify-content-between">
                    <p className="card-text col">${product.price}</p>
                    <p className="card-text col prod-qty">qty {product.quantity}</p>
                </div>         
            </div>
    </div>
    )
    return(
        <div className="d-flex flex-wrap">
            {categoryItems}
        </div>
    )
}


export default CategoryProdTemplate;