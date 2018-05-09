import React, { Component } from 'react';

import { Input } from 'reactstrap';
import  ProductThumbnail from './ProductThumbnail';
import './topnav.css';

class SearchBar extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            searchString: '',
            productArray : [],
        };
    }

    /* Event handler for search entry */
    handleChange = (e) => {
        this.setState({ searchString: `http://localhost:3000/product?q=${e.target.value}`});
        console.log ("what is the handleChange?", e.target.value);
    }

    /* grab content for JSON server */
    componentDidMount = () => {
        
        fetch('http://localhost:3000/product')
                .then(response => response.json())
                .then((data) => {
                this.setState({
                    productArray:data
                })
            });
    }          
        
    
    render() {
        var products = this.props.items,
        searchString = this.state.searchString.trim().toLowerCase();
        if (searchString.length > 0){
            products = products.filter(function(item) {
                return item.name.toLowerCase().match( searchString );
            });
        } else { /* give error message that says " No products found, search another product.' */


         /* Need to map array and display product items from search results */
        // var productItems = Object.keys(this.state.products).map((product, index) =>
        
        //     <div key={index} >

        //     <ProductThumbnail 
        //         data = {this.state.productArray}
        //         image = {product.image}
        //         name = {product.name}
        //         price = {product.price}
        //         quantity = {product.quantity}
        //     />

        //     </div>
        // )
    }

        return(
            <div>
               <Input className="Search-bar" type="text" value={this.state.searchString} onChange={this.handleChange} id="search" placeholder="Search..." /> 
                
                {/* <div className="d-flex flex-wrap">
                    {productItems}
                </div> */}
            </div>
        )
    }
}


export default SearchBar;
