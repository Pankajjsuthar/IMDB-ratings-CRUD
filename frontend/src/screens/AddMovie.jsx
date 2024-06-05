import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddMovie = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    movieName: "",
    description: "",
    imageLink: "",
    full_desc : "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/movie/newMovie", formData);
      alert('Movie added successfully!');
    } catch (err) {
      console.log(err);
      alert('Failed to add movie');
    }
    navigate("/");
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Movie</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="movieName" className="block text-sm font-medium text-gray-700">Movie Name</label>
            <input 
              type="text" 
              id="movieName" 
              name="movieName" 
              value={formData.movieName} 
              onChange={handleChange} 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
              required 
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description upto 100 words for Landing page</label>
            <textarea 
              id="description" 
              name="description" 
              rows="4" 
              value={formData.description} 
              onChange={handleChange} 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
              required 
            />
          </div>
          <div>
            <label htmlFor="full_desc" className="block text-sm font-medium text-gray-700">Full - Description</label>
            <textarea 
              id="full_desc" 
              name="full_desc" 
              rows="6" 
              value={formData.full_desc} 
              onChange={handleChange} 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
              required 
            />
          </div>
          <div>
            <label htmlFor="imageLink" className="block text-sm font-medium text-gray-700">Image Link</label>
            <input 
              type="url" 
              id="imageLink" 
              name="imageLink" 
              value={formData.imageLink} 
              onChange={handleChange} 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
              required 
            />
          </div>
          <div className="text-center">
            <button type="submit" className="mt-4 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddMovie;
