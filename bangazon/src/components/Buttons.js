import React from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './button.css';


export default class Buttons extends React.Component {
    render() {
        return (
            <div>
                <Button className="btn-account-save">Save</Button>{' '}
                <Button className="btn-sell-list">List Product</Button>{' '}
                <Button className="btn-keep-shopping">Keep Shopping</Button>{' '}
                <Button className="btn-account-cancel">Cancel</Button>{' '}
                <Button className="btn-sell-cancel">Cancel</Button>{' '}
                <Button className="btn-add-to-cart">Add to Cart</Button>{' '}
                <Button className="btn-checkout">Checkout</Button>{' '}
                <Button className="btn-place-order">Place Order</Button>{' '}
                <Button className="btn-remove">Remove</Button>{' '}
                <Button className="btn-edit">Edit</Button>
            </div>
        );
    }
}