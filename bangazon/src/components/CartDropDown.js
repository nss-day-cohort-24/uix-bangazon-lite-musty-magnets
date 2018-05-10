import React from 'react';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import Buttons from './Buttons.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cartdropdown.css';

export default class CartDropDown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      dropdownItems: [],
      dropdownLoaded:false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
    this.update();
  }
//   componentDidMount() {

//     let userID = 23498809787097096
//     console.log("hey man these props should work",this.props);
    
//     fetch(`http://localhost:3000/orders_Products?userId=${userID}`)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(data => this.setState({dropdownItems:data,
// dropdownLoaded:true}))
//   };

  update() {

    let userID = this.props.user.id;

    
    fetch(`http://localhost:3000/orders_Products?userId=${userID}`)
  .then(function(response) {
    return response.json();
  })
  .then(data => this.setState({dropdownItems:data,
    dropdownLoaded:true}))

  }

  render() {

    if(this.props.auth == true){
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

        <DropdownMenu right>

          <div>
            {this.state.dropdownItems.map((product,index) =>
            <div class="dropdown_cart_item" key={index} onClick={this.toggle}>

              <div className="imageThumb">
                <img src={product.productImage} />
              </div>


              <div className="cart_item_desc">
                <h6>{product.productName}</h6>
                <p>{product.productDescription}</p>
              </div>

              <Buttons class="btn-remove" label="Remove"/>

            </div>)}

            <hr />
              <Buttons class="btn-checkout" label="Checkout" />
          </div>

        </DropdownMenu>
      </Dropdown>
    );
  }else{
    return(
      <div className="cartDiv align-items-center justify-content-center">
      <i className="fas fa-shopping-cart"></i>
      <p>cart</p>
      </div>

    )
  }
  }
}

