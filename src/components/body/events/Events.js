import React, { useState } from "react";
import './Events.css'

import EventsFilters from "./eventsfilters/EventsFilters";
import EventsList from './eventslist/EventsList'

function Events() {

    const [events, setEvents] = useState([])

    return ( 
        <div className="events-container">

            <EventsFilters setEvents={setEvents}/>
            <EventsList events={events}/>

        </div>
     );
}

export default Events;