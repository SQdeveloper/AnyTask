import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns";

export type TodoId = string;

export interface Todo {
    id: TodoId,
    title: string,
    description: string,
    state: boolean,
    urgency: boolean,
    date: string
}

const defaultState: Todo[] = []

const initialState: Todo[] = (()=>{
    const existStorage = localStorage.getItem('__redux__storage__');

    if(!existStorage) return defaultState;
    return JSON.parse(existStorage)
})()

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        changeState: (state, action: PayloadAction<TodoId>) => {
            const id = action.payload;                        

            const listTodos = state.map((todo)=>{
                if(todo.id === id) return {...todo, state: !todo.state}
                return {...todo}
            })
            return listTodos
        },

        addTodo: (state, action: PayloadAction<Omit<Todo, 'id' | 'date'>>)=>{
            const id = crypto.randomUUID();
            const body = action.payload
            const currentdate = new Date();
            const date = format(currentdate, 'yyyy-MM-dd');        

            return [{id,...body, date}, ...state]
        },
        
        removeTodo: (state, action: PayloadAction<TodoId>) =>{
            const id = action.payload;
            const list = state.filter(todo => todo.id !== id);

            return list;
        },

        modifyTodo: (state, action: PayloadAction<Todo>) =>{
            const id = action.payload.id;            
            const body = action.payload;            

            const list = state.map((todo)=>{
                if(todo.id === id) return {...todo, ...body}
                return {...todo}
            })
            
            return list;
        }
    }
})

export default todosSlice.reducer;

export const { changeState,
               addTodo,
               removeTodo,
               modifyTodo,         
            } = todosSlice.actions