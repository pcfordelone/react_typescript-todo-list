import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { useEffect, useState } from "react";
import { Todo } from "./interfaces/ITodo";
import { TodosService } from "../services/api/todos/TodosService";
import { ApiErrorException } from "../services/api/ApiErrorException";

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    TodosService.all().then((result) => {
      result instanceof ApiErrorException
        ? console.log(result.message)
        : setTodos(result);
    });
  }, []);

  const addTodo = (value: string) => {
    if (value.trim().length === 0) {
      console.log("valor vazio");
      return;
    }

    if (todos.some((todo: Todo) => todo.todoText === value)) {
      console.log("valor repetido");
      return todos;
    }

    const todo: Todo = { todoText: value, isDone: false };

    TodosService.store(todo).then((result) => {
      result instanceof ApiErrorException
        ? console.log(result.message)
        : setTodos([...todos, result]);
    });
  };

  type SelectedItem = (selectedItem: Todo) => void;

  const handleDelete = (selectedItem: Todo) => {
    TodosService.destroy(selectedItem.id as number).then((result) => {
      result instanceof ApiErrorException
        ? console.log(result.message)
        : setTodos(updatedTodoList);
    });

    const updatedTodoList: Todo[] = todos.filter(
      (todoItem) => selectedItem.id !== todoItem.id
    );
  };

  const toggleTodo: SelectedItem = (selectedItem: Todo) => {
    const todo: Todo | undefined = todos.find(
      (todo: Todo) => todo.id === selectedItem.id
    );

    if (!todo) return;

    const newTodo: Todo = {
      ...todo,
      isDone: !todo.isDone,
    };

    TodosService.update(selectedItem.id as number, newTodo).then((result) => {
      result instanceof ApiErrorException
        ? console.log(result.message)
        : setTodos(updatedTodosList);
    });

    const updatedTodosList: Todo[] = todos.map((todo: Todo) => {
      if (todo === selectedItem) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      }
      return todo;
    });
  };

  console.log(todos);

  return (
    <div className="App">
      <h1>Todo List Project</h1>
      <TodoForm addTodo={addTodo} />
      <hr />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        handleDelete={handleDelete}
      />
    </div>
  );
};
