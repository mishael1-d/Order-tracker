import React, { useContext, useRef } from "react";
import AppContext from "../AppContext";
function InputField() {
  const myContext = useContext(AppContext);
  const orderRef = useRef();
  return (
    <>
      <h3>track your order</h3>
      <div className="input-field">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={myContext.name}
          onChange={myContext.changeBtn}
        />
        <label htmlFor="e-mail">E-Mail</label>
        <input
          type="email"
          name="email"
          id="e-mail"
          value={myContext.email}
          onChange={myContext.changeBtn}
        />
        <label htmlFor="order-id">
          Order ID <span>*</span>
        </label>
        <input
          type="text"
          name="orderid"
          title="Numbers Only"
          id="order-id"
          required
          ref={orderRef}
          maxLength="10"
          value={myContext.orderid}
          onChange={myContext.changeBtn}
        />
        <div className="date">
          <label htmlFor="doo">Date Of Order</label>
          <input
            type="date"
            maxLength="2"
            name="day"
            id="date"
            placeholder=""
            value={myContext.day}
            onChange={myContext.changeBtn}
          />
        </div>
        <button type="submit" onClick={myContext.submitBtn}>
          Submit
        </button>
      </div>
    </>
  );
}

export default InputField;
