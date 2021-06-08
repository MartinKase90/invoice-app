import React from "react";

function DetailsAddress(props){

  return(
    <div>      
      <p>{props.street}</p>
      <p>{props.city}</p>
      <p>{props.postCode}</p>
      <p>{props.country}</p>
    </div>
  );
}

export default DetailsAddress;
