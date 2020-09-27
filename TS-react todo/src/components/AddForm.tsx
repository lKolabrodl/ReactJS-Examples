import React, { ChangeEvent, FormEvent, useState } from "react";

interface AddFormProps {
  addTodo: AddToDo;
}

const AddForm: React.FC<AddFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button type="submit"> Add ToDo</button>
    </form>
  );
};

export default AddForm;
