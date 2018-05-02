import React, { Component } from 'react';
import CartDropDown from './CartDropDown';
import { Input } from 'reactstrap';
import { NavLink, Route } from 'react-router-dom';



class topNavbar extends Component {
    render() {
        return(
            <div className="d-flex align-items-center justify-content-around border">
                <h2>BANGAZON</h2>   
                <Input className="col-3" type="search" name="search" id="search" placeholder="Search..." />
                <div className="d-flex">
                    <NavLink className="nav-link" to="/ProductsSellForm">Sell</NavLink>
                    <CartDropDown />
                </div>
            </div>
        )
    }
}

export default topNavbar;