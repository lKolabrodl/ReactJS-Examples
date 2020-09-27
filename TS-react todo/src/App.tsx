import React, { useState } from "react";
import AddForm from "./components/AddForm";
import TodoList from "./components/TodoList";

const initialState: Array<Todo> = [
  { text: "popa", complete: false },
  { text: "pipa", complete: true },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialState);

  const toggleTodo: ToggleToDo = (selectedTodo) => {
    const newtodos = todos.map((todo: any) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newtodos);
  };

  const addTodo: AddToDo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddForm addTodo={addTodo} />
    </>
  );
};

export default App;
