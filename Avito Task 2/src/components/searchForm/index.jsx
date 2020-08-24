import React, { useState } from "react";
import axios from "axios";

const SearchForm = () => {
  const [form, setForm] = useState("");

  const handleSubmit = () => {
    axios
      .get(`https://api.github.com/search/repositories?q=${form}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <fieldset>
        <input
          value={form}
          onChange={(e) => setForm(e.target.value)}
          type="text"
          placeholder="найти репозиторий"
        />
      </fieldset>
      <fieldset>
        <button>Найти</button>
      </fieldset>
    </form>
  );
};

export default SearchForm;
