import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { MouseEvent, useState } from "react";
import { Todo } from "./interfaces/ITodo";

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { todoText: "Todo 01", isDone: false },
    { todoText: "Todo 02", isDone: false },
    { todoText: "Todo 03", isDone: false },
  ]);

  const addTodo = (value: string) => {    
    
    if (value.trim().length === 0) {
      console.log("valor vazio");
      return;
    }

    if (todos.some((todo: Todo) => todo.todoText === value)) {
      console.log("valor repetido");
      return todos;
    }

    const todo: Todo = { todoText: value, isDone: false };
    setTodos([...todos, todo]);
  };

  type SelectedItems = (selectedItems: Todo) => void;

  const toggleTodo: SelectedItems = (selectedItem: Todo) => {
    console.log(selectedItem);

    const updatedItems: Todo[] = todos.map((listItem: Todo) => {
      if (listItem === selectedItem) {
        return {
          ...listItem,
          isDone: !listItem.isDone,
        };
      }
      return listItem;
    });
    setTodos(updatedItems);
  };

  console.log(todos);

  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      <hr />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
};
