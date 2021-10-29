import { useState } from "react";
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info.day);
    if(info.name && info.orderid && info.email) {
      setRender(!render);
    }
    else {
      alert("Please check your credentials and try again. Thank you")
    }
    
  };
  const logout =()=> {
    setRender(false)
    setInfo({
      name: "",
    email: "",
    orderid: "",
    day: "",
    })
  }
  // const changeRender = setRender(false);
  const states = {
    name: info.name,
    email: info.email,
    orderid: info.orderid,
    day: info.day,
    changeBtn: handleChange,
    submitBtn: handleSubmit,
    changeRenderBtn: logout
  };
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
      </>
    </AppContext.Provider>
  );
}

export default App;
