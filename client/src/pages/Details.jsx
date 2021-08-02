import React, {useEffect, useState} from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SideBar from "../components/SideBar";
import DetailsCard from "../components/DetailsCard";
import CardButtons from "../components/CardButtons";


import SlideDrawer from "./SlideDrawer";
import FormPage from "./FormPage";

function Details({match}){
  let{
    params: {index}
  } = match;
   // console.log(match);


  const [error ,setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  //slide out page
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const kids = <FormPage/>;

  function handleToggleClick(){
    setDrawerIsOpen(!drawerIsOpen);
  }
  function backDropdClickHandler(){
    setDrawerIsOpen(false);
  }

  useEffect(() =>{
    fetch("http://localhost:9000/testAPI" + match.url)
    .then(res => res.json())
    .then((result) => {
        setIsLoaded(true);
        setItems(result);
        console.log(items);
      },
      (error)=>{
        setIsLoaded(true);
        setError(error);
      }
    )
  }, [])
  if(error){
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded){
    return <div>Loading...</div>
  } else {


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
                <h4>{items.status}</h4>
              </Col>
            </Row>
          </Container>
        </div>

          <DetailsCard
            id = {items.id}
            description = {items.description}
            senderStreet = {"to be fixed"}
            senderCity = {"to be fixed"}
            senderPostCode = {"to be fixed"}
            senderCountry = {"to be fixed"}
            createdAt = {items.createdAt}
            paymentDue = {items.paymentDue}
            clientName = {items.clientName}
            clientEmail = {items.clientEmail}
            clientStreet = {"to be fixed"}
            clientCity = {"to be fixed"}
            clientPostCode = {"to be fixed"}
            clientCountry  = {"to be fixed"}
            items = {items.items}
          />
          <div className="details_card_buttons">
            <Container>
              <Row>
                <Col>

                  <button className="btn btn-primary" id="editButton" onClick={handleToggleClick} >Edit</button>

                  <button className="btn btn-primary">Delete</button>
                  <button className="btn btn-primary">Mark as Paid</button>
                </Col>
              </Row>
            </Container>
          </div>
          <div>
            <SlideDrawer show={drawerIsOpen} close={backDropdClickHandler}>
              {kids}
            </SlideDrawer>

          </div>
      </div>
    );
  }
}
export default Details;
