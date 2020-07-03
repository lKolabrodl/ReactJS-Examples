import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ResultCard = ({ movie }) => {
  //useglobalcontext
  const {
    addMovieToWatchList,
    addMovieToWatched,
    watchlist,
    watched,
  } = useContext(GlobalContext);
  //btn disable button id === id
  let storedMovie = watchlist.find((item) => item.id === movie.id);
  let storedMovieWatched = watched.find((item) => item.id === movie.id);

  const watchListDissableButton = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;
  const watchedDissableButton = storedMovieWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filter-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-day">
            {movie.release_date ? movie.release_date.substring(0, 4) : null}
            {movie.release_date ? movie.release_date.substring(0, 4) : `-`}
          </h4>
        </div>
        <div className="controls">
          <button
            disabled={watchListDissableButton}
            className="btn"
            onClick={() => {
              addMovieToWatchList(movie);
            }}
          >
            Добавить в список
          </button>

          <button
            disabled={watchedDissableButton}
            className="btn"
            onClick={() => {
              addMovieToWatched(movie);
            }}
          >
            В просмотренные
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
