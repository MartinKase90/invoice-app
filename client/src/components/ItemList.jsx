import React, {useState} from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


//TODO:+  add onchange handler
function ItemList(props){


  return(
    <div>
      <p>Item Name</p>
      <form onsubmit={props.onSubmit}>
        <input type="text" value={props.item} name="itemName" placeholder="name of item"/>
        <Row>
          <Col>
            <p>Qty</p>
            <input type="number" onChange={props.onChange} value={props.quantity} name="quantity" placeholder="Qty" required min="1" max="99" size="5"/>
          </Col>
          <Col>
            <p>Price</p>
            <input type="number" onChange={props.onChange} value={props.price} name="price" placeholder="Price of item" required min="0" max="999999" size="5"/>
          </Col>
          <Col>
            <p>Total</p>
            <p>{props.total}</p>
          </Col>
          <Col>
            <button className="btn btn-primary">trashcan</button>
          </Col>
        </Row>
      </form>
    </div>
  );
}
export default ItemList;
