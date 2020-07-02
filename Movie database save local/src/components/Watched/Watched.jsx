import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";
import MovieCard from "../MovieCard/MovieCard";

const Watched = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">watched movies</h1>
        </div>
        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((item, i) => (
              <MovieCard key={i} movie={item} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">Нет фильмов в списке</h2>
        )}
      </div>
    </div>
  );
};

export default Watched;
