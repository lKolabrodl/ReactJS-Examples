import React, { createContext, useReducer } from "react";
import reducer from "./reducer";

const initialState = {
  transaction: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

//создаем контекст
export const Context = createContext(initialState);

//создаем провайдер

export const ContextProvider = ({ children }) => {
  //создаем фу-ию редюсер в провайдере
  //так же создаем отдельно AppReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  //мои actions
  function deleteItem(id) {
    dispatch({
      type: "DELETE_ITEM",
      payload: id,
    });
  }
  function addItem(transaction) {
    dispatch({
      type: "ADD_ITEM",
      payload: transaction,
    });
  }

  return (
    //передаем стейт редьюсера.
    <Context.Provider
      value={{ transaction: state.transaction, deleteItem, addItem }}
    >
      {children}
    </Context.Provider>
  );
};
