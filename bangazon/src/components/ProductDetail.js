import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductItem from './ProductItem';
import './ProductItem.css';


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
        <Modal className="col-6" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
                
              <ProductItem 
             image = "https://img.etsystatic.com/il/419a72/1084610244/il_570xN.1084610244_i1r5.jpg?version=0"
             price = "$15.00"
             quantity = "1"
            name = "Product Name here"
            category = "Art"
            description = "Christian wall art Matthew 5:16, let your light shine before others, bible verse, bible psalm, bible quote, matthew print, bible verse wall art."
            />
/>
                    
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default ProductDetail;
