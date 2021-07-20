import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


//TODO:+ add onchange handler
//FIXME:+
function ClientForm(props){
  return (
    <div>
      <h4>Bill To</h4>
      <p>Client's Name</p>
      <input type="text" value={props.clientName} placeholder="client's name here" name="clientName" required minLength="2" maxLength="40" size="20"/>
      <p>Client's Email</p>
      <input type="text" value={props.clientEmail} placeholder="client's email here" name="clientEmail" required minLength="2" maxLength="40" size="20"/>
      <p>Street Address</p>
      <input type="text" value={props.clientStreet} placeholder="client's address here" name="clientName" required minLength="2" maxLength="40" size="20"/>

        <Row>
          <Col>
          <p>City</p>
          <input type="text" value={props.clientCity} placeholder="client's city here" name="clientCity" required minLength="2" maxLength="40" size="10"/>
          </Col>
          <Col>
          <p>Post Code</p>
          <input type="text" value={props.clientPostCode} placeholder="client's post code here" name="clientPostCode" required minLength="2" maxLength="40" size="10"/>
          </Col>
        </Row>

      <p>Country</p>
      <input type="text" value={props.clientCountry} placeholder="client's country here" name="clientCountry" required minLength="2" maxLength="40" size="20"/>

      <p>Invoice Date</p>
      <input type="date" value={props.date} name="invoice-date"/>
      <p>Payment Terms</p>
      <select name="choice" value={props.terms}>
        <option value="first">Net 30 Days</option>
        <option value="second">Net 14 Days</option>
      </select>
      <p>Project Description</p>
      <input type="text" value={props.description} name="description" placeholder="description of project done for client"/>
    </div>
  );
}
export default ClientForm;
