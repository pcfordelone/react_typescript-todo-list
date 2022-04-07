import { MouseEvent, useReducer } from "react";
import { Todo, TodoState } from "../interfaces/todoInterfaces";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "./todoReducer";

interface props {
  children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: TodoState = {
  todoCount: 0,
  todos: [
    {
      id: 1,
      title: "Todo 01",
      completed: true,
    },
    {
      id: 2,
      title: "Todo 02",
      completed: false,
    },
  ],
  completed: 0,
  pending: 0,
  errors: []
};

/**
 * Cria e Exporta Provider de Context.
 * Define propriedades obrigatórias e retorna Provider
 */
export const TodoProvider = ({ children }: props) => {
  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);  

  // Define ação chamada do Reducer
  const addTodo = (todoText: string, e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const todo: Todo = {
      id: Math.floor(Date.now() * Math.random()),
      title: todoText,
      completed: false,
    };

    dispatch({ type: "addTodo", payload: todo });
  };

  // Define ação chamada do Reducer
  const toggleTodo = (id: number) => {
    dispatch({ type: "toggleTodo", payload: { id } });
  };

  // Define ação chamada do Reducer
  const deleteTodo = (id: number) => {
    dispatch({ type: "deleteTodo", payload: { id } });
  };

  // Retorna Provider e suas possíveis propriedades e ações
  return (
    <TodoContext.Provider
      value={{ todoState, addTodo, toggleTodo, deleteTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
