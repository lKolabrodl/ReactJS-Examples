import React, { useContext } from "react";
import { Context } from "../context/context";

const Balance = () => {
  const { transaction } = useContext(Context);

  const amounts = transaction
    .map((item) => item.amount)
    .reduce(function (sum, current) {
      return sum + current;
    }, 0);

  return (
    <>
      <h4>Your balance</h4>
      <h1>{amounts}$</h1>
    </>
  );
};

export default Balance;
