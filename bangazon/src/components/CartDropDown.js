import React, { Component } from 'react';
import './cartdropdown.css';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class CartDropDown extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Cart
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Products</DropdownItem>
          <DropdownItem>Product 1</DropdownItem>
          <DropdownItem>Product 2</DropdownItem>
          <DropdownItem>Product 3</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default CartDropDown;

