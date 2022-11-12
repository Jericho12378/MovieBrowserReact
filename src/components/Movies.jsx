import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import WarningImage from "./images/no-file.png";
import { useNavigate } from "react-router-dom";
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const movieTitle__fromHome = localStorage.getItem("Title");
  const [currentValue, setValue] = useState();
  const [loading, setLoading] = useState(true);
  const [movieExist, setMovieState] = useState(true);
  const navigate = useNavigate()
  
  useEffect(() => {
    fetchMovies();
  }, []);

  async function searchMovie() {
    setLoading(true);
    const movieTitle = document.getElementById("movies__searchBar").value;
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=aca2f055&s=${movieTitle}&type=movie&y=?`
    );
    console.log(data)
    
    if(data.Response == "True"){   
      setMovies(data.Search);
      setLoading(false);
      setMovieState(true);
      console.log("true")
    }else{
      setMovieState(false);
      console.log("false")
    }
  }
  async function fetchMovies() {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=aca2f055&s=${
        movieTitle__fromHome || "fast"
      }&type=movie&y=?`
    );
    
    if(data.Response == "True"){
      setMovies(data.Search);
      setLoading(false);
      setMovieState(true);
      setMovieState(true);
      localStorage.removeItem("Title");
      console.log(data.Search)
    }else{
      setMovieState(false);
    }
    
  }
  

  const filterBooks = () => {
    let sortValue = document.getElementById("filter").value;
    setValue(sortValue);
  };

  return (
    <div className="movie__list--container">
      <div className="searchbar__wrapper">
        <div className="searchbar">
          <input
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                document.getElementById("movies__button").click();
              }
            }}
            type="text"
            className="input__field"
            id="movies__searchBar"
          />
          <button
            className="search__button"
            id="movies__button"
            onClick={searchMovie}
          >
            Search
          </button>
        </div>
        <p className="result">Search results:</p>
        <select id="filter" onChange={filterBooks} defaultValue={"sort"}>
          <option disabled value="sort">
            Sort
          </option>
          <option value="YearAscending">YearAscending</option>
          <option value="YearDescending">YearDescending</option>
        </select>
      </div>
      <div className="movie__lists">
        {movieExist ? (
          loading ? (
            new Array(10).fill(0).map((_, index) => (
              <div className="movie__list" key={index}>
                <figure className="image__movie--wrapper">
                  <div className=" movie__image--skeleton"></div>
                </figure>
                <div className="movie__data">
                  <p className="movie__data--skeleton"></p>
                  <p className="movie__data--skeleton"></p>
                </div>
              </div>
            ))
          ) : currentValue == "YearAscending" ? (
           
            movies
              .sort((a, b) => a.Year - b.Year)
              .map((element, index) => (
                <div className="movie__list" key={index}>
                  <figure className="image__movie--wrapper">
                    <img className="movie__image" src={element.Poster}  onClick={() => navigate(`${element.imdbID}`)} alt="" />
                  </figure>
                  <div className="movie__data">
                    <h4>{element.Title}</h4>
                    <h4>{element.Year}</h4>
                  </div>
                </div>
              ))
              
          ) : (
            movies
              .sort((a, b) => b.Year - a.Year)
              .map((element, index) => (
                <div className="movie__list" key={index}>
                  <figure className="image__movie--wrapper">
                    <img className="movie__image" src={element.Poster} onClick={() => navigate(`${element.imdbID}`)} alt="" />
                  </figure>
                  <div className="movie__data">
                    <h4>{element.Title}</h4>
                    <h4>{element.Year}</h4>
                  </div>
                </div>
              ))
          )
        ) : (
          <div className="movieNull">
            <div className="warning__wrapper">
              <img src={WarningImage} alt="" />
              <h4>Movie not Found</h4>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Movies;
