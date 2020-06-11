import React, { useContext } from "react";
import { Context } from "../context/context";

const IncomeExpensess = () => {
  const { transaction } = useContext(Context);

  const amounts = transaction.map((item) => item.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce(function (sum, current) {
      return sum + current;
    }, 0);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce(function (sum, current) {
      return sum + current;
    }, 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+{income}$</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{expense}$</p>
      </div>
    </div>
  );
};

export default IncomeExpensess;
