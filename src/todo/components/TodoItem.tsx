import { useCallback, useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { Todo } from "../interfaces/todoInterfaces";

interface props {
  todo: Todo;
}
export const TodoItem = ({ todo }: props) => {
  const { destroy, all, todos, update } = useContext(TodoContext);

  const handleDelete = useCallback(
    async (id: number) => {
      await destroy(id);
      await all();
    },
    [destroy, all]
  );

  const handleToggle = useCallback(async (id: number) => {
    const oldTodo = todos.find((oldTodo) => oldTodo.id === id) as Todo;
    oldTodo.completed = !oldTodo.completed;

    await update(oldTodo, id); 
    await all();

  }, [update, all, todos]);

  return (
    <li>
      <label style={{ textDecoration: todo.completed ? "line-through" : "" }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleToggle(todo.id as number)}
        />
        {todo.title}

        <button
          type="button"
          style={{
            marginLeft: "10px",
          }}
          onClick={() => handleDelete(todo.id as number)}
        >
          Delete
        </button>
      </label>
    </li>
  );
};
