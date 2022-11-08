import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const movieTitle = localStorage.getItem("Title");
  const [currentValue, setValue] = useState()
  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies() {
  
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=aca2f055&s=${
        movieTitle || "fast"
      }&type=movie&y=?`
    );
    setMovies(data.Search);
    localStorage.removeItem("Title");
  }
 
  
  const filterBooks =(event) =>{
    let sortValue = document.getElementById("filter").value
    // console.log(sortValue)
    // if(event.target.value == "YearAscending"){
    //   console.log("a")
    //   setMovies(movies.sort((a,b) => a.Year - b.Year))
    // }else if (event.target.value == "YearDescending"){
    //  setMovies(movies.sort((a,b) => b.Year - a.Year))
    // }
    // console.log(sortValue)
  }
 
  
  return (
    <div className="movie__list--container">
      <div className="searchbar__wrapper">
        <div className="searchbar">
          <input type="text" className="input__field" />
          <button className="search__button">Search</button>
        </div>
        <p className="result">Search results:</p>
        <select name="" id="filter" onChange={filterBooks}>
          <option disabled value="">Sort</option>
          <option value="YearAscending">YearAscending</option>
          <option value="YearDescending">YearDescending</option>
        </select>
      </div>
      <div className="movie__lists">
        {movies.map((element, index) => (
          <div className="movie__list" key={index}>
            <figure className="image__movie--wrapper">
              <img className="movie__image" src={element.Poster} alt="" />
            </figure>
            <div className="movie__data">
              <h4>{element.Title}</h4>
              <h4>{element.Year}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Movies;
