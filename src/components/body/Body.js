import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './Body.css'

import Home from './home/Home';
import Movies from './movies/Movies'
import Events from './events/Events'

function Body() {
    return ( 
        <div className='body-container'>

                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/movies" element={<Movies/>}/>
                    <Route exact path="/events" element={<Events/>}/>
                    <Route exact path="/admin" element={<div>TAB 3</div>}/>
                    <Route path="*" element={<div>NO SUCH THING</div>}/>
                </Routes>

        </div>
    );
}

export default Body;