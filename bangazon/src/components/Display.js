import React, { Component } from 'react';
import ProductSellForm from './ProductSellForm';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ProductHomePage from './ProductHomePage';
import './display.css'
import CategoryProds from './CategoryProds';
import SearchBar from './SearchBar';
import ProductThumbnail from './ProductThumbnail';
import SearchResults from './SearchResults';

export default function Display() {
        return(
            
            <div className="col-9">
            <Switch>
                <Route exact path='/' component={ProductHomePage} />
                <Route path='/ProductsSellForm' component={ProductSellForm} />
                <Route path='/CategoryProduct' component={CategoryProds} />
                <Route path='/SearchResults' component={() => <SearchResults data={this.state.productArray} />} />
                
            </Switch>
            </div>

        )
    }