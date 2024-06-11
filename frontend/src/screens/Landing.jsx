import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";

const Landing = () => {
  const [movies, setMovies] = useState([1, 2, 3]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3000/movies");
        setMovies(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  

  return (
    <div className="justify-center mx-4 ">
      <Navbar/>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Top 20 movies</h2>
      </div>
      {movies.map((movie, index) => (
                <div key={index} className="w-full px-10 mb-8">
                    <MovieCard
                        movieName = {movie.movieName}
                        description = {movie.description}
                        imageLink = {movie.imageLink}
                        onClick={() => navigate(`/movie/${movie._id}`)}
                    />
                </div>
            ))}
      <div className="flex justify-center mt-10">
      </div>
    </div>
  );
};

export default Landing;
