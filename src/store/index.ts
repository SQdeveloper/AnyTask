import { configureStore } from "@reduxjs/toolkit";
import todosReducer from './todos/slice'

const LocalStoreMiddleware = (store) => (next) =>(action) => {
    next(action);

    const state = store.getState().todos;
    localStorage.setItem('__redux__storage__', JSON.stringify(state));    
}

export const store = configureStore({
    reducer: {
        todos: todosReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(LocalStoreMiddleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch