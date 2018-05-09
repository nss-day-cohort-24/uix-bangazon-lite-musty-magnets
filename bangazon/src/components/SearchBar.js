import React, { Component } from 'react';
import { Input } from 'reactstrap';
import  ProductThumbnail from './ProductThumbnail';
import './topnav.css';
import Display from './Display';
class SearchBar extends Component {
   
   constructor(props) {
    super(props);
    this.state = {
            searchString: '',
            productArray : [],
        }
        this.getProduct = this.getProduct.bind(this);
    } 

    /* grab content for JSON server */
   getProduct = (taco) => {
    console.log ("what is taco in getProduct?", taco);

        fetch(`http://localhost:3000/product?=${taco}`)
                .then(response => response.json())
                .then((data) => {
                    console.log ("what data do we have?", data);
                 this.setState({
                     productArray: data
                 })
            });
            // DisplaySearch();
            // console.log ("what is in productArray?", this.state);
    }     

        /* Event handler for search entry */
    handleInputChange = (e) => {
        // console.log ("what is e?", e.charCode);
        if (e.charCode === 13) {
            this.getProduct(e.target.value);
        }
    }
    
    render() {

        
        return(
            <div>
               <Input 
               className="Search-bar" type="text" onKeyPress={this.handleInputChange} id="search" placeholder="Search..." /> 
                
                {/* <Display /> */}
                {/* <div className="d-flex flex-wrap">
                    { ReturnProductItems }
                </div> */}
                
            </div>
        )
    }
}


export default SearchBar;
