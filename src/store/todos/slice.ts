import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TodoId = string;

export interface Todo {
    id: TodoId,
    title: string,
    description: string,
    state: boolean,
    urgency: boolean
}

const initialState: Todo[] = [
    {
        id: '1',
        title: 'Title problem',
        description: 'description problem',
        urgency: true,
        state: false        
    },
    {
        id: '2',
        title: 'Title problem',
        description: 'description problem',
        urgency: false,
        state: true        
    },
    {
        id: '3',
        title: 'Title problem',
        description: 'description problem',
        urgency: false,
        state: false        
    },
    {
        id: '4',
        title: 'Title problem',
        description: 'description problem',
        urgency: true,
        state: true        
    },
]

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

        addTodo: (state, action: PayloadAction<Omit<Todo, 'id'>>)=>{
            const id = crypto.randomUUID();
            const body = action.payload

            return [...state, {id, ...body}]
        }
    }
})

export default todosSlice.reducer;

export const { changeState, addTodo } = todosSlice.actions