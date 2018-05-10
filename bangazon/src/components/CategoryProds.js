import React from 'react';
import "./productThumbnail.css";
import CategoryProdTemplate from './CategoryProdTemplate'





let CategoryProds = (props) => {
    let data = props.location.state;
    let user = props.user;
    let auth = props.auth;



        return(
            <div>
                <CategoryProdTemplate data={data.objresult} user={user} auth={auth}/>
            </div>
        )
}
export default CategoryProds;
