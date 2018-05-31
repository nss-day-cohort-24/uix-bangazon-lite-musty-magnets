import React, { Component } from 'react';
import ProductSellForm from './ProductSellForm';
import { Route } from 'react-router-dom';
import ProductHomePage from './ProductHomePage';
import './display.css'
import CategoryProds from './CategoryProds';
import SearchBar from './SearchBar';
import ProductThumbnail from './ProductThumbnail';
import SearchResults from './SearchResults';

class Display extends Component {
    render() {

        return(
            //<BrowserRouter>
            <div className="col-9">
            <Switch>
                <Route exact path='/' component={ProductHomePage} />
                <Route path='/ProductsSellForm' component={ProductSellForm} />
                <Route exact path="/CategoryProduct" render={props => <CategoryProds user={this.props.user} auth={this.props.auth} {...props} />} />
                <Route path='/CategoryProduct' component={CategoryProds} />
                <Route path='/SearchResults' component={() => <SearchResults data={this.state.productArray} />} />
                
            </Switch>
                
            </div>

            //</BrowserRouter>
        )
    }

}

export default Display;