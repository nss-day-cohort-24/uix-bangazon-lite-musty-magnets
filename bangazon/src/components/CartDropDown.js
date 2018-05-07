import React from 'react';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import './cartdropdown.css';

export default class CartDropDown extends React.Component {
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
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle
          tag="span"
          onClick={this.toggle}
          data-toggle="dropdown"
          aria-expanded={this.state.dropdownOpen}
        >
        <div className="cartDiv align-items-center justify-content-center">
        <i className="fas fa-shopping-cart"></i>
        <p>cart</p>
        </div>
        </DropdownToggle>
        <DropdownMenu>
          <div onClick={this.toggle}>Custom dropdown item</div>
          <div onClick={this.toggle}>Custom dropdown item</div>
          <div onClick={this.toggle}>Custom dropdown item</div>
          <div onClick={this.toggle}>Custom dropdown item</div>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

