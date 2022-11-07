import React from "react";
import './EventsList.css';

import EventCard from '../../../cards/eventcard/EventCard'

function EventsList(props) {

    return (  
        <React.Fragment>

            <h3>Events List</h3>
            <div className="eventslist-container">

                {props.events.map(element => {
                    return(
                        <EventCard key={element.id} event={element}/>
                    )})}
                
            </div>

        </React.Fragment>
    );
}

export default EventsList;