import React, { Component } from 'react';
import { Input } from 'reactstrap';
import  ProductThumbnail from './ProductThumbnail';
import './topnav.css';
import Display from './Display';
class SearchBar extends Component {
   
   constructor(props) {
    super(props);
    this. state = {
            searchString: '',
            productArray : [],
        }
    } 

    /* grab content for JSON server */
   getProduct = (taco) => {
    // console.log ("what is taco in getProduct?", taco);

        fetch(`http://localhost:3000/product?=${taco}`)
                .then(response => response.json())
                .then((data) => {
                    console.log ("what data do we have?", data);
                // this.setState({
                //     productArray: data
                // })
            });
            // console.log ("what products do we have?", this.productArray);
    }     

        /* Event handler for search entry */
    handleInputChange = (e) => {
       this.setState({ 
             searchString: e.target.value 
        });
            this.getProduct(e.target.value);
        // console.log ("what is the handleChange?", e.target.value);
    }
    
    render() {

        
        return(
            <div>
               <Input className="Search-bar" type="text" valueOf={this.searchString} ref={input => this.searchString = input}
                   onKeyPress={this.handleInputChange} id="search" placeholder="Search..." /> 
                
                {/* <Display /> */}
                {/* <div className="d-flex flex-wrap">
                    { ReturnProductItems }
                </div> */}
                
            </div>
        )
    }
}


export default SearchBar;
