import { Context, createContext, MouseEvent } from "react";
import { TodoState } from "../interfaces/todoInterfaces";

/**
 * Define as propriedades que poderão ser compartilhadas no Contexto
 * Define também o que será obrigatório ou não
 */  
interface TodoContextProps {
    todoState: TodoState,    
    addTodo: ( todoText: string, e: MouseEvent<HTMLButtonElement> ) => void,
    toggleTodo: ( id: number ) => void,
    deleteTodo: ( id: number ) => void,    
}

// Criação e exportação do Context com definição do tipo de propriedades que serão passadas
export const TodoContext: Context<TodoContextProps> =
  createContext<TodoContextProps>({} as TodoContextProps);
