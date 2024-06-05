import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Landing from "./screens/Landing";
import AddMovie from './screens/AddMovie';
import MovieDetail from './screens/Movie';
// import Movie from "./screens/Movie";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/addmovie" element={<AddMovie/>}></Route>
        <Route path="/movie/:_id" element={<MovieDetail />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
