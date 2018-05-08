import React from 'react';
import "./productThumbnail.css";
import ProductDetail from './ProductDetail';


let CategoryProdTemplate = (props) => {
    function handleClick(data) {
        let addCartObj = {
            "productId": data.id,
            "userId": 23498809787097098,
            "sellerId": 56721,
        }

        fetch("http://localhost:3000/orders_Products",
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(addCartObj)
        })


    }
    const categoryItems = props.data.map((product, index) =>
    <div key={index} className="card mt-4 mr-2 ml-2 product-card" >
            <img className="card-img-top" src={product.image} alt="Card cap" />

            <h2 className="card-title">{product.name}</h2>
            <div className="card-body ">
                <div className="row">
                    <p className="card-text col text-left">{product.price}</p>
                    <p className="card-text col text-right prod-qty">{product.quantity}</p>
                </div>
                <button id={"add_" + product.id} onClick={((e) => handleClick(product))} className="btn-list-item w-100">Add To Cart</button>
                <ProductDetail 
                image={product.image}
                price={product.price}
                quantity={product.quantity}
                name={product.name}
                category={product.category}
                description={product.description}/>         

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