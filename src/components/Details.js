
import React, { useState, useEffect } from 'react';
import {Container,Card,Button,FormControl,DropdownButton, Dropdown, Nav} from 'react-bootstrap';







const Details = () => {
  const FEATURED_API = "http://localhost:3001/movies/1"
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
    <div>
    <Card style={{ width: '18rem' }}>
     <Card.Img variant="top" src="holder.js/100px180" />
     <Card.Body>
       <Card.Title> {movieDetails.title} </Card.Title>
        <Card.Text>
         Some quick example text to build on the card title and make up the bulk of
         the card's content.
        </Card.Text>
       <Button variant="primary">Go somewhere</Button>
     </Card.Body>
    </Card>
    </div>
  )
}

export default Details;