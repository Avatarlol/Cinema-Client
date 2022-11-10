import React from "react";
import { useState } from "react";
import './SubTabs.css'



function SubTabs(props) {

    const tabs = props.tabs

    const [activeBar, setActiveBar] = useState(tabs[0])

    const toggleTabs = event => {
        setActiveBar(tabs[event.target.id])
        
    }
    
    return (  
        <React.Fragment>
        <div className="tabs">
            {tabs.map(tab => {return(
                <button id={tab.key} key={tab.key} className={tab.key===activeBar.key ? 'active' : ''}  onClick={toggleTabs}>{tab.title}</button>
            )})}
        </div>
        <div className="content">{activeBar.content}</div>
        </React.Fragment>
    );
}

export default SubTabs;