import { useTodoContext } from "../hooks/useTodoContext";
import { Todo } from "../interfaces/todoInterfaces";

interface props {
  todo: Todo;
}
export const TodoItem = ({ todo }: props) => {

  const { toggleTodo, deleteTodo } = useTodoContext();

  return (
    <li>      
      <label style={{ textDecoration: todo.completed ? 'line-through' : '' }}>          
        <input type="checkbox" checked={ todo.completed } onChange={() => toggleTodo(todo.id as number)} />
        {todo.title}

        <button
          type="button"
          style={{
            marginLeft: "10px",
          }}
          onClick={ () => deleteTodo( todo.id as number) }
        >
          Delete
        </button>
      </label>
    </li>
  );
};
