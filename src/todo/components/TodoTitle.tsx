import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { Todo } from '../interfaces/todoInterfaces';

export const TodoTitle = () => {    
const { todos } = useContext(TodoContext);
return (
    <h1>
      TODO - <small>Total: {todos.length} / Pending: { todos.filter((todo: Todo) => !todo.completed).length } / Completed: { todos.filter((todo: Todo) => todo.completed).length }</small>
    </h1>
  );
};
