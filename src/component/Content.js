import React from 'react'
import { useContext } from 'react/cjs/react.development'
import AppContext from '../AppContext'
import TrackingDetails from './TrackingDetails';

function Content() {
    const myContext = useContext(AppContext);
    const date = new Date().getTime().toString();
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
                    <p className="sub-info">{myContext.day}</p>
                </span>
                <span>
                    <p className="info">Shipped By:</p>
                    <p className="sub-info">CCS Delivery, USA</p>
                </span>
                <span>
                    <p className="info">Status:</p>
                    <p className="sub-info">On the way</p>
                </span>
                <span>
                    <p className="info">Tracking #:</p>
                    <p className="sub-info">{date}</p>
                </span>
            </div>
        </div>
        <TrackingDetails/>
        </>
    )
}

export default Content
