import React, {useContext} from "react";
import "./stepper.css";
import AppContext from "../../AppContext";
// import StatusContext from "../../StatusContex";

function Stepper() {
  // const statusCont = useContext(StatusContext
    //Props from App.js containing the Steps Array
  const steps = useContext(AppContext)
  //Mapping over the Steps Array to display each step
  const stepDisplay = steps.steps.map((step, index) => {

    console.log(steps.status, steps.steps[steps.status]);
    
    return (
      <div className="step-wrapper" key={index}>
        <div className={steps.steps[steps.status] === step?"step-number is-active":"step-number"}><span>&#10003;</span></div>
        <div className="step-desc">{step}</div>
        <div className={index !== steps.steps.length -1 ? "divider-line":undefined}></div>
      </div>
    );
  });
  return <div className="stepper-wrapper-horizontal">
      {stepDisplay}
  </div>;
}

export default Stepper;
