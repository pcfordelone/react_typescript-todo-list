import { useContext, useEffect } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { Todo } from "../interfaces/todoInterfaces";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const { all, todos} = useContext(TodoContext);

  useEffect(() => {
    all();    
  }, [all]);

  return (
    <ul>
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id as number} todo={todo} />
      ))}
    </ul>
  );
};
