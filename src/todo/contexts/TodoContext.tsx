import { Context, createContext } from "react";
import { Todo } from "../interfaces/todoInterfaces";

/**
 * Define as propriedades que poderão ser compartilhadas no Contexto
 * Define também o que será obrigatório ou não
 */  
interface TodoContextProps {
    todos: Todo[],
    all: () => void,
    store: (todo: Pick<Todo, 'title' | 'completed' | 'id'> ) => void,
    destroy: (id: number) => void,
    update: (todo: Todo, id: number) => void,            
}

// Criação e exportação do Context com definição do tipo de propriedades que serão passadas
export const TodoContext: Context<TodoContextProps> =
  createContext<TodoContextProps>({} as TodoContextProps);
