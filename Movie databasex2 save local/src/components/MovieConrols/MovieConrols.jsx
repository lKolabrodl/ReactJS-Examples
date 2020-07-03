import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const MovieConrols = ({ movie, type }) => {
  const {
    removeMovieToWatchList,
    addMovieToWatched,
    movieToWatchList,
    removeToWatched,
  } = useContext(GlobalContext);

  const confirmation = () => {
    let del = window.confirm(`удалить фильм?`);
    if (del === true) {
      removeMovieToWatchList(movie.id);
    }
    return del;
  };
  const confirmationWatched = () => {
    let del = window.confirm(`добавить фильм в спиок просмотренных?`);
    if (del === true) {
      addMovieToWatched(movie);
    }
    return del;
  };

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => confirmationWatched()}>
            <i className="fa-fw far fa-eye"></i>
          </button>
          <button className="ctrl-btn" onClick={() => confirmation()}>
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => movieToWatchList(movie)}>
            <i className="fa-fw far fa-eye-slash"></i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeToWatched(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
};

export default MovieConrols;
