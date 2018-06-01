import React, { Component } from 'react';
import { Input } from 'reactstrap';
// import  ProductThumbnail from './ProductThumbnail';
import './topnav.css';
// import Display from './Display';
// import { Redirect }  from 'react-router-dom';

const SearchBar = (props) => {

        return(
            <div>
               <Input 
                className="Search-bar" 
                type="text" 
                onKeyPress={props.handleInputChange} 
                id="search" 
                placeholder="Search..." 
                /> 
               
               {/* <Redirect to={{
                pathname: '/SearchResults',
                state: { results: props.data } }}/> */}
            </div>
        )
    }


export default SearchBar;
