type Todo = {
  text: string;
  complete: boolean;
};
type ToggleToDo = (selectedTodo: Todo) => void;
type AddToDo = (newTodo: string) => void;
