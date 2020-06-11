export default (state, action) => {
  switch (action.type) {
    case "DELETE_ITEM":
      return {
        ...state,
        transaction: state.transaction.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_ITEM":
      return {
        ...state,
        transaction: [action.payload, ...state.transaction],
      };

    default:
      return state;
  }
};
