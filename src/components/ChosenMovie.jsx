import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
//https://www.omdbapi.com/?apikey=aca2f055&i=${data.id}
const ChosenMovie = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    fetchMovie();
  }, []);

  async function fetchMovie() {
   
    const data = await axios.get(
      `https://www.omdbapi.com/?apikey=aca2f055&i=${id}`
    );
    setLoading(true)
    setMovieData(data.data);
   
  }
  return (
    <div className="chosenMovie">
      <div className="chosenMovie__wrapper">
        {loading ?
        (
        new Array(movieData.length).fill(movieData).map((element, index) => (
          <div className="specifiedMovie" key={index}>
            <div className="chosenMovie__image">
              <img className="image" src={element.Poster} alt="" />
            </div>
            <div className="data">
                <h3 className="title">{element.Title}</h3>
                <p className="release__data">{element.Released}</p>
                <p className="plot">{element.Plot}</p>
                <p className="actors">Actors: {element.Actors}</p>
            </div>
          </div>
        )))
        :
        (<div className="specifiedMovie">
            <div className="chosenMovie__image">
              <img className="movie__image--skeleton" alt="" />
            </div>
            <div className="data">
                <h3 className="title"></h3>
                <p className="movie__data--skeleton"></p>
                <p className="movie__data--skeleton"></p>
                <p className="movie__data--skeleton"></p>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};
export default ChosenMovie;
