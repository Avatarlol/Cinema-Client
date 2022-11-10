import React, { useRef, useCallback } from "react";
import '../../Filters.css'

function EventsFilters(props) {

    const nameFilterRef = useRef('')
    const dateFilterRef = useRef('')

    const fetchEventsHandler = useCallback(async () => {
      const name = nameFilterRef.current.value;
      const date = dateFilterRef.current.value;
      console.log('name: ' + name + '\ndate: ' + date);

        try {
          let response;
          if(date.length==0 && name.length==0){
            response = await fetch('event/all');
          }else{
            const requestOptions = {
              method: "POST",
              headers: { "Content-Type": "application/json" , token: ''},
              body: JSON.stringify(
              {
                "name": name,
                "date": date
              })
            };
            response = await fetch('event/filter', requestOptions)
          }
          
          if (!response.ok) {
            throw new Error('Something went wrong!');
          }
          const data = await response.json();
          props.setEvents(data);
        } catch (error) {}

    }, []);


    return ( 
        <React.Fragment>
            <h3>Events filters</h3>
            <div className="filters-container">
                
                <filters>
                <input type='text' placeholder='Movie name' ref={nameFilterRef}/>
                <input type="date" placeholder='Date' ref={dateFilterRef}/>

                </filters>

                <button onClick={fetchEventsHandler}>Search</button>

            </div>
        </React.Fragment>
     );
}

export default EventsFilters;