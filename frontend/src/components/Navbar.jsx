import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-around items-center bg-white w-full shadow-md py-4 mb-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">IMDB HomePage</h2>
      </div>
      <div>
        <button
          onClick={() => {
            navigate("/addmovie");
          }}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md shadow-md transition-all duration-300"
        >
          Add New Movie
        </button>
      </div>
    </div>
  );
};

export default Navbar;
