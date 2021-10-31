import { useState, useEffect } from "react";
import "../src/App.css";
import AppContext from "./AppContext";
import PageOne from "./component/PageOne";
import PageTwo from "./component/PageTwo";

function App() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    orderid: "",
    day: "",
  });
  const [render, setRender] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfo({ ...info, [name]: value });
  };

  const [statusIndex, setStatusIndex] = useState(0);
  const [trackingId, setTrackingId] = useState("");

  //Stepper component props
  const stepArray = [
    "Confirmed Order",
    "Processing Order",
    "Quality Check",
    "Dispatched Item",
    "Product delivered",
  ];
  const status = stepArray;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.name && info.orderid && info.email) {
      JSON.stringify(localStorage.setItem(states.orderid, states.trackingId));
      const check = localStorage.key(0);
      setRender(!render);
      if (check === states.orderid) {
        console.log("i exist");
      } else {
        console.log("i dont exist");
      }
    } else {
      alert("Please check your credentials and try again. Thank you");
    }
  };
  const logout = () => {
    setRender(false);
    setInfo({
      name: "",
      email: "",
      orderid: "",
      day: "",
    });
  };
  const states = {
    name: info.name,
    email: info.email,
    orderid: info.orderid,
    day: info.day,
    changeBtn: handleChange,
    submitBtn: handleSubmit,
    changeRenderBtn: logout,
    steps: stepArray,
    trackingId: trackingId,
  };

  useEffect(() => {
    let timeout;
    if (statusIndex < status.length - 1) {
      timeout = setTimeout(() => setStatusIndex(statusIndex + 1), 2000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [status, statusIndex]);

  useEffect(() => {
    if (trackingId) {
      console.log("present");
    } else {
      setTrackingId(Date.now());
      console.log('absent');
    }

    return () => {
      localStorage.clear();
    };
  }, [trackingId,states.orderid]);

  // const changeRender = setRender(false);

  return (
    <AppContext.Provider value={states}>
      <>
        {render ? (
          <PageTwo />
        ) : (
          <div className="App">
            <PageOne />
          </div>
        )}
        {/* <PageTwo/> */}
      </>
    </AppContext.Provider>
  );
}

export default App;
