import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Card(props){

  return (
    <div className="card">
      <Container>
        <Row>
          <Col className="colNumber" xs={{order: 1}} md={{ order:1}} >
            <h5>{"#" + props.id}</h5>
          </Col>
          <Col  className="colDate" xs={{order:2}} md={{ order:2}}>
            <h6>{props.paymentDue}</h6>
          </Col>
          <Col className="colAmount" xs={{order:2}} md={{ order:4}}>
            <h3>{props.total}</h3>
          </Col>
          <Col className="colName" xs={{order:3}} md={{ order:3}}>
            <h5>{props.clientName}</h5>
          </Col>
          <Col className="colStatus" xs={{order: 12}}  md={{ order:5}}>
            <h3>{props.status}</h3>
          </Col>

        </Row>
      </Container>
    </div>
  );
}
export default Card;
// xs={{span:12, order:1}} md={{span: 6, order: 1}} sm={{order: 1}}
