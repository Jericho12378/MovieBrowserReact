import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
     async function searchMovie(){
        const movieTitle = document.getElementById("home__input").value
        //const { data } = await axios.get(`https://www.omdbapi.com/?apikey=aca2f055&s=${movieTitle}&type=movie&y=?`)
        localStorage.setItem("Title", movieTitle)
       // data.Search ? navigate("movies") : alert("No movies found")
       navigate("movies")
    }
  return ( 
    <>
      <div className="home__wrapper" id="main">
        <h1 className="home__intro"><span className="intro"><span className="purple">
            EXPLORE</span> MOVIES HERE!!</span><br></br> Its free and <span className="purple">always </span> will be</h1>
        <div className="searchbar__wrapper">
          <input
           onKeyPress={(e) => {
            if(e.key === "Enter"){
                document.getElementById("enterButt").click()
            }
        }} type="text" name="" className="home__searchbar" id="home__input" />
          <button onClick={searchMovie} className="home__searchButton" id="enterButt">Search</button>
        </div>
      </div>
    </>
  );
};

export default Home;
