import { useTodoContext } from "../hooks/useTodoContext";
import { Todo } from "../interfaces/todoInterfaces";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const { todos } = useTodoContext();

  console.log(todos);
  
  return (
    <ul>
      {todos.map((todo: Todo) => (
        <TodoItem key={ todo.id as number} todo={ todo } />
      ))}
    </ul>
  );
};
