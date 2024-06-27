import { useEffect, useState } from "react";
import { Todo } from "../../../store/todos/slice";
import { useAppSelector } from "../../../hooks/store";
import { STATE_TODO } from "../../../constants/StateTodo";

const useFilters = (selectedFilter: string) => {    
    const [filteredTodos, setFilteredTodos] = useState<Todo[]>();
    const todos = useAppSelector(state => state.todos);

    const handleUncheckedFilter = ()=>{
        return todos.filter(todo => todo.state === STATE_TODO.UNCHECKED);        
    }   
    
    const handleCheckedFilter = ()=>{
        return todos.filter(todo => todo.state === STATE_TODO.CHECKED);                
    }   

    const handleDateFilter = ()=>{
        return todos.filter(todo => todo.date === selectedFilter);
    }

    useEffect(()=>{        
        if(selectedFilter === 'All') {
            return setFilteredTodos(todos)
        }
        if(selectedFilter === 'Complete') {
            return setFilteredTodos(handleCheckedFilter)
        }
        if(selectedFilter === 'Incomplete') {
            return setFilteredTodos(handleUncheckedFilter)
        }
        return setFilteredTodos(handleDateFilter);
    },[todos, selectedFilter]);

    return { filteredTodos }
};

export default useFilters;