const cors = require("cors");
const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
app.use(cors());
app.use(express.json());
const connectDB = require("./config/db");

connectDB();

const Movie  = require("./models/Movie.js"); // Assuming Movie model is in models/Movie.js
// Route to post a new movie
app.post("/movie/newMovie", async (req, res) => {
  try {
    
    const { movieName, description, imageLink, full_desc } = req.body; // Assuming these properties are sent in the request body
    
    const obj = {
      movieName : movieName,
      description : description,
      imageLink : imageLink,
      full_desc : full_desc,
    };
    const newMovie = new Movie(obj);

    const savedMovie = await newMovie.save();
    res.status(201).json(savedMovie);
  } catch (err) {
    console.log(err);
    console.log(err.message); // Log the error message
    console.log(err.stack);
    res.status(500).json({ error: "Failed to save movie" });
  }
});

// Route to get all movies
app.get("/movies", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch movies" });
  }
});

app.get("/movie/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }
    res.status(200).json(movie);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch movie details" });
  }
});

app.listen(3000, () => {
  console.log("Server started at port no. 3000.");
});

