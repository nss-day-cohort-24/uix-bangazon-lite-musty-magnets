import React from 'react';
import ProductSellFormTemplate from './ProductSellFormTemplate';



export default class ProductSellForm extends React.Component {

getValues() {
    let productName = document.getElementById('prodName').value;
    let prodCategory = document.getElementById('prodCategory').value;
    let imageURL = document.getElementById('imageURL').value;
    let prodDescription = document.getElementById('prodDescription').value;
    let prodQuantity = document.getElementById('prodQuantity').value;
    let prodPrice = document.getElementById('prodPrice').value;

    let newProduct = {
        "name": productName,
        "category": prodCategory,
        "image": imageURL,
        "description": prodDescription,
        "quantity":prodQuantity,
        "price": prodPrice

      }



    fetch("http://localhost:3000/product",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(newProduct)
})
.then(() => {
    document.getElementById("prodName").value = "";
    document.getElementById("prodCategory").value = "";
    document.getElementById("imageURL").value = "";
    document.getElementById("prodDescription").value = "";
    document.getElementById("prodQuantity").value = "";
    document.getElementById("prodPrice").value = "";
    alert("Product Added")
}
)


}

  render() {
    return (
        <div>
            <ProductSellFormTemplate 
            getValues = {this.getValues}/>
        </div>
    );
  }
}