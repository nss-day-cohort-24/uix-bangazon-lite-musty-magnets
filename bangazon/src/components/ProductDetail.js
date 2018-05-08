import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
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
    }
  
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }
  
    render() {
      return (

        <div>
          <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal className="Product-Item-modal" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
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
          
          <ModalFooter>
            <Button color="btn-add-to-cart" onClick={this.toggle}>Add to cart</Button>{' '}
            <Buttons className={`btn-cancel`} label={"Cancel"} function={this.function} />
          </ModalFooter>
         
        </Modal>
      </div>
    )
  }
}

export default ProductDetail;
