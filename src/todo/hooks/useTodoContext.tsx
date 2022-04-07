import { useContext } from "react"
import { TodoContext } from "../contexts/TodoContext"

export const useTodoContext = () => {
  const { todoState, addTodo, toggleTodo, deleteTodo } = useContext(TodoContext);  

  return {
      todos: todoState.todos,
      states: {
        todoCount: todoState.todos.length,
        todoPending: todoState.todos.filter(todo => !todo.completed).length,
        todoCompleted: todoState.todos.filter(todo => todo.completed).length,
        errors: todoState.errors
      },      
      toggleTodo,
      addTodo,
      deleteTodo,    
  }
}
