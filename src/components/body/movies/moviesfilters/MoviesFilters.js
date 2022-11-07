import React, {useRef, useCallback, useState, useEffect} from "react";
import '../../Filters.css'

function MoviesFilters(props) {

    const [genres, setGenres] = useState([])
    const nameFilterRef = useRef('')
    const genreFilterRef = useRef('')
    
    const getGenres = useCallback(async () => {
        try {
            const response = await fetch('getGenres');
            if (!response.ok) {
              throw new Error('Something went wrong!');
            }
            const data = await response.json();
            setGenres(data);
          } catch (error) {}
      });

      useEffect(() => {
        getGenres();
      }, [])
    



    const fetchMoviesHandler = useCallback(async () => {
      const name = nameFilterRef.current.value;
      const genre = genreFilterRef.current.value;
      console.log('name: ' + name + '\ngenre: ' + genre);
        try {
          let response;
          if(name=='' && genre==''){
            response = await fetch('movie/all');
          }else if(name.length > 0){
            console.log('entered name');
            const requestOptions = {
              method: "POST",
              headers: { "Content-Type": "application/json" , token: ''},
              body: JSON.stringify(
              {
                "name": name
              })
            };
            response = await fetch('movie/filter', requestOptions)
          }else if(genre.length > 0){
            console.log('entered genre');
            const requestOptions = {
              method: "POST",
              headers: { "Content-Type": "application/json" , token: ''},
              body: JSON.stringify(
              {
                "genre": genre
              }),
            };
            response = await fetch('movie/filter', requestOptions)
          }
          if (!response.ok) {
            throw new Error('Something went wrong!');
          }
          const data = await response.json();
          props.setMovies(data);
        } catch (error) {}


    }, []);

    const onInputChange = (event) => {
      switch (event.target.id) {
        case 'namefilter':
          if(nameFilterRef.current.value.length > 0){
            document.getElementById('genrefilter').disabled = true
          }
          else{
            document.getElementById('genrefilter').disabled = false
          }

          break;
        case 'genrefilter':
          if(genreFilterRef.current.value.length > 0){
            document.getElementById('namefilter').disabled = true
          }
          else{
            document.getElementById('namefilter').disabled = false
          }
          break;
        default:
          break;
      }

    }

    return (  
        <React.Fragment>

            <h3>Filters</h3>

            <div className="filters-container">
                
                <filters>
                <input id='namefilter' type='text' onChange={onInputChange} placeholder='Movie name' ref={nameFilterRef}/>

                <select id='genrefilter' onChange={onInputChange} ref={genreFilterRef}>
                <option value='' disabled selected hidden>Genre</option>
                <option value='' >All</option>
                {genres.map(element => {return(
                    <option key={element} value={element}>{element}</option>
                )}
                    )}
                </select> 
                </filters>

                <button onClick={fetchMoviesHandler}>Search</button>

            </div>

            

        </React.Fragment>

    );
}

export default MoviesFilters;

