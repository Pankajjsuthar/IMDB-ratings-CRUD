import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const MovieDetail = () => {
  const { _id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:3000/movie/${_id}`);
        setMovie(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [_id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex justify-center my-10">
      <div className="w-3/4 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">{movie.movieName}</h2>
        <div className="flex">
          <img
            src={movie.imageLink}
            alt={movie.movieName}
            className="w-md justify-center rounded-md mr-4"
          />
          <p className="ml-4">{movie.full_desc}</p>
        </div>
        <div className="mt-4">
          <button
            onClick={() => navigate("/")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
