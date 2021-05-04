import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';

//api = https://api.themoviedb.org/3/movie/550?api_key=a3dc722615792669aca8014deebeb79a
//apiurl = https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a3dc722615792669aca8014deebeb79a&page=1
//imageapi = https://image.tmdb.org/t/p/w1280/xGuOF1T3WmPsAcQEQJfnG7Ud9f8.jpg
//imageapi = https://image.tmdb.org/t/p/original/poster_path
//searchapi = https://api.themoviedb.org/3/search/movie?api_key=a3dc722615792669aca8014deebeb79a&query=

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a3dc722615792669aca8014deebeb79a&page=1";
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=a3dc722615792669aca8014deebeb79a&query="

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getMovies(FEATURED_API);
  },[])

  const getMovies = (API) => {
    fetch(API).then(res => res.json())
    .then(data => {
      console.log(data)
      setMovies(data.results)})
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm){
    getMovies(SEARCH_API+searchTerm)
      setSearchTerm('');
    }
  }
  
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <>
    <header>
      <form onSubmit={handleOnSubmit}>
        <input  className="search" type="text" placeholder="Search..." value={searchTerm} onChange={handleOnChange}/>
      </form>
    </header>
    <div className="movie-container">
      {movies.length > 0 && movies.map((movie) => (
        <MovieList key = {movie.id} {...movie}/>
      ))}
    </div>
    </>
  );
}
export default App;

