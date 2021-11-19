import React, { useState, useEffect, useContext } from "react";
import AppContext from "../AppContext";
// import StatusContext from "../StatusContex";

function Status() {
  const myContext = useContext(AppContext);
  const [statusIndex, setStatusIndex] = useState(0);
  

  const status = myContext.steps;
//   const value = statusIndex
  useEffect(() => {
    let timeout;
    if (statusIndex < status.length - 1) {
      timeout = setTimeout(() => setStatusIndex(statusIndex + 1), 2000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [status, status.length, statusIndex]);
  return (
    // <StatusContext.Provider value={value}>
      <p className="sub-info">{status[statusIndex]}</p>
      );
    // {/* </StatusContext.Provider> */}
}

export default Status;
