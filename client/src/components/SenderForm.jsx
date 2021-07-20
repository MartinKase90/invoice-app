import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SenderForm(props){
  return(
    <div>
      <p>Street Address</p>
      <input type="text" value={props.street} placeholder="your address here" name="name" required minLength="2" maxLength="40" size="20"/>
      <Row>
        <Col>
          <p>City</p>
          <input type="text" value={props.city} placeholder="your city here" name="city" required minLength="2" maxLength="40" size="10"/>
        </Col>
        <Col>
          <p>Post Code</p>

          <input type="text" value={props.postCode} placeholder="your post code here" name="postCode" required minLength="2" maxLength="40" size="15"/>
        </Col>
      </Row>
      <p>Country</p>
      <input type="text" value={props.country} placeholder="your country here" name="country" required minLength="2" maxLength="40" size="20"/>
    </div>
  );
}
export default SenderForm;
