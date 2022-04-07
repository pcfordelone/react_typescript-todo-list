import { useCallback, useState } from "react";
import { Todo } from "../interfaces/todoInterfaces";
import { TodosService } from "../services/TodoApiService";
import { TodoContext } from "./TodoContext";

interface props {
  children: JSX.Element | JSX.Element[];
}

/**
 * Cria e Exporta Provider de Context.
 * Define propriedades obrigatórias e retorna Provider
 */
export const TodoProvider = ({ children }: props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const all = useCallback(async () => {
    const { status, data } = await TodosService.all();

    if (status !== 200) throw new Error();

    setTodos(data);
  }, []);

  const store = useCallback(  
    async (todo: Pick<Todo, "title" | "completed" | "id">) => {

      const { status } = await TodosService.store(todo);

      if (status !== 201) throw new Error();

      return todo;
    },
    []
  );

  const update = useCallback(async (todo: Todo, id: number) => {
    const { status } = await TodosService.update(todo, id);

    if (status !== 200) throw new Error();

    return todo;
  }, []);

  const destroy = useCallback(async (id: number) => {
    const { status } = await TodosService.destroy(id);

    if (status !== 200) throw new Error();

    return status;
  }, []);

  // Retorna Provider e suas possíveis propriedades e ações
  return (
    <TodoContext.Provider value={{ todos, all, store, destroy, update }}>
      {children}
    </TodoContext.Provider>
  );
};
