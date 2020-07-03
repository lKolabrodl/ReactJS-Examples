import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "../MovieCard/MovieCard";

const WatchList = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Мой список</h1>
        </div>
        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((item, i) => (
              <MovieCard key={i} movie={item} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">Нет фильмов в списке</h2>
        )}
      </div>
    </div>
  );
};

export default WatchList;
