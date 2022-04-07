import { Error, Todo, TodoState } from "../interfaces/todoInterfaces";

type TodoAction =
  | { type: "addTodo"; payload: Todo }
  | { type: "toggleTodo"; payload: { id: number } }
  | { type: "deleteTodo"; payload: { id: number } };

export const todoReducer: React.Reducer<TodoState, TodoAction> = (
  state: TodoState,
  action: TodoAction
) => {

  const validadeTodo = (todoText: string) => {
    state.errors = [];
    
    if (todoText.trim().length === 0) {
      const error: Error = {
        code: 401,
        description: 'Title is empty'
      }
      return error;
    }

    if (state.todos.some((todo: Todo) => todo.title === todoText)) {
      const error: Error = {
        code: 401,
        description: 'Title is empty'
      }
      return error;
    }    

    return false;
  }

  switch (action.type) {
    case "addTodo":
      const validate = validadeTodo(action.payload.title);
      
      if(!validate) {
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
      }

      return {
        ...state,
        errors: [...state.errors, validate]
      }


    case "toggleTodo":
      return {
        ...state,
        todos: state.todos.map(( { ...todo }: Todo) => {
          if (todo.id === action.payload.id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };

    case "deleteTodo":
      return {
        ...state,
        todos: state.todos.filter(( { ...todo }: Todo) => {
          return action.payload.id !== todo.id;
        }),
      };

    default:
      return state;
  }
};
