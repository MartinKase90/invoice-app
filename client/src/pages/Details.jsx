import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SideBar from "../components/SideBar";
import DetailsCard from "../components/DetailsCard";
import CardButtons from "../components/CardButtons";

function Details({match}){
  let{
    params: {index}
  } = match;







  return (
    <div>
      <SideBar/>
      <button className="btn btn-primary">Go back</button>
      <div className="invoices_title">
        <Container>
          <Row>
            <Col>
              <h4>Status</h4>
            </Col>
            <Col>
              <h4>Pending</h4>
            </Col>
          </Row>
        </Container>
      </div>
        <DetailsCard/>
        <CardButtons
          id = {index}
        />
    </div>
  );
}
export default Details;
