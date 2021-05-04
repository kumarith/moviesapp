import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Details from './Details';

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
  if (vote >= 8){
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
}


const MovieList = ({title, poster, overview, rating, id}) => {
  return (
    <div className = 'movie'>
    <a href= {'/details/' + id} >
      <img 
      src = { poster} 
      alt={title} />
      </a>
      <div className = 'movie-info'>
        <h3>{title}</h3>
        <span  className={`tag ${setVoteClass(rating)}`}>{rating}</span>
      </div>
      <div className = "movie-over">
        <h2>Overview: </h2>
        <p>{overview}</p>
      </div>
      
    </div>
  )
}

export default MovieList;
