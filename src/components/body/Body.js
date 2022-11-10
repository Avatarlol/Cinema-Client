import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './Body.css'

function Body(props) {
    return ( 
        <div className='body-container'>

                <Routes>
                    {props.tabs.map(tab => {return(
                        <Route exact path={tab.path} element={tab.content}/>
                    )})}
                    <Route path="*" element={<div>N/A</div>}/>
                </Routes>

        </div>
    );
}

export default Body;