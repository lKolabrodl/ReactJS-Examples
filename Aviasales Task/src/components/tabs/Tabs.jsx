import React, { useState, useEffect } from "react";
import "./Tabs.scss";

const Tabs = ({ fastOrLowTabs }) => {
  const [price, setPrice] = useState("low prices");
  const paramTabs = [
    { value: "Самый дешевый", id: "low prices" },
    { value: "Самый быстрый", id: "fast" },
  ];

  //переключалка
  const checkTabs = (id) => {
    if (price === id) {
      return;
    }
    setPrice(id);
  };

  //чтобы первый раз передало цену

  //сортировочка
  useEffect(() => {
    fastOrLowTabs(price);
  }, [price]);

  return (
    <div className="tabs">
      {paramTabs.map((tab) => (
        <button
          className={price === tab.id ? "tabs active" : "tabs"}
          key={tab.id}
          onClick={() => checkTabs(tab.id)}
        >
          {tab.value}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
