import React, { useState,useEffect,useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];
  const [movieState,setMovieState] = useState([]);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);
  const getDummyMovies = useCallback(()=>{
    setLoading(true);
    fetch('https://swapi.dev/api/films').then(response=>{
      if(!response.ok){
        throw new Error("Something went wrong");
      }
      return response.json();
    }).then((data)=>{ 
      const transformedMovies = data.results.map((movie)=>{
                          return {
                            "id":movie.episode_id,
                            "title":movie.title,
                            "releaseDate":movie.release_date,
                            "openingText":movie.opening_crawl
                          }
      })
      setMovieState(transformedMovies);
     
    }).catch((error)=>{
      setError(error.message);
    })
    setLoading(false);
  },[]);
  useEffect(()=>{
    getDummyMovies();
  },[getDummyMovies])
  let content = <p>Found no movie</p>
  if(movieState.length > 0){
    content = <MoviesList movies={movieState} />;
  }
  if(error){
    content = <p>{error}</p>;
  }
  if(loading){
    content = <p>Loading...</p>;
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={getDummyMovies}>Fetch Movies</button>
      </section>
      <section>
       {content}        
      </section>
    </React.Fragment>
  );
}

export default App;
