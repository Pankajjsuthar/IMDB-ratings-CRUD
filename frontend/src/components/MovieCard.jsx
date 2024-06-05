import React from "react";

const MovieCard = ({ movieName, description, imageLink, onClick }) => {
  return (
    <div
      className="flex flex-col md:flex-row cursor-pointer"
      onClick={onClick}
    >
      <div className="md:w-1/3 md:pr-1 flex flex-col justify-center">
        <div className="text-xl font-normal mb-2 text-center">{movieName}</div>
        <div className="flex justify-center">
          <img
            src={imageLink}
            alt="Movie Image"
            className="w-1/3"
          />
        </div>
      </div>
      <div className="md:w-3/5 md:pl-4">
        <div className="bg-gray-200 p-5 rounded-md">{description}</div>
      </div>
    </div>
  );
};

export default MovieCard;
