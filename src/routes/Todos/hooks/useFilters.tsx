import { STATE_TODO } from "../../../constants/StateTodo";
import { useAppSelector } from "../../../hooks/store";

const useFilters = () => {
    const todos = useAppSelector(state => state.todos);

    const handleUnCheckedFilter = ()=>{
        return todos.filter(todo => todo.state === STATE_TODO.UNCHECKED);
    }   

    const handleCheckedFilter = ()=>{
        return todos.filter(todo => todo.state === STATE_TODO.CHECKED);
    }   

    return { handleCheckedFilter, handleUnCheckedFilter }
};

export default useFilters;