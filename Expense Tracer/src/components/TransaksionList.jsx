import React, { useContext } from "react";
import { Context } from "../context/context";
import TransaksionItem from "./TransaksionItem";

const TransaksionList = () => {
  const { transaction } = useContext(Context);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transaction.map((item) => (
          <TransaksionItem key={item.id} transaction={item} />
        ))}
      </ul>
    </>
  );
};

export default TransaksionList;
