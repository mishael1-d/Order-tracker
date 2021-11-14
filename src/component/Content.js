import React, {  useContext} from "react";
import AppContext from "../AppContext";
import Status from "./status";
import TrackingDetails from "./TrackingDetails";

function Content() {
  const myContext = useContext(AppContext);
  const day = parseInt(new Date().getDate() + 7);
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const fullDate = `${day} / ${month + 2} / ${year}`;

  
  return (
    <>
      <div className="content">

        <header>
          <h6>My orders / tracking</h6>
          <h5>Welcome, {myContext.name}</h5>
        </header>
        <p>Order ID: {myContext.orderid}</p>
        <div className="details">
          <span>
            <p className="info">Estimated Delivery time:</p>
            {day >= 30 ? (
              <p className="sub-info">{`${day - 7} / ${
                month + 2
              } / ${year}`}</p>
            ) : (
              <p className="sub-info">{fullDate}</p>
            )}
          </span>
          <span>
            <p className="info">Shipped By:</p>
            <p className="sub-info">CCS Delivery, USA</p>
          </span>
          <span>
            <p className="info">Status:</p>
            <Status />
          </span>
          <span>
            <p className="info">Tracking #:</p>
            <p className="sub-info">{myContext.trackingId}</p>
          </span>
        </div>
      </div>
      <TrackingDetails />
    </>
  );
}

export default Content;