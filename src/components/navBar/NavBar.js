import { NavLink } from 'react-router-dom';
import React from 'react';
import './NavBar.css'

function NavBar(props) {


    function toggleTabs(event) {
        if(event.target.id !== props.activeTab){
            props.setActiveTab(event.target.id)
        }
    }


    return ( 
        <div id='navbar' className='navbar-container'>

                {props.tabs.map(tab => {
                    return(
                    <NavLink to={tab.path}>
                    <button id={tab.key} name='tabs' className={props.activeTab===tab.key? 'active' : ''} onClick={toggleTabs}>{tab.title}</button>
                    </NavLink>
                )})}
        
        </div>
     );
}

export default NavBar;