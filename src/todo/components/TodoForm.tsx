import { useTodoContext } from "../hooks/useTodoContext";
import { ChangeEvent, MouseEvent, useState } from "react";
import { Error } from '../interfaces/todoInterfaces';

export const TodoForm = () => {
  const { states, addTodo } = useTodoContext();
  const [text, setText] = useState("");

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
          onClick={(e: MouseEvent<HTMLButtonElement>) => addTodo(text, e)}
        >
          Adicionar Todo
        </button>
        <p style={{ color: "red" }}>{ states.errors.map(({ ...error }: Error, index: number ) => {
          return `${error.code} - ${error.description}`
        }) }</p>
      </form>
      <hr />
    </div>
  );
};
