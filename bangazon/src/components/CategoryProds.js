import React from 'react';
import "./productThumbnail.css";
import CategoryProdTemplate from './CategoryProdTemplate'





let CategoryProds = (props) => {
    let data = props.location.state;

        return(
            <div>
                <CategoryProdTemplate data={data.objresult}/>
            </div>
        )
}
export default CategoryProds;
