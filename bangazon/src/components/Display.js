import React, { Component } from 'react';
import ProductSellForm from './ProductSellForm';
import { Route } from 'react-router-dom';
import ProductHomePage from './ProductHomePage';
import './display.css'
import CategoryProds from './CategoryProds';
import SearchBar from './SearchBar';

class Display extends Component {
    render() {
        return(
            //<BrowserRouter>
            <div className="col-9">
                <Route exact path='/' component={ProductHomePage} />
                <Route path='/ProductsSellForm' component={ProductSellForm} />
                <Route path='/CategoryProduct' component={CategoryProds} />
                {/* <Route path='/SearchBar' component={SearchBar} /> */}
            </div>

            //</BrowserRouter>
        )
    }

}

export default Display;