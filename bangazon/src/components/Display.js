import React, { Component } from 'react';
import ProductSellForm from './ProductSellForm';
import { Route } from 'react-router-dom';


class Display extends Component {
    render() {
        return(
            <div>
                <Route path='/ProductsSellForm' component={ProductSellForm} />
            </div>
        )
    }

}

export default Display;