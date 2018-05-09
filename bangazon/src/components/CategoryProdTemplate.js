import React from 'react';
import "./productThumbnail.css";
import ProductDetail from './ProductDetail';
import './cartdropdown.css';



let CategoryProdTemplate = (props) => {
    function handleClick(data) {
        console.log("data",data);
        let addCartObj = {
            "productId": data.id,
            "userId": 23498809787097098,
            "sellerId": 56721,
            "productName":data.name,
            "productImage":data.image
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

        window.alert("Added to Cart")


    }
    const categoryItems = props.data.map((product, index) =>
    <div key={index} className="card mt-4 mr-2 ml-2 product-card" >
            <img className="card-img-top" src={product.image} alt="Card cap" />

            <h2 className="card-title d-flex align-items-center justify-content-center text-center">{product.name}</h2>
            <div className="card-body ">
                <div className="row">
                    <p className="card-text col text-left">${product.price}</p>
                    <p className="card-text col text-right prod-qty">qty {product.quantity}</p>
                </div>
                <i className="fas fa-shopping-cart cart-small" id={"add_" + product.id} onClick={((e) => handleClick(product))}></i>
                <ProductDetail 
                image={product.image}
                price={product.price}
                quantity={product.quantity}
                name={product.name}
                category={product.category}
                description={product.description}
                id={product.id}/>         

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