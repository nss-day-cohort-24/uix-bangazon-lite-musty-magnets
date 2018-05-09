import React from 'react';
import ProductDetail from './ProductDetail';


let TopProds = (props) => {
    const products = props.data.slice(0,3);
    const topProds = products.map((product, index) =>
        <div key={index} className="">
            <ProductDetail 
                buttonLabel={<small>{product.name}</small>}
                image={product.image}
                price={product.price}
                quantity={product.quantity}
                name={product.name}
                category={product.category}
                description={product.description}
                id={product.id}/>
        </div>
   )
    return(
        <div>
        {topProds}
        </div>
        
    )
}

export default TopProds;