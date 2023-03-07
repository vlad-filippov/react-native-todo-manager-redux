import { TodoItemModel } from "../models/todo-item.model";

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export function addTodo(todo: TodoItemModel) {
    return {
        type: ADD_TODO,
        todo
    }
}

export function removeTodo(todoId: number) {
    return {
        type: REMOVE_TODO,
        todoId
    }
}
