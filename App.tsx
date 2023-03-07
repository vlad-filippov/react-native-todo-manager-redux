import React from 'react';
import { TodoNavigation } from "./src/navigations/TodoNavigation";
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import todoReducer from "./src/store/todo.reducers";
const rootReducer = combineReducers({ todoList: todoReducer });
const configureStore = () => {
    return createStore(rootReducer);
}

const store = configureStore();

function App(): JSX.Element {
    return (
        <Provider store={ store }>
            <TodoNavigation/>
        </Provider>
        );
}

export default App;
