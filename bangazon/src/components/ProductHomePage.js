import React from 'react';
import ProductThumbnail from "./ProductThumbnail.js";
import CategoryProdTemplate from './CategoryProdTemplate.js';

class ProductHomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            productArray : []
        }
    }
    componentDidMount = () => {
        fetch('http://localhost:3000/product')
        .then(function(response) {
            return response.json();
            })
            .then((data) => {
            this.setState({
                productArray:data 
            })
            
        });
    }
        render(){

            return(
                <div className="product-top-display text-center"> 
                <h1 className="product-display">A marketplace for handmade goods</h1>
                    <CategoryProdTemplate data={this.state.productArray} />
                <div className="d-flex flex-wrap mt-3">
                </div>
                </div>
            )
        }
    }


export default ProductHomePage;