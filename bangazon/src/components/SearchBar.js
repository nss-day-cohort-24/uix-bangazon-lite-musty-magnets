import React from 'react';
import TopnavBar from './ProductSellFormTemplate';
import { Input } from 'reactstrap';
import  ProductThumbnail from './ProductThumbnail';


class SearchBar extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            searchString: '',
            products: [],
        };
    }

    searchProducts = () => {
        const productSearch = document.getElementById("search");
        
        productSearch.addEventListener("keyup", function(e) {
            if (e.keyCode === 13 && e.target.value !="") {
                let userSearch = e.target.value.toLowerCase();
            
                /* need to call a function to complete user search */
        
            } else if (e.keyCode === 13) {
                window.alert("Please enter product to search for.");
            }
        });
        }

    /* Event handler for search entry */
    handleChange = (e) => {
        this.setState({ searchString: e.target.value});
    }

    /* Lifecycle */
    componentDidMount() {
        this.getSearchItem();
    }

    /* grab content for JSON server */
    getSearchItem () {
        console.log("getSearchItem");
        
        fetch('http://localhost:3000/product?')
                .then(response => response.json())
                .then((data) => {
                    console.log("get products:", data);
                this.setState({
                    products: data.products 
                });
            },
            (error) => {
                this.setState({
                    search: null,
                    error: error
                });
            }          
        )
    }


    render() {
        let products = this.props.items,
        searchString = this.state.searchString.trim().toLowerCase();
        if (searchString.length > 0){
            products = products.filter(function(item) {
                return item.name.toLowerCase().match( searchString );
            });
        } else { /* give error message that says " No products found, search another product.' */


         /* Need to map array and display product items from search results */
        var productItems = this.setState.products.map((product, index) =>
        
            <div key={index} >

            <ProductThumbnail 
                image = {product.image}
                name = {product.name}
                price = {product.price}
                quantity = {product.quantity}
            />

            </div>
        )}

        return(
            <div>
                {/* user input product search */}
                <Input className="col-6 Search-bar" type="text" value={this.state.searchString} onChange={this.handeleChange} id="search" placeholder="Search..." />  
                
                <div className="d-flex flex-wrap">
                    {productItems}
                </div>
            </div>
        )
    }
}


export default SearchBar;
