import React, {useContext} from 'react'
import { Link, withRouter } from "react-router-dom"
import Content from './Content'
import AppContext from '../AppContext'
import Stepper from './stepper/Stepper';

function PageTwo() {
    const myContext = useContext(AppContext);
    
    return (
        <div className="pageTwo">
            <nav>
                <h3>Cargo Courier Service, USA</h3>
                <p className="mid-nav">Shippment Tracking</p>
                <Link to="/">
                <button onClick={myContext.changeRenderBtn}>Logout</button>
                </Link>
            </nav>
            <Content/>
            <Stepper/>
        </div>
    )
}

export default withRouter(PageTwo)
