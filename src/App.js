import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import MovieList from './components/MovieList';
import Details from './components/Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Navbar,Form,FormControl,Button,DropdownButton, Dropdown, Nav} from 'react-bootstrap';

const FEATURED_API = "http://localhost:4000/movies"

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [languageTerm, setLanguageTerm] = useState('');

  useEffect(() => {
    getMovies(FEATURED_API);
  },[])

  const getMovies = (API) => {
    fetch(API).then(res => res.json())
    .then(data => {
      console.log(data)
      setMovies(data)})
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm){
      alert("calling")
    getMovies("http://localhost:4000/movies?title_like="+searchTerm)
      setSearchTerm('');
    }
  }
  
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const changeLanguage = (e) => {
    getMovies("http://localhost:3001/movies?language="+e)
  }

  /*const handleLanguage = (e) => {
    e.preventDefault();

    if(language){
    getMovies(SEARCH_API+language)
      setLanguage('');
    }
  }*/

  /*<form onSubmit={handleLanguage}>
        <select className="filter" value={language} onChange={changeLanguage}>
          <option  value="english">english</option>
          <option  value="german">german</option>
          <option  value="france">france</option>
        </select>
      </form>*/
  
  return (
    <>
   
    <Container>
    <Navbar expand="lg" variant="light" bg="light">
    <Navbar.Brand href="#">Movie Search App</Navbar.Brand>
    <br />
    <Form inline onSubmit={handleOnSubmit}>
    
    <DropdownButton  className="ml-auto" id="dropdown-basic-button" title="Language"  onSelect={changeLanguage}>
    <Dropdown.Item eventKey="danish">danish</Dropdown.Item>
    <Dropdown.Item eventKey="english">english</Dropdown.Item>
    <Dropdown.Item eventKey="hindi">hindi</Dropdown.Item>
    </DropdownButton>

    <FormControl  className="ml-auto" type="text" placeholder="Search" value={searchTerm} onChange={handleOnChange}  className="mr-sm-2" />
    
    </Form>
    </Navbar>
    </Container>

    <Switch>  
    <Route  path="/details">   <Details   />   </Route>
    <Route path="/"> 
    <div className="movie-container">
      {movies && movies.length > 0 && movies.map((movie) => (
        <MovieList key = {movie.id} {...movie}/>
      ))}
    </div>
    </Route>
    </Switch>
    </>
  );
}
export default App;

