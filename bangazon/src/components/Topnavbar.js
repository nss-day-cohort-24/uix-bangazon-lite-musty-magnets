import React, { Component } from 'react';
import CartDropDown from './CartDropDown';
import { Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './topnav.css';
import Cart from '../images/Cart.svg'



class topNavbar extends Component {
    render() {
        return(
            <div className="d-flex align-items-center justify-content-around navbar">
                <h2 className="bang-logo">BANGAZON Lte</h2>   
                <Input className="col-3" type="search" name="search" id="search" placeholder="Search..." />
                <div className="d-flex">
                    <NavLink className="nav-link" to="/ProductsSellForm" >Sell</NavLink>
                    <CartDropDown />
                </div>
            </div>
        )
    }
}

export default topNavbar;