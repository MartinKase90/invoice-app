import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function CardButtons(props){

  return (
    <div className="details_card_buttons">
      <Container>
        <Row>
          <Col>
          <a href={"/index/"+ props.id +"/edit"}>
            <button className="btn btn-primary">Edit</button>
          </a>
            <button className="btn btn-primary">Delete</button>
            <button className="btn btn-primary">Mark as Paid</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default CardButtons;
