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


const MovieList = ({title, poster, overview, rating}) => {
  return (
    <div className = 'movie'>
    <a href="/details">details</a>
      <img 
      src = {
        "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"} 
      alt={title} />
      
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
