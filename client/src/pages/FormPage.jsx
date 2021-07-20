import React, {useState} from "react";

import SideBar from "../components/SideBar";

import SenderForm from "../components/SenderForm";
import ClientForm from "../components/ClientForm";
import ItemList from "../components/ItemList";

function FormPage(){

  const [total, setTotal] = useState(0);
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(0);
  // let total = props.quantity * props.price;
  function totalOnChange(event){
    // const {value, name} = event.target;
      setTotal(0);
      if(price != null && qty != null){
        setTotal(price * qty);
        console.log(total);
      }
  }

  function onChange(event){
    const newValue = event.target.value;
    setPrice(newValue);



  }
  function onSubmitItem(event){
    totalOnChange();

  }

  return (
    <div>
      <SideBar/>
      <div>
        <button className="btn btn-primary">Go Back</button>
        <h3> Edit #XM9141</h3>
        <h4>Bill From</h4>
      </div>
      <SenderForm
        street=""
        city=""
        postCode=""
        country=""
      />
      <ClientForm

        clientName="JSON"
        clientEmail="json@json.com"
        clientStreet="here"
        clientCity="there"
        clientPostCode="1952s"
        clientCountry="this Country"
        description="testing"

        date="1990-07-22"
        terms="second"
      />
      <h3>Item List</h3>
      <ItemList
        item="tested input"
        onChange={onChange}

        total={10}
      />
      <ItemList
      item="tested input"
      onChange={onChange}
      onsubmit={onSubmitItem}
      />
      <button className="btn btn-primary">+ Add New Item</button>
      <div>
        <button className="btn btn-primary">cancel</button>
        <button className="btn btn-primary">Save as Draft</button>
        <button className="btn btn-primary">Save & Send</button>
      </div>
    </div>

  );
}
export default FormPage;
