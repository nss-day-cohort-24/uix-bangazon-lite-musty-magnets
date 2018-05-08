import React from 'react';


let TopProds = (props) => {
    const topProds = props.data.map((product, index) =>
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