import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//TODO Redesign this 
function DetailsPrices(props){
  return(
    <div className="details_prices">
      <Container>
        <Row>
          <Col>
            <h5>{props.items}</h5>
            <p>{props.quantity}x £{props.price}</p>
          </Col>
          <Col>
            <h5>£ {props.total}</h5>

          </Col>
        </Row>
        <Row className="details_total">
          <Col><h5>Grand Total</h5></Col>
          <Col><h3>£ {props.grandTotal}</h3></Col>
        </Row>
      </Container>
    </div>
  );
}

export default DetailsPrices;
