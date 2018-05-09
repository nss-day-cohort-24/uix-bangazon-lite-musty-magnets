import React from 'react';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
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
        console.log(this.props,"LOOKAT ME");
    let userID = this.props.user.id;
    console.log("USERID",userID);
    
    fetch(`http://localhost:3000/orders_Products?userId=${userID}`)
  .then(function(response) {
    return response.json();
  })
  .then(data => this.setState({dropdownItems:data,
    dropdownLoaded:true}))
    console.log("cartprops",this.props);
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
        <DropdownMenu>
        {this.state.dropdownItems.map((product,index) =>
        <div key={index} onClick={this.toggle}><img src={product.productImage} className="w-25 h-25" />{product.productName}</div>)}
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

