import { Todo, TodoId, addTodo, changeState } from "../store/todos/slice";
import { useAppDispatch } from "./store";

const useTodoActions = () => {
    const dispatch = useAppDispatch();

    const handleChangeState = (id:TodoId)=>{
        dispatch(changeState(id))
    }

    const handleAddTodo = (body: Omit<Todo, 'id'>)=>{
        dispatch(addTodo(body))
    }

    return {handleChangeState, handleAddTodo}
};

export default useTodoActions;