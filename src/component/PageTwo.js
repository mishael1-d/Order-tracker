import React from 'react'
import Content from './Content'
import AppContext from '../AppContext'
import { useContext } from 'react/cjs/react.development'
import Stepper from './stepper/Stepper';

function PageTwo() {
    const myContext = useContext(AppContext);
    
    return (
        <div className="pageTwo">
            <nav>
                <h3>Cargo Courier Service, USA</h3>
                <p>Shippment Tracking</p>
                <button onClick={myContext.changeRenderBtn}>Logout</button>
            </nav>
            <Content/>
            <Stepper/>
        </div>
    )
}

export default PageTwo
