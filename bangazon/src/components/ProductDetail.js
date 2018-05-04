import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductItem from './ProductItem';


class ProductDetail extends React.Component {
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
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}User Login</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
                
                <ProductItem />
                    
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>
      </div>
    )
}

export default ProductDetail ;
