/**
 * Server side component that exposes APIs to search movies from Movie data.
 * Kumari T
 */
const express = require ("express");
const bodyParser = require ("body-parser");
const cors = require("cors");
const app = express();
JSON.filter = require('node-json-filter');

/**
 * 
 * Movies data - block can be repaced with MongoDB or any other nosql DB.
 */

const movies = [
  {
    "id": 1,
    "title": "Fight Club",
    "language": "english",
    "rating":7.8,
    "plot": "Two imprisoned men bond over a number of years, finding solace and eventual rough nacts of common decency",
    "poster": "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "location": "US",
    "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion."
  },
  {
    "id": 2,
    "title": "Mortal Kombat",
    "language": "danish",
    "rating":8.8,
    "plot": "Two imprisoned men bond over a number os years, finding solace and eventual rough nacts of common decency",
    "poster": "https://m.media-amazon.com/images/M/MV5BNjY5NTEzZGItMGY3My00NzE4LThkYTUtYjJkNzk3MDBiMWE3XkEyXkFqcGdeQXVyNzg5MDE1MDk@._V1_SX300.jpg",
    "location": "Denmark",
    "overview": "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe."
  },
  {
    "id": 3,
    "title": "Godzilla vs. Kong",
    "language": "german",
    "rating":6.7,
    "plot": "Two imprisoned men bond over a number os years, finding solace and eventual rough nacts of common decency",
    "poster": "https://m.media-amazon.com/images/M/MV5BZmYzMzU4NjctNDI0Mi00MGExLWI3ZDQtYzQzYThmYzc2ZmNjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg",
    "location": "Germany",
    "overview": "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages."
  },
  {
    "id": 4,
    "title": "Vanquish",
    "language": "english",
    "rating":5,
    "plot": "Two imprisoned men bond over a number os years, finding solace and eventual rough nacts of common decency",
    "poster": "https://m.media-amazon.com/images/M/MV5BZWEzZDdjMjAtOWM1Zi00MTZkLWE5OTEtMDg2YmNmODFjOTBjXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg",
    "location": "London",
    "overview": "Victoria is a young mother trying to put her dark past as a Russian drug courier behind her, but retired cop Damon forces Victoria to do his bidding by holding her daughter hostage. Now, Victoria must use guns, guts and a motorcycle to take out a series of violent gangsters—or she may never see her child again."
  },
  {
    "id": 5,
    "title": "Nobody",
    "language": "english",
    "rating":8.5,
    "plot": "Two imprisoned men bond over a number os years, finding solace and eventual rough nacts of common decency",
    "poster": "https://m.media-amazon.com/images/M/MV5BMTg4ODkzMDQ3Nl5BMl5BanBnXkFtZTgwNTEwMTkxMDE@._V1_SX300.jpg",
    "location": "Texas",
    "overview": "Hutch Mansell, a suburban dad, overlooked husband, nothing neighbor — a \"nobody.\" When two thieves break into his home one night, Hutch's unknown long-simmering rage is ignited and propels him on a brutal path that will uncover dark secrets he fought to leave behind"
  },
  {
    "id": 6,
    "title": "Mugen Train",
    "language": "japanese",
    "rating":8.3,
    "plot": "Two imprisoned men bond over a number os years, finding solace and eventual rough nacts of common decency",
    "poster": "https://m.media-amazon.com/images/M/MV5BODI2NjdlYWItMTE1ZC00YzI2LTlhZGQtNzE3NzA4MWM0ODYzXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_SX300.jpg",
    "location": "Canada",
    "overview": "Tanjirō Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyōjurō Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!"
  },
  {
    "id": 7,
    "title": "The Marksman",
    "language": "french",
    "rating":7.5,
    "plot": "Two imprisoned men bond over a number os years, finding solace and eventual rough nacts of common decency",
    "poster": "https://m.media-amazon.com/images/M/MV5BODdlNThhMTUtNmU1OS00ZjM3LWE1ZjMtOWViN2RhYWRiZTg5XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg",
    "location": "France",
    "overview": "Jim Hanson’s quiet life is suddenly disturbed by two people crossing the US/Mexico border – a woman and her young son – desperate to flee a Mexican cartel. After a shootout leaves the mother dead, Jim becomes the boy’s reluctant defender. He embraces his role as Miguel’s protector and will stop at nothing to get him to safety, as they go on the run from the relentless assassins."
  },
  {
    "id": 8,
    "title": "Zack Snyder's Justice League",
    "language": "hindi",
    "rating":8.5,
    "plot": "Two imprisoned men bond over a number os years, finding solace and eventual rough nacts of common decency",
    "poster": "https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg",
    "location": "India",
    "overview": "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions."
  },
  {
    "id": 9,
    "title": "Thunder Force",
    "language": "english",
    "rating":5.8,
    "plot": "Two imprisoned men bond over a number os years, finding solace and eventual rough nacts of common decency",
    "poster": "https://m.media-amazon.com/images/M/MV5BMjAwMDcyNzEwNl5BMl5BanBnXkFtZTcwMDcwMjAyMQ@@._V1_SX300.jpg",
    "location": "US",
    "overview": "In a world where supervillains are commonplace, two estranged childhood best friends reunite after one devises a treatment that gives them powers to protect their city."
  },
  {
    "id": 10,
    "title": "Chaos Walking",
    "language": "dutch",
    "rating":7.3,
    "plot": "Two imprisoned men bond over a number os years, finding solace and eventual rough nacts of common decency",
    "poster": "https://m.media-amazon.com/images/M/MV5BYTcxYTk3MWQtZThlMS00ZjQ0LTg0NjktNGVkNWM2MTAyYWJmXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg",
    "location": "US",
    "overview": "Two unlikely companions embark on a perilous adventure through the badlands of an unexplored planet as they try to escape a dangerous and disorienting reality, where all inner thoughts are seen and heard by everyone."
  }
]

//------------------------------------------------------------------------------------------------//

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

/**
 * Route URI to list all Movies.
 * Equivalent to findAll().
 */
app.get("/movies", (req, res) => {
  res.send(movies)
  console.log("json data from express server"+ movies)
})

/**
 * Route URI to filter to speific movie based on id.
 */
app.get("/movie/:id", (req, res) => {
  const movie = movies.find(m => m.id === parseInt(req.params.id));
  if(!movie) res.status(404).send("The movie with the ID is NOT FOUND");
  res.send(movie);
  })

/**
 * Route URI path to filter to language.
 */
app.get("/movies/language/:lang", (req ,res) => {
  const  filtered_movies = movies.filter(function(x){return x.language==req.params.lang});
  console.log("here")
  res.send(filtered_movies);
})

/**
 * Route URI path to filter to search string in title.
 * It matches based on contains or includes.
 */
app.get("/movies/title/:title", (req ,res) => {
  var filtered_movies = movies.filter(function(x){return x.title.includes(req.params.title) });
  console.log("here")
  res.send(filtered_movies);
})

/**
 * Start server.
 */
app.listen(4000, (req, res) => {
  console.log("server is running in port : 4000");
});