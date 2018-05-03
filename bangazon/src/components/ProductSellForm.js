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
    console.log("form values", productName, prodCategory, imageURL, prodDescription, prodQuantity, prodPrice);
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