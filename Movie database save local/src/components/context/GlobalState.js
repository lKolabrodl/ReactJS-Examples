import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

//initial state

const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

//create context

export const GlobalContext = createContext(initialState);

//provider components

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  //actions

  const addMovieToWatchList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCH_LIST", payload: movie });
  };

  const removeMovieToWatchList = (id) => {
    dispatch({ type: "REMOVE_MOVIE_TO_WATCH_LIST", payload: id });
  };

  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED_LIST", payload: movie });
  };

  const movieToWatchList = (movie) => {
    dispatch({ type: "MOVE_TO_WATCH_LIST", payload: movie });
  };
  const removeToWatched = (id) => {
    dispatch({ type: "REMOVE_TO_WATCHED", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchList: addMovieToWatchList,
        removeMovieToWatchList: removeMovieToWatchList,
        addMovieToWatched: addMovieToWatched,
        movieToWatchList: movieToWatchList,
        removeToWatched: removeToWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
