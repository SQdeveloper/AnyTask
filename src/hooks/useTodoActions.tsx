import { Todo, TodoId, addTodo, changeState, modifyTodo, removeTodo } from "../store/todos/slice";
import { useAppDispatch } from "./store";

const useTodoActions = () => {
    const dispatch = useAppDispatch();

    const handleChangeState = (id:TodoId)=>{
        dispatch(changeState(id))
    }

    const handleAddTodo = (body: Omit<Todo, 'id'>)=>{
        dispatch(addTodo(body))
    }

    const handleRemoveTodo = (id: TodoId) => {
        dispatch(removeTodo(id))
    }

    const handleModifyTodo = (body: Todo) => {
        dispatch(modifyTodo(body))
    }

    return {handleChangeState, handleAddTodo, handleRemoveTodo, handleModifyTodo}
};

export default useTodoActions;