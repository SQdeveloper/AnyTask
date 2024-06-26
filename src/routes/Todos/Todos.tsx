import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import BasicModal from "../../components/Modal";
import CheckedIcon from "../../components/icons/CheckedIcon";
import FiltersIcon from '../../components/icons/FiltersIcon'
import LegendIcon from "../../components/icons/LegendIcon";
import UncheckedIcon from "../../components/icons/UncheckedIcon";
import useFilters from "./hooks/useFilters";
import { Todo } from "../../store/todos/slice";
import EditIcon from "../../components/icons/EditIcon";
import useTodoActions from "./hooks/useTodoActions";
import DeleteIcon from "../../components/icons/DeleteIcon";
import ModalEdit from "./components/ModalEdit";
import ModalDelete from "../../components/ModalDelete";
import ArrowUp from "../../components/icons/ArrowUp";

const Todos = () => { 
    const [open, setOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState<string>('All');
    const { filteredTodos } = useFilters(selectedFilter);
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>();
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const [isEmpty, setIsEmpty] = useState(true);
    const { handleChangeState, handleAddTodo } = useTodoActions();    

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
    }

    const handleOpen = ()=>{
        setOpen(true)
    }    

    const handleClose = ()=>{
        setOpen(false)
    }        

    const handleOpenModalDelete = ()=>{
        setOpenModalDelete(true);
    }

    const handleCloseModalDelete = ()=>{
        setOpenModalDelete(false);
    }

    const handleChangeDate = (e: ChangeEvent<HTMLInputElement>)=>{
        setSelectedFilter(e.target.value);
    }

    const changeSelectedTodo = (todo: Todo)=>{
        setSelectedTodo(todo)
    }

    const handleInputAddTodo = (e:ChangeEvent<HTMLInputElement>)=>{
        const text = e.target.value;
        if(text === ' ') return e.target.value = ''
        
        if(text.length > 0) return setIsEmpty(false);
        return setIsEmpty(true)
    }

    useEffect(()=>{
        setSelectedTodo(filteredTodos ? filteredTodos[0] : null)
    },[filteredTodos])

    return (                
        <section className="w-full flex flex-col h-full">            
            <div className="flex gap-4 flex-wrap">
                <div className="box-style">
                    <ul className="flex gap-1">
                        <li className="flex gap-1.5 items-center">                            
                            <FiltersIcon/>
                            <span className="font-medium">Filters:</span>                            
                        </li>
                        <li className="flex gap-1.5 items-center">
                            <input id="filter1" defaultChecked className="peer hidden" name="filters" type="radio" />
                            <label onClick={()=>{setSelectedFilter('All')}} htmlFor="filter1" className="peer-checked:bg-gray-200 rounded-md py-1 px-2 select-none cursor-pointer">
                                All
                            </label>
                        </li>
                        <li className="flex gap-1.5 items-center">
                            <input id="filter2" className="peer hidden" name="filters" type="radio" />
                            <label className="peer-checked:bg-gray-200 rounded-md py-1 px-2 select-none cursor-pointer" htmlFor="filter2">
                                Last 7 days
                            </label>
                        </li>
                        <li className="flex gap-1.5 items-center">
                            <input id="filter3" className="peer hidden" name="filters" type="radio" />                        
                            <label className="peer-checked:bg-gray-200 rounded-md py-1 px-2 select-none cursor-pointer" onClick={()=>{setSelectedFilter('Complete')}} htmlFor="filter3">
                                Complete
                            </label>
                        </li>
                        <li className="flex gap-1.5 items-center">
                            <input id="filter4" className="peer hidden" name="filters" type="radio" />                                                
                            <label className="peer-checked:bg-gray-200 rounded-md py-1 px-2 select-none cursor-pointer" onClick={()=>{setSelectedFilter('Imcomplete')}} htmlFor="filter4">
                                Imcomplete
                            </label>
                        </li>
                        <li className="flex gap-1.5 items-center">
                            <input id="filter5" className="peer hidden" name="filters" type="radio" />                                                                                                        
                            <label className="peer-checked:bg-gray-200 rounded-md py-1 px-2 select-none cursor-pointer" htmlFor="filter5">
                                Date: 
                                <input onChange={handleChangeDate} type="date" />                                
                            </label>
                        </li>
                    </ul>
                </div>
                <div className="box-style">
                    <span className="font-medium flex gap-1.5">                        
                        <LegendIcon/>
                        Legend:
                    </span>
                    <div className="flex gap-1 text-nowrap">                        
                        <CheckedIcon/>
                        Work done
                    </div>
                    <div className="flex gap-1 text-nowrap">                        
                        <UncheckedIcon/>
                        Not realized
                    </div>
                </div>                
            </div>
            <section className="w-full mt-6 h-full grid grid-cols-2 gap-4">         
                <div className="flex animate-appear-bottom flex-col justify-between bg-white rounded-xl w-full pt-4">
                    <div className="">
                        <h2 className="font-medium text-xl ml-5 mb-1">Todo List</h2>
                        <ul className="overflow-y-scroll max-h-full flex flex-col gap-2 px-3">
                        {filteredTodos?.map((todo, index)=>(                                                
                            <li key={todo.id} className="flex relative gap-1 select-none" onClick={()=>{changeSelectedTodo(todo)}}>
                                <input id={`todo-option${todo.id}`} defaultChecked={index === 0 ? true : false} className="peer hidden" type="radio" name="todo"/>
                                <label htmlFor={`todo-option${todo.id}`} className={`${todo.state && 'opacity-40'} transition-opacity flex gap-1 justify-between peer-checked:shadow-style cursor-pointer outline-none rounded-md w-full p-2 text-start hover:bg-gray-100`}>
                                <div className={`${todo.state ? 'clippy-100' : 'clippy-0'} transition-clippy absolute bg-black top-[50%] translate-y-[-50%] h-[1px] w-full`}></div>
                                    <span className="overflow-hidden text-ellipsis h-fit whitespace-nowrap ">- {todo.title}</span>
                                    {todo.urgency ?
                                        <span className="text-red-400">
                                            urgent
                                        </span>
                                        :
                                        <span className="text-blue-500">
                                            relax                                            
                                        </span>
                                    }
                                </label>
                            </li>
                        ))}
                        </ul>
                    </div>
                    <form onSubmit={handleCreateTodo} className="w-full mt-4 p-3 border-t shadow-top">
                        <div className="content-input flex justify-between w-full outline-none border rounded-md p-2">
                            <input name="title" onChange={handleInputAddTodo} className="w-full outline-none" type="text" placeholder="Add todo" />
                            <ArrowUp addClass={`${!isEmpty ? 'text-blue-500' : 'text-gray-400'} scale-[88%]`} size="6"/>                        
                        </div>
                    </form>
                </div>
                {
                    selectedTodo &&

                    <div className="flex flex-col animate-appear-bottom delayAnimation-100 justify-between p-4 bg-white rounded-xl w-full">
                        <div>
                            <BasicModal open={open} setOpen={setOpen}>
                                <ModalEdit todo={selectedTodo} handleClose={handleClose}/>
                            </BasicModal>
                            <BasicModal open={openModalDelete} setOpen={setOpenModalDelete}>
                                <ModalDelete handleClose={handleCloseModalDelete} id={selectedTodo.id}/>
                            </BasicModal>                                       
                            <div className="flex items-center justify-between">
                                <span className="uppercase font-medium text-gray-500">details</span>
                                <div className="flex gap-1">
                                    {selectedTodo.state ? 
                                        <>
                                            <CheckedIcon strokeColor="#3B82F6"></CheckedIcon>
                                            <span className="text-[#3B82F6] capitalize">Complete</span>
                                        </>
                                        :
                                        <>
                                            <UncheckedIcon/>                                            
                                            <span className="text-[#E57373] capitalize">Incomplete</span>
                                        </>
                                    }                                    
                                </div>                               
                            </div>
                            <h2 className="mt-2 mb-4 font-medium text-xl">{selectedTodo?.title}</h2>

                            <ul className="flex flex-col gap-3">                            
                                <li>
                                    <h3 className="font-medium uppercase text-sm">Description</h3>
                                    {
                                        selectedTodo.description !== '' ? 
                                        <p>{selectedTodo.description}</p>
                                        :
                                        <p className="text-gray-400">Description doesn't exist</p>
                                    }
                                </li>
                                <li>
                                    <h3 className="font-medium uppercase text-sm">Urgency</h3>
                                    <p>
                                        {selectedTodo?.urgency ? 'Urgent' : 'Relax'}                        
                                    </p>
                                </li>
                                <li className="flex justify-between">
                                    <div>
                                        <h3 className="font-medium uppercase text-sm">Create at</h3>
                                        <p>{selectedTodo?.date}</p>
                                    </div>
                                    <div>
                                        <h3 className="font-medium uppercase text-sm">deadline</h3>
                                        <p>{selectedTodo?.date}</p>
                                    </div>                                    
                                </li>
                            </ul>
                        </div>
                        <div className="flex justify-between mt-5">
                            <button 
                                className="hover:bg-blue-500 hover:text-white duration-300 border border-blue-500 rounded-lg px-4 py-0.5 text-blue-500"
                                onClick={()=>{handleChangeState(selectedTodo?.id)}}
                            >                        
                                {
                                    selectedTodo?.state ? 'Mark as incomplete': 'Mark as complete'
                                }                    
                            </button>
                            <div className="flex gap-1.5">
                                <button onClick={handleOpenModalDelete}><DeleteIcon/></button>
                                <button onClick={handleOpen}><EditIcon/></button>                                                                
                            </div>
                        </div>
                    </div>
                }
            </section>
        </section>                
    );
};

export default Todos;