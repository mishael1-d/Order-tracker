import React, { useContext } from "react";
import AppContext from "../AppContext";
import InputField from "./InputField";

function PageOne() {
  const myContext = useContext(AppContext);

  return (
    <>
    <div className="App">
    <h6 style={{color:"red", fontSize:"18px"}}>{myContext.errormessage.value}</h6>
      <h2>order tracking form</h2>
      <div className="container">
        <InputField/>
      </div>
      <p className="copyright">
        &copy; 2021 Order Tracking Form. All Rights Reserved | Design by
        Mish_Technologies.
      </p>
      </div>
    </>
  );
}

export default PageOne;