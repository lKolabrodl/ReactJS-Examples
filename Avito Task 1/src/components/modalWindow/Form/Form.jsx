import React, { useState } from "react";
import "./form.scss";
import api from "../../../services/api";

const Form = ({ id }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  console.log(id);

  const onSubmitComments = (e) => {
    e.preventDefault();
    if (name === "" || comment === "") {
      return;
    }

    alert(
      `Данные на оправку id картинки: ${id}, имя:${name}, комментарий: ${comment}. Форма валидации не имеет`
    );
    api.sendPhotosComment(name, comment, id);
  };

  return (
    <form onSubmit={onSubmitComments}>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Ваше имя"
      />
      <input
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
        placeholder="Ваш комментарий"
      />
      <button type="submit">Отправить</button>
    </form>
  );
};

export default Form;
