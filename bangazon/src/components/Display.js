import React, { Component } from 'react';
import ProductSellForm from './ProductSellForm';
import { Route } from 'react-router-dom';
import ProductHomePage from './ProductHomePage';
import './display.css'
import { BrowserRouter } from 'react-router-dom';

class Display extends Component {
    render() {
        return(
            //<BrowserRouter>
            <div className="container">
                <Route exact path='/' component={ProductHomePage} />
                <Route path='/ProductsSellForm' component={ProductSellForm} />
            </div>

            //</BrowserRouter>
        )
    }

}

export default Display;