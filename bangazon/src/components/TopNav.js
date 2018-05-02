import React, { Component } from 'react';
import './topnav.css';
import { Input } from 'reactstrap';
import CartDropDown from './CartDropDown';
// import { Route, NavLink } from 'react-router-dom';



class TopNav extends Component {
    render() {
        return (
            <div className="d-flex align-items-center justify-content-around border">
                <h2>BANGAZON</h2>   
                <Input className="col-3" type="search" name="search" id="search" placeholder="Search..." />
                <div className="d-flex">
                    <a className="nav-link" href="#">Sell</a>
                    <CartDropDown />
                </div>
            </div>
        )
    }
}



export default TopNav;