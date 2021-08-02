import React, {useRef, useEffect, useCallback} from "react";
import {useOnClickOutside} from "../useOnClickOutside";

import "../styles/SlideDrawer.css";

function SlideDrawer({show, children, close}){
  let drawerClasses = "side-drawer";
  if(show) {
    drawerClasses = "side-drawer open";
  }
  const escFunction = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        //Do whatever when esc is pressed
        close();
      }
    },
    [close]
  );

  const reference = useRef();
  useOnClickOutside(reference, close);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);



  return(

    <div className={drawerClasses} ref={reference}>
      <div>{children}</div>
      <button onClick={close}>Close me</button>
    </div>
  )
}

export default SlideDrawer;
