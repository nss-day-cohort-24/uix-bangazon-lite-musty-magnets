import React, { Component } from 'react';
import CartDropDown from './CartDropDown';
import { Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './topnav.css';
import UserNestedModal from './UserNestedModal';
import SearchBar from './SearchBar';


class TopNavbar extends Component {

    
    render() {
        return(
            <div className="d-flex align-items-center justify-content-between navbar">
                <NavLink to="/"><h2 className="col-2 bang-logo">BANGAZON</h2></NavLink>  
                
                {/* <Input className="col-6" type="search" name="search" id="search" placeholder="Search..." /> */}

                 {/* user input product search */}
                 <SearchBar className="col-6" />  

                <div className="navIcons col-3 d-flex text-center">
                    <NavLink className="nav-link" to="/ProductsSellForm" ><i className="fas fa-tag"></i>
                    <p>sell</p>
                    </NavLink>
                    <CartDropDown />
                    <UserNestedModal />
                </div>
            </div>
        )
    }
}

export default TopNavbar;