import { useState, useEffect } from "react";
import "../src/App.css";
import {BrowserRouter as Router, Route} from "react-router-dom"
import AppContext from "./AppContext";
import PageOne from "./component/PageOne";
import PageTwo from "./component/PageTwo";
import ProtectedRoute from "./component/ProtectedRoute";

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
      setRender(true);
      console.log(render);
    } else {
      alert("Please check your credentials and try again. Thank you");
    }
    console.log(render);
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
    login: render
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
      setTrackingId(trackingId)
    } else {
      setTrackingId(Date.now());
    }

    return () => {
      localStorage.clear();
    };
  }, [trackingId,states.orderid]);

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
          <Route path="/" exact component={PageOne}/>
          {/* <Route path="/dashboard" component={PageTwo}>
            <PageTwo/>
          </Route> */}
          <ProtectedRoute path="/dashboard" component={PageTwo} isAuth={render}/>

      </AppContext.Provider>
    </Router>
  );
}

export default App;
