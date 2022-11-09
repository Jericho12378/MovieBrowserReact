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

  async function searchMovie(){
    const movieTitle = document.getElementById("movies__searchBar").value
    const { data } = await axios.get(`https://www.omdbapi.com/?apikey=aca2f055&s=${movieTitle}&type=movie&y=?`)
    setMovies(data.Search)
    
}
  async function fetchMovies() {
  
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=aca2f055&s=${
        movieTitle || "fast"
      }&type=movie&y=?`
    );
    setMovies(data.Search);
    localStorage.removeItem("Title");
  }
 
  
  const filterBooks =() =>{
    let sortValue = document.getElementById("filter").value
    setValue(sortValue)
  }
  
  return (
    <div className="movie__list--container">
      <div className="searchbar__wrapper">
        <div className="searchbar">
          <input 
          onKeyPress={(e) => {
            if(e.key === "Enter"){
                document.getElementById("movies__button").click()
            }
        }} type="text" className="input__field" id="movies__searchBar"/>
          <button className="search__button" id="movies__button" onClick={searchMovie}>Search</button>
        </div>
        <p className="result">Search results:</p>
        <select id="filter" onChange={filterBooks} defaultValue={"sort"}>
          <option disabled value="sort" >Sort</option>
          <option value="YearAscending">YearAscending</option>
          <option value="YearDescending">YearDescending</option>
        </select>
      </div>
      <div className="movie__lists">
        {
        currentValue == "YearAscending" ?
          movies.sort((a, b) => (a.Year - b.Year))
          .map((element, index) => (
          <div className="movie__list" key={index}>
            <figure className="image__movie--wrapper">
              <img className="movie__image" src={element.Poster} alt="" />
            </figure>
            <div className="movie__data">
              <h4>{element.Title}</h4>
              <h4>{element.Year}</h4>
            </div>
          </div>
          ))
          :
          movies.sort((a, b) => (b.Year - a.Year))
          .map((element, index) => (
          <div className="movie__list" key={index}>
            <figure className="image__movie--wrapper">
              <img className="movie__image" src={element.Poster} alt="" />
            </figure>
            <div className="movie__data">
              <h4>{element.Title}</h4>
              <h4>{element.Year}</h4>
            </div>
          </div>
          ))
          }
      </div>
    </div>
  );
};
export default Movies;
