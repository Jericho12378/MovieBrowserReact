import axios from "axios";
import { useEffect, useState } from "react";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  async function fetchMovies() {
    const { data } = await axios.get(
      "https://www.omdbapi.com/?apikey=aca2f055&s=fast&type=movie&y=?"
    );
    console.log(data.Search);
    setMovies(data.Search);
  }
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="movie__list--container">
      <div className="searchbar__wrapper">
        <div className="searchbar">
          <input type="text" className="input__field" />
          <button className="search__button">Search</button>
        </div>
        <p className="result">Search results:</p>
      </div>
      <div className="movie__lists--wrapper">
      {movies.map((element, index) => (
        <div className="movie__lists" key={index}>
          <div className="movie__list">
            <figure className="image__movie--wrapper">
              <img className="movie__image" src={element.Poster} alt="" />
            </figure>
          
          <div className="movie__data">
            <h4>{element.Title}</h4>
            <h4>{element.Year}</h4>
          </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};
export default Movies;
