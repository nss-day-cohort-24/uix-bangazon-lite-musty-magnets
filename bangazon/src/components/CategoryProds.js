import React, { Component } from 'react';
import "./productThumbnail.css";
import CategoryProdTemplate from './CategoryProdTemplate'





let CategoryProds = (props) => {
    let data = props.location.state;
    console.log(data.objresult);
        return(
            <div>
                <CategoryProdTemplate data={data.objresult} />
            </div>
        )
}
export default CategoryProds;
