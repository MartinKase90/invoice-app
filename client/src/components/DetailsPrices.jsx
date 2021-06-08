import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DetailsPrices(){
  return(
    <div className="details_prices">
      <Container>
        <Row>
          <Col>
            <h5>Banner Design</h5>
            <p> 1x £156.00</p>
            <h5>Email Design</h5>
            <p>2x £ 200.00</p>
          </Col>
          <Col>
            <h5>£ 156.00</h5>
            <h5>£ 400.00</h5>
          </Col>
        </Row>
        <Row className="details_total">
          <Col><h5>Grand Total</h5></Col>
          <Col><h3>£ 556.00</h3></Col>
        </Row>
      </Container>
    </div>
  );
}

export default DetailsPrices;
