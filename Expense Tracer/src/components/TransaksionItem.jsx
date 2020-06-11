import React, { useContext } from "react";
import { Context } from "../context/context";

function TransaksionItem({ transaction }) {
  const { deleteItem } = useContext(Context);

  const sign = transaction.amount > 0 ? "+" : "-";
  const clasStyle = transaction.amount > 0 ? "plus" : "minus";
  const amout = Math.abs(transaction.amount);

  return (
    <div>
      <li className={clasStyle}>
        {transaction.text}
        <span>
          {sign}
          {amout}$
        </span>
        <button
          onClick={() => {
            deleteItem(transaction.id);
          }}
          className="delete-btn"
        >
          x
        </button>
      </li>
    </div>
  );
}

export default TransaksionItem;
