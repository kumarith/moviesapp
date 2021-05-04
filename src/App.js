import React, { useState, useEffect } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import MovieList from './components/MovieList';
import Details from './components/Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Navbar,Form,FormControl,DropdownButton, Dropdown} from 'react-bootstrap';
const FEATURED_API = "http://localhost:4000/movies"

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
      setMovies(data)})
  }

  /**
   * On search
   * @param {} e 
   */
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(searchTerm){
    getMovies(`http://localhost:4000/movies/title/${searchTerm}`);
    setSearchTerm('');
    }
  }
  
  /**
   * Capture search term as user enters in searchbox
   * @param {} e 
   */
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  /**
   * 
   * @returns home url with context path calculated
   */
  function getHomepath(){
    var context = window.location.pathname.substring(0, window.location.pathname.indexOf("/",2)); 
    var url =window.location.protocol+"//"+ window.location.host +context+"/";
    return url;
  }
  /**
   * Change of language, go back to home page.
   * @param {*} e 
   */
  const changeLanguage = (e) => {
    getMovies("http://localhost:4000/movies/language/" +e)
    if (window.location.href.includes('details'))
    window.location.href = getHomepath();
  }
  
  return (
    <>
    <Container>
    <Navbar className="bg-light justify-content-between"  expand="lg" variant="light" bg="light">
    <Navbar.Brand href="#">Movie Search App</Navbar.Brand>
    <br />
    <Form  inline onSubmit={handleOnSubmit}>
    <DropdownButton  className="ml-auto" id="dropdown-basic-button" title="Language"  onSelect={changeLanguage}>
    <Dropdown.Item eventKey="danish">danish</Dropdown.Item>
    <Dropdown.Item eventKey="english">english</Dropdown.Item>
    <Dropdown.Item eventKey="hindi">hindi</Dropdown.Item>
    <Dropdown.Item eventKey="dutch">dutch</Dropdown.Item>
    <Dropdown.Item eventKey="french">french</Dropdown.Item>
    <Dropdown.Item eventKey="spanish">spanish</Dropdown.Item>
    </DropdownButton>
    <FormControl  className="ml-auto" type="text" placeholder="Search" value={searchTerm} onChange={handleOnChange}  className="mr-sm-2" />
    </Form>
    </Navbar>
    <BrowserRouter>
    <Route  path="/details"><Details/></Route>
    <Route path="/"> 
    <div className="movie-container">
      {movies && movies.length > 0 && movies.map((movie) => (
        <MovieList key = {movie.id} {...movie}/>
      ))}
    </div>
    </Route>
    </BrowserRouter>
    
    </Container>
    </>
  );
}
export default App;

