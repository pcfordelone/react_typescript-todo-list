import { useContext } from "react"
import { TodoContext } from "../contexts/TodoContext"

export const useTodoContext = () => {
  const { todos, all, store, destroy, update } = useContext(TodoContext);  

  return {
      todos: todos,
      states: {
        todoCount: todos.length,
        todoPending: todos.filter(todo => !todo.completed).length,
        todoCompleted: todos.filter(todo => todo.completed).length,
        // errors: errors
      },      
      all,
      store,
      destroy,
      update
  }
}
