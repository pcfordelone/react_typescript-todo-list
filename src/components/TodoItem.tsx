import { PropsWithChildren } from "react";
import { Todo } from "./interfaces/ITodo";

interface Props {
  todo: Todo;
  toggleTodo: (todo: Todo) => void;
  handleDelete: (todo: Todo) => void;
}

export const TodoItem: React.FC<Props> = ({
  todo,
  toggleTodo,
  handleDelete
}: PropsWithChildren<Props>) => {
  return (
    <li>
      <label
        style={{ textDecoration: todo.isDone ? "line-through" : undefined }}
      >
        <input
          type="checkbox"
          checked={todo.isDone}
          value={todo.todoText}
          onChange={() => toggleTodo(todo)}
        />
        {todo.todoText}
        <button
          type="button"
          style={{
            marginLeft: "10px",
          }}
          onClick={() => handleDelete(todo)}
        >
          Delete
        </button>
      </label>
    </li>
  );
};
