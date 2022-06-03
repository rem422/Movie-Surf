import React, { useState, useEffect } from 'react';
import searchIcon from './search.svg';
import './App.css';
import MovieCard from './MovieCard';

// 9f69bc34

const API_URL = 'https://www.omdbapi.com?apikey=9f69bc34';

const movie1 = {
    "Title": "Hollywood's Master Storytellers: Spiderman Live",
    "Year": "2006",
    "imdbID": "tt2158533",
    "Type": "movie",
    "Poster": "N/A"
}
  

const App = () => {
const[movies, setMovies] = useState([]);
const[searchTerm, setSearchTerm] = useState('')



const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);

}

useEffect(() => {
  searchMovies('');
}, []);

  return (
    <div className='app'>
        <h1>Movie Land</h1>

{/* =====================Search section==================== */}
        <div className="search">
            <input 
            placeholder='Search for movies' 
            value={ searchTerm } 
            onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <img 
            src={ searchIcon } 
            alt="search"
            onClick={() => searchMovies(searchTerm)}
            />
        </div>

        {/* =====================movies container section==================== */}
       {movies?.length > 0 
       ? (
            <div className="container">
              {movies.map((movie) => (
                  <MovieCard movie={movie} />
              ))}
            </div>
         ) : (
            <div className="empty">
                <h2>No movies found</h2>
            </div>
        )}  
    </div>
  )
}

export default App;