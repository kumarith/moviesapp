import React, { useState, useEffect } from 'react';
import {Container,Card,Button,FormControl,DropdownButton, Dropdown, Nav} from 'react-bootstrap';


const Details = () => {
  const FEATURED_API = "http://localhost:4000/movie/:id"
  const [movieDetails, setMovieDetails] = useState([]);
 

  useEffect(() => {
    getMoviesDetails(FEATURED_API);
  },[])

  const getMoviesDetails = (API) => {
    fetch(API).then(res => res.json())
    .then(data => {
      console.log(data)
      alert(data)
      setMovieDetails(data)})
  }

  return (
    <div className = "card">
    <Card>
     <Card.Img variant="top" src={movieDetails.poster} />
     <Card.Body>
       <Card.Title> {movieDetails.title} </Card.Title>
        <Card.Text><h5>Language:</h5> {movieDetails.language}</Card.Text>
        <Card.Text><h5>Rating:</h5> {movieDetails.rating}</Card.Text>
        <Card.Text><h5>Plot:</h5> {movieDetails.plot}</Card.Text>
        <Card.Text><h5>Location:</h5> {movieDetails.location}</Card.Text>
        <Card.Text><h5>Overview:</h5> {movieDetails.overview}</Card.Text>
       <Button href="/movies" variant="primary">Go somewhere</Button>
     </Card.Body>
    </Card>
    </div>
  )
}

export default Details;