import { Todo } from './interfaces/ITodo';
import { PropsWithChildren } from "react";
import { TodoItem } from "./TodoItem";

interface Props {
  todos: Todo[];
  toggleTodo: (todo: Todo) => void;
}

export const TodoList: React.FC<Props> = ({
  todos, toggleTodo
}: PropsWithChildren<Props>) => {
  return (
    <ul>
      {todos.map((todo: Todo, key: number) => {
        return <TodoItem key={key} todo={todo} toggleTodo={toggleTodo} />;
      })}
    </ul>
  );
};
