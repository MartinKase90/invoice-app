import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DetailsContent from "../components/DetailsContent";
import DetailsAddress from "../components/DetailsAddress";
import DetailsPrices from "../components/DetailsPrices";
function DetailsCard(props){

  //first DetailsAddress is senders address
  //second DetailsAddress is recievers address
  return (
    <div className="details_card">
      <Container>
        <Row>
          <Col>
            <h4>#{props.id}</h4>
            <h5>{props.description}</h5>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <DetailsAddress
              street = {props.senderStreet}
              city = {props.senderCity}
              postCode = {props.senderPostCode}
              country = {props.senderCountry}
            />
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
          <DetailsContent
            greyText = {'Invoice Date'}
            blackText = {props.createdAt}
          />
          <DetailsContent
            greyText = {'Payment Due'}
            blackText = {props.paymentDue}
          />
          </Col>
          <Col>
            <DetailsContent
              greyText = {'Bill To'}
              blackText = {props.clientName}
            />
            <DetailsAddress
              street = {props.clientStreet}
              city = {props.clientCity}
              postCode = {props.clientPostCode}
              country = {props.clientCountry}
            />
          </Col>
        </Row>
        <Row>
          <Col>
          <DetailsContent
            greyText = {'Sent To'}
            blackText = {props.clientEmail}
          />
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
      <DetailsPrices
      
      />
    </div>
  );
}

export default DetailsCard;
