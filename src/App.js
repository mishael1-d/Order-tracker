import { useState, useEffect } from "react";
import "../src/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppContext from "./AppContext";
import Login from "./component/PageOne";
import Dashboard from "./component/PageTwo";
import ProtectedRoute from "./component/ProtectedRoute";

function App() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    orderid: "",
    day: "",
  });
  // const [render, setRender] = useState(true);
  const [errorMessage, setErrorMessage] = useState({ value: "" });

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
    if (info.name === "" || info.orderid === "") {
      setErrorMessage((prevState) => ({
        value: "Empty name/order id/email field",
      }));
      // setRender(true);
      console.log(errorMessage.value);
    } else if (
      info.orderid === "1234567890" ||info.orderid==="0987654321"
    ) {
      localStorage.setItem("isAuth", "true");
      window.location.pathname = "/";
    } else {
      setErrorMessage((prevState) => ({ value: "Invalid credentials" }));
    }
  };
  const logout = () => {
    // setRender(false);
    localStorage.clear();
    window.location.pathname = "/login";
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
    // login: render,
    errormessage: errorMessage,
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
      setTrackingId(trackingId);
    } else {
      setTrackingId(Date.now());
    }

  }, [trackingId, states.orderid]);

  // const changeRender = setRender(false);

  return (
    // <AppContext.Provider value={states}>
    //   <>
    //     {render ? (
    //       <PageTwo />
    //     ) : (
    //       <div className="App">
    //         <PageOne />
    //       </div>
    //     )}
    //     {/* <PageTwo/> */}
    //   </>
    // </AppContext.Provider>
    <Router>
      <AppContext.Provider value={states}>
        <Route path="/login" component={Login} />
        {/* <Route path="/dashboard" component={PageTwo}>
            <PageTwo/>
          </Route> */}
          </AppContext.Provider>
          <AppContext.Provider value={states}>
        <ProtectedRoute path="/" exact Component={Dashboard} />
      </AppContext.Provider>
    </Router>
  );
}

export default App;
