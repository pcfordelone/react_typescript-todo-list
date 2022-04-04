import { Todo } from '../../../components/interfaces/ITodo';
import { ApiConfig } from '../ApiConfig';
import { ApiErrorException } from '../ApiErrorException';

const all = async (): Promise<Todo[] | ApiErrorException> => {
  try {
    const { data } = await ApiConfig().get('/todos');
    return data;

  } catch(err: any) {
    return new ApiErrorException(err.message || 'API connection problems.')
  }
}

const find = async (id: number): Promise<Todo | ApiErrorException> => {
  try {
    const { data } = await ApiConfig().get(`/todos/${id}`);
    return data;

  } catch(err: any) {
    return new ApiErrorException(err.message || 'API connection problems.')
  }
}

const store = async (todo: Todo): Promise<Todo | ApiErrorException> => {
  try {
    const { data } = await ApiConfig().post('/todos', todo);
    return data;

  } catch(err: any) {
    return new ApiErrorException(err.message || 'API connection problems.')
  }
}
const update = async (id: number, todo: Todo): Promise<Todo | ApiErrorException> => {
  try {
    const { data } = await ApiConfig().put(`/todos/${id}`, todo);
    return data;

  } catch(err: any) {
    return new ApiErrorException(err.message || 'API connection problems.')
  }
}

const destroy = async (id: number): Promise<Todo | ApiErrorException> => {
  try {
    const { data } = await ApiConfig().delete(`/todos/${id}`);
    return data;

  } catch(err: any) {
    return new ApiErrorException(err.message || 'API connection problems.')
  }
}

export const TodosService = {
  all,
  find,
  store,
  update,
  destroy
}