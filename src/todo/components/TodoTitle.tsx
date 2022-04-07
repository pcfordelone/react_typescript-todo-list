import { useTodoContext } from "../hooks/useTodoContext";

export const TodoTitle = () => {

    const { states } = useTodoContext();

return (
    <h1>
      TODO - <small>Total: {states.todoCount} / Pending: {states.todoPending} / Completed: {states.todoCompleted}</small>
    </h1>
  );
};
