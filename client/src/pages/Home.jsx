
import React, {useState, useEffect } from "react";
import "../styles/App.css";

import SideBar from "../components/SideBar";
import InvoiceHeader from "../components/InvoiceHeader";
import Card from "../components/Card";
function Home(){
  const [error ,setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

    useEffect(() =>{
      fetch("http://localhost:9000/testAPI")
      .then(res => res.json())
      .then((result) => {
          setIsLoaded(true);
          setItems(result);
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
          <InvoiceHeader/>
          <div className="invoice_list">
          {items.map((item, index) => (
            <a href={'/index/'+ index} key={index}>
              <Card
                key = {index}
                id = {item.id}
                paymentDue={item.paymentDue}
                total = {item.total}
                clientName = {item.clientName}
                status = {item.status}
              />
            </a>
          ))}
          </div>
        </div>
       );
    }
}
export default Home;
