import React from 'react';


let TopProds = (props) => {
    const products = props.data.slice(0,3);
    const topProds = products.map((product, index) =>
        <div key={index} className="">
            <small>{product.name}</small>
        </div>
   )
    return(
        <div>
        {topProds}
        </div>
        
    )
}

export default TopProds;