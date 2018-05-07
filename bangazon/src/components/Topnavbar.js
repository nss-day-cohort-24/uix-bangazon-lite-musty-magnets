import React, { Component } from 'react';
import CartDropDown from './CartDropDown';
import { Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './topnav.css';
import UserModal from './UserModal';



class topNavbar extends Component {
    render() {
        return(
            <div className="d-flex align-items-center justify-content-between navbar">
                <h2 className="col-2 bang-logo">BANGAZON</h2>   
                <Input className="col-6" type="search" name="search" id="search" placeholder="Search..." />
                <div className="navIcons col-3 d-flex text-center">
                    <NavLink className="nav-link" to="/ProductsSellForm" ><i className="fas fa-tag"></i>
                    <p>sell</p>
                    </NavLink>
                    <CartDropDown />
                    <UserModal />
                </div>
            </div>
        )
    }
}

export default topNavbar;