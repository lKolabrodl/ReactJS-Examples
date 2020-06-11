import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpensess from "./components/IncomeExpensess";
import TransaksionList from "./components/TransaksionList";
import AddTransaction from "./components/AddTransaction";
import { ContextProvider } from "./context/context";

const App = () => {
  return (
    <ContextProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpensess />
        <TransaksionList />
        <AddTransaction />
      </div>
    </ContextProvider>
  );
};
export default App;
