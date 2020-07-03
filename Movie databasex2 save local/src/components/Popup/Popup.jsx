import React from "react";

const Popup = ({ movie }) => {
  return (
    <div className="popup">
      <div className="content">
        <div className="img-popup">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={`${movie.title} Poster`}
            />
          ) : (
            <div className="filter-poster"></div>
          )}
        </div>
        <div className="text-popup">
          <ul>
            <li>
              Название: <span>{movie.title}</span>
              <br />
              <small>{movie.original_title}</small>
            </li>

            <li>
              Средняя оценка: <span>{movie.vote_average}</span>
            </li>
            <li>
              Выход: <span>{movie.release_date.replace(/-/g, ".")}</span>
            </li>
            <li>
              Оригенальный язык:
              <span>{movie.original_language.toUpperCase()}</span>
            </li>
            <li>
              Описание:
              <span>{movie.overview}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Popup;
