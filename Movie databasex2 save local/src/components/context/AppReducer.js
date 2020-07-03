export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCH_LIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_MOVIE_TO_WATCH_LIST":
      return {
        ...state,
        watchlist: state.watchlist.filter((item) => item.id !== action.payload),
      };
    case "ADD_MOVIE_TO_WATCHED_LIST":
      //удаляем из списка
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (item) => item.id !== action.payload.id
        ),
        watched: [action.payload, ...state.watched],
      };

    case "MOVE_TO_WATCH_LIST":
      //удаляем из списка
      return {
        ...state,
        watched: state.watched.filter((item) => item.id !== action.payload.id),
        watchlist: [action.payload, ...state.watchlist],
      };

    case "REMOVE_TO_WATCHED":
      return {
        ...state,
        watched: state.watched.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};
