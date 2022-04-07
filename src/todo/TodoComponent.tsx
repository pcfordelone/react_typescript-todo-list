import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { TodoTitle } from "./components/TodoTitle";
import { TodoProvider } from "./contexts/TodoProvider";

export const TodoComponent: React.FC = () => {
  return (
    <TodoProvider>
      <TodoTitle />
      <TodoForm />
      <TodoList />
    </TodoProvider>
  );
};
