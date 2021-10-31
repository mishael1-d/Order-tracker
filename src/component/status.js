import React, {useState, useEffect, useContext} from 'react'
import AppContext from '../AppContext'

function Status () {
    const myContext = useContext(AppContext);
    const [statusIndex, setStatusIndex] = useState(0)
    const days = parseInt(new Date().getDate() + 7)
    
    const status = myContext.steps
    
    useEffect(()=>{
        let timeout;
        if (statusIndex < status.length -1) {
            timeout = setTimeout(()=> setStatusIndex(statusIndex + 1), days);
        }
        return ()=> {
            clearTimeout(timeout);
        };
    }, [status, statusIndex, days]);
    return <p className="sub-info">{status[statusIndex]}</p>
}

export default Status
