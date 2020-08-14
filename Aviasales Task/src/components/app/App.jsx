import React, { useEffect, useState } from "react";
import "./App.scss";
import Logo from "../logo/Logo";

import Filter from "../filter/Filter";
import Tabs from "../tabs/Tabs";
import ListTickets from "../ListTickets/ListTickets";
import ErrorMsg from "../error/ErrorMsg";

const App = () => {
  const [tickets, setTickets] = useState([]); //главный массив
  const [bufferTickets, setBufferTickets] = useState([]); //вывожу этот
  const [tabs, seTabs] = useState("low prices");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!tickets) {
      return;
    }
    fetch("https://front-test.beta.aviasales.ru/search")
      .then((res) => res.json())
      .then(({ searchId }) =>
        fetch(
          `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`
        )
      )
      .then((res) => res.json())
      .then(({ tickets }) => {
        //сразк сортирую
        setTickets(
          tickets.slice(0, 8).sort((a, b) => (a.price > b.price ? 1 : -1))
        );

        setBufferTickets(
          tickets.slice(0, 8).sort((a, b) => (a.price > b.price ? 1 : -1))
        );
      })
      .catch((err) => setError(true));
  }, []);

  //сортировка под табы
  const fastOrLowTabs = (arg) => {
    if (arg === "low prices") {
      let myArr = bufferTickets;
      myArr.sort((a, b) => (a.price > b.price ? 1 : -1));
      setBufferTickets(myArr);
      seTabs(arg);
    }
    if (arg === "fast") {
      let myArr = [...bufferTickets].sort((a, b) => {
        let first = a.segments.reduce((acc, i) => i.duration + acc, 0);
        let second = b.segments.reduce((acc, i) => i.duration + acc, 0);

        if (first > second) {
          return 1;
        } else if (first < second) {
          return -1;
        } else {
          return 0;
        }
      });
      setBufferTickets(myArr);
      seTabs(arg);
    }
  };

  const sortTickets = (array) => {
    if (!array) {
      return;
    }
    const index = array.filter((el) => el.check === true);
    const newArr = [];

    index.forEach((item) => {
      if (item.id === "all") {
        // кладем родной масссив и делаем сортировку
        newArr.push(...tickets);
        return;
      }
      if (item.id === "none") {
        const sortArr = tickets.filter((item) => {
          return item.segments.some((i) => i.stops.length === 0);
        });
        newArr.push(...sortArr);
      }
      if (item.id === 1) {
        const sortArr = tickets.filter((item) => {
          return item.segments.some((i) => i.stops.length === 1);
        });
        newArr.push(...sortArr);
      }
      if (item.id === 2) {
        const sortArr = tickets.filter((item) => {
          return item.segments.some((i) => i.stops.length === 2);
        });
        newArr.push(...sortArr);
      }
      if (item.id === 3) {
        const sortArr = tickets.filter((item) => {
          return item.segments.some((i) => i.stops.length === 3);
        });
        newArr.push(...sortArr);
      }
    });
    setBufferTickets(newArr);
  };

  return (
    <div className="main__container">
      <div className="logo">
        <Logo />
      </div>
      <React.StrictMode>
        <div className="content">
          <div className="left">
            <Filter sortTickets={sortTickets} />
          </div>
          <div className="right">
            <Tabs fastOrLowTabs={fastOrLowTabs} />
            <ListTickets tickets={bufferTickets} />
            {error && <ErrorMsg />}
          </div>
        </div>
      </React.StrictMode>
    </div>
  );
};

export default App;
