import React, { useState, useEffect } from "react";

import "./Filter.scss";

const Filter = ({ sortTickets }) => {
  const [filterItem, setFilterItem] = useState([
    { value: "Все", id: "all", check: true },
    { value: "Без пересадок", id: "none", check: true },
    { value: "1 пересадка", id: 1, check: true },
    { value: "2 пересадки", id: 2, check: true },
    { value: "3 пересадки", id: 3, check: true },
  ]);

  const checkCheckBox = (id, check) => {
    ///включаем или выключаем все чекбоксы
    if (id === "all") {
      if (!check) {
        const newArr = filterItem.map((item) => ({
          ...item,
          check: true,
        }));
        setFilterItem(newArr);
      } else {
        const newArr = filterItem.map((item) => ({
          ...item,
          check: false,
        }));
        setFilterItem(newArr);
      }
    } else {
      const index = filterItem.findIndex((elem) => elem.id === id);
      const bufferArr = filterItem[index];
      bufferArr.check = !filterItem[index].check;
      const before = filterItem.slice(0, index);
      const after = filterItem.slice(index + 1);
      const newArr = [...before, bufferArr, ...after];
      setFilterItem(newArr);
    }
  };

  useEffect(() => {
    sortTickets(filterItem);
  }, [filterItem]);

  return (
    <div className="filter__tickets">
      <h5>Количество пересадок</h5>
      <ul>
        {filterItem.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                onChange={() => checkCheckBox(item.id, item.check)}
                checked={item.check}
              />
              <span>{item.value}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
