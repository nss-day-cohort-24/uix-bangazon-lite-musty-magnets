import React from 'react';
import ProductThumbnail from './ProductThumbnail';

let SearchResultsTemp = (props) => {
    const SearchResults = props.data.map((product, index) => (
        
                <div key={index} >
                <ProductThumbnail 
                    image = {product.image}
                    name = {product.name}
                    price = {product.price}
                    quantity = {product.quantity}
                />
                </div> 
    ))
return(
    <div>
        {SearchResults}
    </div>
)
}

export default SearchResultsTemp;