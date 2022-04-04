import { MouseEvent, useState, PropsWithChildren } from 'react';

interface Props {
    addTodo: (value: string) => void;
}

export const TodoForm: React.FC<Props> = ({ addTodo }: PropsWithChildren<Props>) => {
  const [todoText, setTodoText] = useState<string>("");

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addTodo(todoText);
  }

  return (
    <form>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="What Todo???"
      />
      <button type="submit" onClick={handleSubmit}>Add Todo</button>
    </form>
  );
};
