import React from 'react';


let TopProds = (props) => {
    const topProds = props.data.map((product, index) =>
        <div key={index} className="">
            <p>{product.name}</p>
        </div>
    )
    return(
        <div>
            {topProds}
        </div>
    )
}

export default TopProds;