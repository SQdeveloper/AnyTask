import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useEffect, useRef, useState } from "react";
import CardTodo from "./CardTodo";
import ArrowUp from "../../../components/icons/ArrowUp";
import useTodoActions from "../hooks/useTodoActions";
import { Todo } from "../../../store/todos/slice";
import useFilters from "../hooks/useFilters";

interface Props {    
    selectedFilter: string,
    indexSelectedTodo: number,
    setIndexSelectedTodo: React.Dispatch<SetStateAction<number>>,
    setSelectedTodo: Dispatch<SetStateAction<Todo | null | undefined>>,
}

const TodoList: React.FC<Props> = ({selectedFilter, indexSelectedTodo, setIndexSelectedTodo, setSelectedTodo}) => {
    const inputTodo = useRef<HTMLInputElement>(null);
    const [isEmpty, setIsEmpty] = useState(true);
    const { handleAddTodo } = useTodoActions();
    const { filteredTodos } = useFilters(selectedFilter);


    const handleCreateTodo = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();            

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const title = (formData.get('title') as string).trim();
        const description = '';
        const state = false;
        const urgency = true;

        if(!title || isEmpty) return;

        handleAddTodo( {title, description, state, urgency})
        if(inputTodo.current) inputTodo.current.value = '';        
    }

    const handleInputAddTodo = (e:ChangeEvent<HTMLInputElement>)=>{
        const text = e.target.value;
        if(text === ' ') return e.target.value = ''
        
        if(text.length > 0) return setIsEmpty(false);
        return setIsEmpty(true)
    }

    useEffect(()=>{
        if(filteredTodos) {            
            setSelectedTodo(filteredTodos[indexSelectedTodo])
        }        
    },[filteredTodos])

    return (
        <div className="flex flex-1 animate-appear-bottom overflow-hidden flex-col justify-between bg-white rounded-xl w-full pt-4">
            <div className="overflow-y-scroll">
                <h2 className="font-medium text-xl ml-5 mb-1">Todo List</h2>
                <ul className="flex flex-col gap-2 px-3">
                {filteredTodos?.map((todo, index)=>(                                                
                    <CardTodo key={todo.id} todo={todo} index={index} indexSelectedTodo={indexSelectedTodo} setIndexSelectedTodo={setIndexSelectedTodo} setSelectedTodo={setSelectedTodo}/>
                ))}
                </ul>
            </div>
            <form onSubmit={handleCreateTodo} className="w-full mt-2 p-3 border-t shadow-top">
                <div className="content-input flex justify-between w-full outline-none border rounded-md p-2">
                    <input ref={inputTodo} name="title" onChange={handleInputAddTodo} className="w-full outline-none" type="text" placeholder="Add todo" />
                    <ArrowUp addClass={`${!isEmpty ? 'text-blue-500' : 'text-gray-400'} scale-[88%]`} size="6"/>                        
                </div>
            </form>
        </div>
    );
};

export default TodoList;