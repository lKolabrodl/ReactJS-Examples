import React, { useState, useEffect } from "react";
import MovieConrols from "../MovieConrols/MovieConrols";
import Popup from "../Popup/Popup";

const MovieCard = ({ movie, type }) => {
  const [open, setOpen] = useState(false);

  const wrapperRef = React.createRef();

  const OpenPopup = () => {
    setOpen(!open);
  };

  useEffect(() => {
    window.onclick = function (e) {
      if (!wrapperRef.current) {
        return;
      }
      window.addEventListener(
        "keydown",
        function (e) {
          if (e.keyCode == 27) {
            setOpen(false);
          }
        },
        true
      );

      if (e.target !== wrapperRef.current) {
        setOpen(false);
      }
    };
  }, [wrapperRef]);

  return (
    <>
      <div
        className="movie-card"
        ref={wrapperRef}
        onClick={() => {
          OpenPopup();
        }}
      >
        <div className="overlay"></div>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filter-poster"></div>
        )}

        <MovieConrols type={type} movie={movie} />
      </div>
      {open ? <Popup movie={movie} /> : null}
    </>
  );
};

export default MovieCard;
