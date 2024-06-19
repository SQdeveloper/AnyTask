import { FormEvent, useState } from "react";
import CardTodo from "../components/CardTodo";
import BasicModal from "../components/Modal";
import CheckedIcon from "../components/icons/CheckedIcon";
import FiltersIcon from '../components/icons/FiltersIcon'
import LegendIcon from "../components/icons/LegendIcon";
import UncheckedIcon from "../components/icons/UncheckedIcon";
import { useAppSelector } from "../hooks/store";
import AddIcon from "../components/icons/AddIcon";
import useTodoActions from "../hooks/useTodoActions";
import { URGENCY } from "../constants/UrgencyTodo";

const Todos = () => {
    const todos = useAppSelector(state=>state.todos)        
    const [open, setOpen] = useState(false);
    const { handleAddTodo } = useTodoActions();

    const handleOpen = ()=>{
        setOpen(true)
    }

    const handleCreateTodo = (event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault();

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const title = formData.get('title') as string;
        const description = formData.get('description') as string;
        const _urgency = formData.get('urgency')as string;
        const urgency = _urgency === 'urgent' ? URGENCY.URGENT : URGENCY.RELAX;
     
        if(!!!title || !!!description || !!!_urgency) return;                
        handleAddTodo({title, description, urgency, state:false});
    }

    const ContentModal = ()=>{
        return (
            <div className="rounded-md pb-4 pt-3.5 w-[400px] absolute left-[50%] bg-white top-[50%] translate-x-[-50%] translate-y-[-50%]">
                <div className="pb-4 flex justify-center items-center gap-2">
                    <AddIcon strokeColor="#3B82F6"/>
                    <h2 className="text-[23px] font-medium text-center">Create</h2>
                </div>
                <hr className="border-gray-300"/>
                <form className="flex flex-col" onSubmit={handleCreateTodo}>
                    <div className="flex flex-col gap-4 px-5 pt-4 pb-5">
                        <label className="flex flex-col gap-2" htmlFor="">
                            <span className='font-medium'>
                                Title
                            </span>
                            <input name="title" className="input-style" placeholder=""/>
                        </label>
                        <label className="flex flex-col gap-2" htmlFor="">
                            <span className='font-medium'>
                                Urgency
                            </span>                        
                            <select name="urgency" className="input-style">
                                <option value={'urgent'}>
                                    Urgent
                                </option>
                                <option value={'relax'}>
                                    Relax
                                </option>
                            </select>
                        </label>
                        <label className="flex flex-col gap-2" htmlFor="">
                            <span className='font-medium'>
                                Description
                            </span>
                            <textarea name="description" className="input-style" placeholder=""/>
                        </label>
                    </div>
                    <hr className="border-gray-300"/>
                    <button className="button-bg mt-4 mx-4">Create</button>
                </form>
            </div>
        )
    }

    return (                
        <section className="w-full">
            <BasicModal open={open} setOpen={setOpen}>
                <ContentModal/>
            </BasicModal>
            <div className="flex gap-4 flex-wrap">
                <div className="box-style">
                    <div className="flex gap-1.5">
                        <FiltersIcon/>
                        <span className="font-medium">Filters:</span>
                    </div>
                    <button>Last 7 days</button>
                    <button>Checked</button>
                    <button>Unchecked</button>
                    <label htmlFor="">
                        Date: 
                        <input type="date" />
                    </label>
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
                <button onClick={handleOpen} className="flex items-center gap-1 button-bg font-medium text-nowrap">            
                    <AddIcon size={5} strokeColor="#fff"/>                
                    Add Todo
                </button>
            </div>
            <section className="w-full mt-6 grid grid-todos gap-4">                                        
                {todos.map((todo,index)=>(
                    <CardTodo key={index} todo={todo} delay={`${index/5}s`}/>                   
                ))}
            </section>
        </section>                
    );
};

export default Todos;