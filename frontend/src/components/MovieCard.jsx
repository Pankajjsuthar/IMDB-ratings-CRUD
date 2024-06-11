import React from "react";

const MovieCard = ({ movieName, description, imageLink, onClick }) => {
  return (
    <div className="flex flex-col md:flex-row cursor-pointer" onClick={onClick}>
      <div className="md:w-4/12 md:pr-1 flex flex-col justify-center">
        <div className="flex justify-center pr-2">
          <div className="border-4 border-gray-300 w-48 h-48 flex justify-center items-center">
            <img
              src={imageLink}
              alt="Movie Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="md:w-7/12 md:pl-1">
        <div className="text-l font-normal font-semibold mb-2">{movieName}</div>
        <div className="bg-gray-200 p-5 rounded-md">{description}</div>
      </div>
    </div>
  );
};

export default MovieCard;
