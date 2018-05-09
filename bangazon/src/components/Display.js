import React, { Component } from 'react';
import ProductSellForm from './ProductSellForm';
import { Route } from 'react-router-dom';
import ProductHomePage from './ProductHomePage';
import './display.css'
import CategoryProds from './CategoryProds';

class Display extends Component {
    render() {
        console.log("theeeesee props",this.props);
        return(
            //<BrowserRouter>
            <div className="col-9">
                <Route exact path='/' component={ProductHomePage} />
                <Route path='/ProductsSellForm' component={ProductSellForm} />
                <Route path='/CategoryProduct' render={CategoryProds}  />
            </div>

            //</BrowserRouter>
        )
    }

}

export default Display;