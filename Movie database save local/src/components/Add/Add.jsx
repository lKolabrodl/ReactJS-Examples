import React, { useState } from "react";
import ResultCard from "../ResultCard/ResultCard";

const Add = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const onChangeInput = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    fetch(
      ` https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMBD_KEY}&language=ru-RU&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResult(data.results);
        } else {
          setResult([]);
        }
      });
  };
  console.log(result);

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Поиск фильмов"
              onChange={onChangeInput}
              value={search}
            />

            {result.length > 0 && (
              <div className="results">
                {result.map((item) => (
                  <li key={item.id}>
                    <ResultCard movie={item} />
                  </li>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
