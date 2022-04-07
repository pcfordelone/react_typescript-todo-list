export interface Todo {
    title: string,
    completed: boolean
    id?: number
}

export interface Error {
    code: number,
    description: string
}

export interface TodoState {
    todoCount: number
    pending: number,
    completed: number,
    todos: Todo[],
    errors: Error[]
}
