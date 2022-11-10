import React, { useCallback, useState, useEffect, useRef } from "react";
import { isFormValid } from "../Form";

function EventForm() {

    const [error, setError] = useState('')
    const [theaters, setTheaters] = useState([])
    const [movies, setMovies] = useState([])

    const movieNameRef = useRef('')
    const theaterIdRef = useRef('')
    const startTimeRef = useRef('')

    const getTheaters = useCallback(async () => {
        try {
            const response = await fetch('getTheaters');
            if (!response.ok) {
              throw new Error('Something went wrong!');
            }
            const data = await response.json();
            setTheaters(data);
          } catch (error) {
            setError("There's an issue with the server.")
          }
    }); 

      const getMovies = useCallback(async () => {
        try {
            
            const response = await fetch('movie/all');
            if (!response.ok) {
              throw new Error('Something went wrong!');
            }
            const data = await response.json();
            setMovies(data);
          } catch (error) {
            setError("There's an issue with the server.")
          }
      }); 

      const addEventHandler = e =>{
        e.preventDefault();
        setError('')
        try {
          const parent = document.getElementById('event-form')
          const valid = isFormValid(parent)
          if(!valid){
            throw '1';
          }
          const movie = movies.find(movie => {return movie.name === movieNameRef.current.value});
          if(movie == null){
              throw '2';
          }
          const event = {
              startTime: startTimeRef.current.value,
              movie: {
                  id: movie.id
              },
              theater: {
                  id: theaterIdRef.current.value
              }
          }
          console.log(event);
            
        }
        catch (error) {
            switch(error){
              case '1':{setError('Fill all the fields!'); break;}
              case '2':{setError('Please select a movie from the dropdown!'); break;}
              default: throw error;
            }
              
        }
    }
        


    useEffect(() => {
        getTheaters();
        getMovies()
      }, [])

    return ( 
        <form id='event-form'>
            <div className="error">{error}</div>
            <br/>
            Movie name
            <br/>
            <input id='movie-name' list="movielist" required={true} ref={movieNameRef}/>
            <datalist id="movielist">
                {movies.map(movie => {return(
                        <option id={movie.id} key={movie.id} value={movie.name}/>
                    )})}
            </datalist>
            <br/><br/>
            Starting time
            <br/>
            <input id='start-date' type="datetime-local" required={true} ref={startTimeRef}/>
            <br/><br/>
            Theater
            <br/>
            <select ref={theaterIdRef} required={true}>
                {theaters.map(theater => {return(
                    <option key={theater.id} value={theater.id}>#{theater.theaterNumber} ({theater.seats} seats)</option>
                )})}
            </select>
            <br/><br/>
            <button onClick={addEventHandler} > Submit </button>
        </form>
     );
}

export default EventForm;