import React from "react";
import "./App.css";
import Movies from "./components/Movies.jsx";
import Nav from "./components/Navbar.jsx";
import Home from "./components/Homepage.jsx"
import Footer from "./components/Footer.jsx";
import ChosenMovie from "./components/ChosenMovie.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//https://www.omdbapi.com/?apikey=aca2f055&s=${movieTitle}&type=movie&y=?
function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="movies" element={<Movies></Movies>}></Route>
          <Route path="/movies/:id"element={<ChosenMovie></ChosenMovie>}></Route>
        </Routes>
        
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
