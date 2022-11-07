import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
     async function searchMovie(){
        const movieTitle = document.getElementById("home__input").value
        const { data } = await axios.get(`https://www.omdbapi.com/?apikey=aca2f055&s=${movieTitle}&type=movie&y=?`)
        localStorage.setItem("Title", movieTitle)
        data.Search ? navigate("movies") : alert("No movies found")
    }
  return ( 
    <>
      <div className="home__wrapper">
        <h1 className="home__intro"><span className="intro"><span className="purple">
            EXPLORE</span> MOVIES HERE!!</span><br></br> Its <span className="purple">free</span> and always will be</h1>
        <div className="searchbar__wrapper">
          <input type="text" name="" className="home__searchbar" id="home__input" />
          <button onClick={searchMovie} className="home__searchButton">Search</button>
        </div>
      </div>
    </>
  );
};

export default Home;
