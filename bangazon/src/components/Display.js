import React, { Component } from 'react';
import ProductSellForm from './ProductSellForm';
import { Route } from 'react-router-dom';
import ProductHomePage from './ProductHomePage';
import './display.css'
import { BrowserRouter } from 'react-router-dom';

export default function Display() {
        return(
            <BrowserRouter>
            
            <div className="col-9">
                <Route exact path='/' component={ProductHomePage} />
                <Route path='/ProductsSellForm' component={ProductSellForm} />
            </div>

            </BrowserRouter>
        )
    }