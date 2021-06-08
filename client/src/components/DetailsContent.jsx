import React from "react";

function DetailsContent(props){

  return(
    <div>
      <p>{props.greyText}</p>
      <h5>{props.blackText}</h5>      
    </div>
  );
}

export default DetailsContent;
