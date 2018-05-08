import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class CartProductItem extends React.Component {
    render () {
  return (
    <ul class="list-unstyled">
  <li class="media">
    <img class="mr-3" src="this.props.image" alt="Generic placeholder image"></img>
    <div class="media-body">
      <h5 class="mt-0 mb-1">this.props.productId</h5>
      <p>this.props.description</p>
      <p>this.props.price</p>
      <Button>remove</Button>
    </div>
  </li>
  </ul>
    )
}
}

export default CartProductItem;



