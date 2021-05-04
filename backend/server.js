const express = require ("express");
const bodyParser = require ("body-parser");
const cors = require("cors");




const app = express();
JSON.filter = require('node-json-filter');
//-------------------------------------------------movies data------------------------------------//

const movies = [
  {
    "id": 1,
    "title": "Mortal Kombat",
    "language": "english",
    "rating":7.8,
    "plot": "Two imprisoned men bond over a number os years, finding solace and eventual rough nacts of common decency",
    "poster": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    "location": "US",
    "overview": "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe."
  },
  {
    "id": 2,
    "title": "Avengers",
    "language": "danish",
    "rating":8.8,
    "plot": "Two imprisoned men bond over a number os years, finding solace and eventual rough nacts of common decency",
    "poster": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    "location": "Denmark",
    "overview": "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe."
  },
  {
    "id": 3,
    "title": "Shark",
    "language": "german",
    "rating":6.7,
    "plot": "Two imprisoned men bond over a number os years, finding solace and eventual rough nacts of common decency",
    "poster": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    "location": "Germany",
    "overview": "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe."
  },
  {
    "id": 4,
    "title": "Flash",
    "language": "english",
    "rating":5,
    "plot": "Two imprisoned men bond over a number os years, finding solace and eventual rough nacts of common decency",
    "poster": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    "location": "London",
    "overview": "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe."
  },
  {
    "id": 5,
    "title": "Nobody",
    "language": "english",
    "rating":5.6,
    "plot": "Two imprisoned men bond over a number os years, finding solace and eventual rough nacts of common decency",
    "poster": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    "location": "Texas",
    "overview": "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe."
  },
  {
    "id": 6,
    "title": "Big bang",
    "language": "english",
    "rating":9,
    "plot": "Two imprisoned men bond over a number os years, finding solace and eventual rough nacts of common decency",
    "poster": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    "location": "Canada",
    "overview": "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe."
  },
  {
    "id": 7,
    "title": "Universe",
    "language": "French",
    "rating":9,
    "plot": "Two imprisoned men bond over a number os years, finding solace and eventual rough nacts of common decency",
    "poster": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    "location": "France",
    "overview": "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe."
  },
  {
    "id": 8,
    "title": "waterland",
    "language": "Hindi",
    "rating":6,
    "plot": "Two imprisoned men bond over a number os years, finding solace and eventual rough nacts of common decency",
    "poster": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    "location": "India",
    "overview": "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe."
  },
  {
    "id": 9,
    "title": "Skyland",
    "language": "english",
    "rating":9.9,
    "plot": "Two imprisoned men bond over a number os years, finding solace and eventual rough nacts of common decency",
    "poster": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    "location": "US",
    "overview": "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe."
  },
  {
    "id": 10,
    "title": "wonderland",
    "language": "english",
    "rating":4,
    "plot": "Two imprisoned men bond over a number os years, finding solace and eventual rough nacts of common decency",
    "poster": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    "location": "US",
    "overview": "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe."
  }
]

//------------------------------------------------------------------------------------------------//

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());

app.get("/movies", (req, res) => {
  res.send(movies)
  console.log("json data from express server"+ movies)
})

app.get("/movie/:id", (req, res) => {
  const movie = movies.find(m => m.id === parseInt(req.params.id));
  //console.log(movie)
  if(!movie) res.status(404).send("The movie with the ID is NOT FOUND");
  res.send(movie);
  })

app.get("/movies/language/:lang", (req ,res) => {
  const  filtered_movies = movies.filter(function(x){return x.language==req.params.lang});
  console.log("here")
  res.send(filtered_movies);
})

app.get("/movies/title/:title", (req ,res) => {
  var filtered_movies = movies.filter(function(x){return x.title.includes(req.params.title) });
 
  console.log("here")
  res.send(filtered_movies);
})

//start express server on port 4000
app.listen(4000, (req, res) => {
  console.log("server is running in port : 4000");
});