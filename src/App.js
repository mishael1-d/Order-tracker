import "../src/App.css";

function App() {
  return (
    <div className="App">
      <h2>order tracking form</h2>
      <div className="container">
        <h3>track your order</h3>
        <div className="input-field">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="e-mail">E-Mail</label>
          <input type="text" name="e-mail" id="e-mail" />
          <label htmlFor="order-id">
            Order ID <span>*</span>
          </label>
          <input type="text" pattern="[0-9]*"name="order-id" id="order-id" required />
          <div className="date">
            <label htmlFor="doo">Date Of Order</label>
            <input type="day" pattern="[0-9]*" maxLength="2"name="date" id="date" placeholder="DD"/>
            <input type="day" pattern="[0-9]*" name="month" id="month" placeholder="MM" maxLength="2"/>
            <input type="day" pattern="[0-9]*" name="month" id="month" placeholder="YYYY" maxLength="4"/>
          </div>
          <button type="submit">Submit</button>
        </div>
      </div>
      <p>
        &copy; 2021 Order Tracking Form. All Rights Reserved | Design by
        Mish_Technologies.
      </p>
    </div>
  );
}

export default App;
