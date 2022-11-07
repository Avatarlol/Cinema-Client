import React from "react";
import './EventCard.css'


function EventCard(props) {

    let datetime = props.event.startTime
    datetime = new Date(datetime)
    let date = datetime.toLocaleDateString();
    const time = datetime.toLocaleTimeString();
    

    const monthNames = ["Jan", "Feb", "March", "April", "May", "June",
    "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    date = date.split('.');
    const day = date[0]
    const month = monthNames[date[1]-1];
    const year = date[2]
    
    let length = props.event.movie.length;
    length = length.replace('PT', '')
    length = length.replace(/H|M|S/g, ':')
    length = length.split(":")
    const h = length[0]
    const m = length[1]
    length = h*60+m*1

    function onPurchase(event) {
        const eventId = event.target.id;
        console.log(eventId);
        
    }

    return (  
        <div className="eventcard-container">

            <img src={props.event.movie.image}/>

            <div className="name">
            {props.event.movie.name}
            </div>
            <div className="date">{day}<br/>{month} {year}</div>
            <section className="time">
                <div>{time}</div>
                <div>{length} minutes</div>
            </section>
            <div className="purchase">
                <button id={props.event.id} onClick={onPurchase}>Purchase</button>
            </div>
            
            
            
            
            

        </div>
    );
}

export default EventCard;