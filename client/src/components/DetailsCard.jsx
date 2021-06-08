import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DetailsContent from "../components/DetailsContent";
import DetailsAddress from "../components/DetailsAddress";
import DetailsPrices from "../components/DetailsPrices";
function DetailsCard(){

  //first DetailsAddress is senders address
  //second DetailsAddress is recievers address
  return (
    <div className="details_card">
      <Container>
        <Row>
          <Col>
            <h4>#xm9141</h4>
            <h5>Graphic Design</h5>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <DetailsAddress
              street = {'84 church way'}
              city = {'Bradford'}
              postCode = {'BDI 9PB'}
              country = {'United Kingdom'}
            />
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
          <DetailsContent
            greyText = {'Invoice Date'}
            blackText = {'21 Aug 2021'}
          />
          <DetailsContent
            greyText = {'Payment Due'}
            blackText = {'20 Sep 2021'}
          />
          </Col>
          <Col>
            <DetailsContent
              greyText = {'Bill To'}
              blackText = {'Alex Grim'}
            />
            <DetailsAddress
              street = {'84 church way'}
              city = {'Bradford'}
              postCode = {'BDI 9PB'}
              country = {'United Kingdom'}
            />
          </Col>
        </Row>
        <Row>
          <Col>
          <DetailsContent
            greyText = {'Sent To'}
            blackText = {'alexgrim@mail.com'}
          />
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
      <DetailsPrices/>
    </div>
  );
}

export default DetailsCard;
