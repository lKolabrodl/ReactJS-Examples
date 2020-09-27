import React from "react";
import styles from "./TodoListItem.module.scss";

interface TodoLostItemProps {
  todo: Todo;
  toggleTodo: ToggleToDo;
}

const TodoListItem: React.FC<TodoLostItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label className={todo.complete ? styles.complete : undefined}>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleTodo(todo)}
        />
        {todo.text}
      </label>
    </li>
  );
};

export default TodoListItem;
