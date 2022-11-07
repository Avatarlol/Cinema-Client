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

                <NavLink to='/'>
                <button id='0' name='tabs' className={props.activeTab==='0'? 'active' : ''} onClick={toggleTabs}> <img  id='0' src='favicon.ico'/> </button>
                </NavLink>
                <NavLink to='/movies'>
                <button id='1' name='tabs' className={props.activeTab==='1'? 'active' : ''} onClick={toggleTabs}>Movies</button>
                </NavLink>
                <NavLink to='/events'>
                <button id='2' name='tabs' className={props.activeTab==='2'? 'active' : ''} onClick={toggleTabs}>Events</button>
                </NavLink>
                <NavLink to='/admin'>
                <button id='3' name='tabs' className={props.activeTab==='3'? 'active' : ''} onClick={toggleTabs}>Admin</button>
                </NavLink>
        
        </div>
     );
}

export default NavBar;