import React, { Component } from 'react';
import ProductSellForm from './ProductSellForm';
import { Route } from 'react-router-dom';
import ProductHomePage from './ProductHomePage';
import './display.css'

class Display extends Component {
    render() {
        return(
            <div className="display-main col-9">
                <Route exact path='/' component={ProductHomePage} />
                <Route path='/ProductsSellForm' component={ProductSellForm} />
            </div>
        )
    }

}

export default Display;