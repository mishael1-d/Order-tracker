import React, { useContext } from "react";
import AppContext from "../AppContext";
import InputField from "./InputField";

function PageOne() {
  const myContext = useContext(AppContext);

  return (
    <>
    <div className="App">
      <div style={{ fontSize:"15px", marginTop:"20px", padding:"5px"}}>
    <h6 style={{background:"red",color: "white", borderRadius:"5px",}}>{myContext.errormessage.value}</h6>
      </div>
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