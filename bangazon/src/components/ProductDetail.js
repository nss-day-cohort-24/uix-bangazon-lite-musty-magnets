import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductItem from './ProductItem';
import './ProductItem.css';
import Buttons from'./Buttons';
import './button.css';


class ProductDetail extends React.Component  {
    constructor(props) {
      super(props);
      this.state = {
        modal: false
      };
  
      this.toggle = this.toggle.bind(this);
      this.addToCart = this.addToCart.bind(this);
    }
  
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
      

    }

    addToCart(){
      console.log("these here props",this.props);
      let addCartObj = {
          "productId": this.props.id,
          "userId": 23498809787097098,
          "sellerId": 56721,
          "productName":this.props.name,
          "productImage":this.props.image
      }

      fetch("http://localhost:3000/orders_Products",
      {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(addCartObj)
      })

      this.setState({
        modal: !this.state.modal
      });

    }
    render() {
      return (

        <div>
        <i class="fas fa-info circleInfo" onClick={this.toggle}></i>
        <Modal className="Product-item-modal" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}></ModalHeader>
          <ModalBody>
                
            <ProductItem 
            image={this.props.image}
            price={this.props.price}
            quantity={this.props.quantity}
            name={this.props.name}
            category={this.props.category}
            description={this.props.description}/>
                    
          </ModalBody>
        
        </Modal>
      </div>
    )
  }
}

export default ProductDetail;
