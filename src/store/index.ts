import { Middleware, configureStore } from "@reduxjs/toolkit";
import todosReducer from './todos/slice'

const LocalStoreMiddleware: Middleware = (api) => (next) => (action) => {
    const result = next(action);
    
    const state = api.getState().todos;
    localStorage.setItem('__redux__storage__', JSON.stringify(state));    
    
    return result
}

export const store = configureStore({
    reducer: {
        todos: todosReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(LocalStoreMiddleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;