import React from 'react';
import ProductThumbnail from "./ProductThumbnail.js";

let ProductHomePage = () => {
    return(
        <div className="product-top-display text-center"> 
            <h1 className="product-display">A marketplace for handmade goods</h1>

            <div className="d-flex flex-wrap mt-3">
                <ProductThumbnail />
            </div>
        </div>
    )
}

export default ProductHomePage;