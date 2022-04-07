import { ApiConfig } from "../../providers";
import { Todo } from "../interfaces/todoInterfaces";

const all = () => ApiConfig.get<Todo[]>('/todos')

const find = (id: number) => ApiConfig.get(`/todos/${id}`);

const store = (todo: Todo) => ApiConfig.post('/todos', todo);

const update = (todo: Todo, id: number) => ApiConfig.put(`/todos/${id}`, todo);

const destroy = (id: number) => ApiConfig.delete(`/todos/${id}`);

export const TodosService = {
  all,
  find,
  store,
  update,
  destroy
};
