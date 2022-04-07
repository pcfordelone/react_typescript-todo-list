import {
  ChangeEvent,
  MouseEvent,
  useCallback,
  useContext,
  useState,
} from "react";
import { TodoContext } from "../contexts/TodoContext";
import { Error, Todo } from "../interfaces/todoInterfaces";

export const TodoForm = () => {
  const [text, setText] = useState("");
  const { todos, store, all } = useContext(TodoContext);
  const [errors, setError] = useState<Error[]>([])

  const handleInput = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setError([]);
      
      if (text.trim().length === 0) {
        const error: Error = {
          code: 401,
          description: "Title is empty",
        };
        setError([error]);
        return;
      }
  
      if (todos.some((todo: Todo) => todo.title === text)) {
        const error: Error = {
          code: 401,
          description: "Title cannot be repeated",
        };
        setError([error]);
        return;
      }

      await store({
        title: text,
        completed: false,
        id: Math.floor(Date.now() * Math.random()),
      });
      await all();
    },
    [store, text, all, todos]
  );

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="What todo???"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
        />
        <button
          type="submit"
          onClick={(e: MouseEvent<HTMLButtonElement>) => handleInput(e)}
        >
          Adicionar Todo
        </button>
        <p style={{ color: "red" }}>
          {errors.map(({ ...error }: Error, index: number) => {
            return `${error.code} - ${error.description}`;
          })}
        </p>
      </form>
      <hr />
    </div>
  );
};
