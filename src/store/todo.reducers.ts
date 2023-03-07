import { ADD_TODO, REMOVE_TODO } from "./todo.actions";
import { TodoItemModel } from "../models/todo-item.model";

interface InitialState {
    todoList: TodoItemModel[];
}

const initialState: InitialState = {
    todoList: []
};

const todoReducer = (state = initialState, action: {type: string, todo?: TodoItemModel, todoId?: number}) => {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todoList: [action.todo, ...state.todoList]
            };
        case REMOVE_TODO:
            return {
                ...state,
                todoList: state.todoList.filter(todo => todo.id !== action.todoId)
            };
        default:
            return state;
    }
}
export default todoReducer;
