import { Todo } from "../store/todos/slice";
import CheckedIcon from "./icons/CheckedIcon";
import DeleteIcon from "./icons/DeleteIcon";
import EditIcon from "./icons/EditIcon";
import UncheckedIcon from "./icons/UncheckedIcon";
import { useState } from "react";
import BasicModal from "./Modal";
import useTodoActions from "../hooks/useTodoActions";

interface Props {
    delay: string,
    todo: Todo
}

const ContentModal = ()=>{
    return (
        <div className="rounded-md pb-4 pt-3.5 w-[400px] absolute left-[50%] bg-white top-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div className="pb-4 flex justify-center items-center gap-2">
                <EditIcon strokeColor="#3B82F6"/>
                <h2 className="text-[23px] font-medium text-center">Modify</h2>
            </div>
            <hr className="border-gray-300"/>
            <form className="flex flex-col" action="">
                <div className="flex flex-col gap-4 px-5 pt-4 pb-5">
                    <label className="flex flex-col gap-2" htmlFor="">
                        <span className='font-medium'>
                            Title
                        </span>
                        <input className="input-style" placeholder=""/>
                    </label>
                    <label className="flex flex-col gap-2" htmlFor="">
                        <span className='font-medium'>
                            Urgency
                        </span>                        
                        <select className="input-style">
                            <option>
                                Urgent
                            </option>
                            <option>
                                Relax
                            </option>
                        </select>
                    </label>
                    <label className="flex flex-col gap-2" htmlFor="">
                        <span className='font-medium'>
                            Description
                        </span>
                        <textarea className="input-style" placeholder=""/>
                    </label>
                </div>
                <hr className="border-gray-300"/>
                <button className="button-bg mt-4 mx-4">Modify</button>
            </form>
        </div>
    )
}

const CardTodo: React.FC<Props> = ({delay, todo}) => {
    const [open, setOpen] = useState<boolean>(false);
    const { handleChangeState } = useTodoActions();

    const handleOpen = ()=>{
        setOpen(true)
    }

    return (
        <div className={`${todo.state && 'text-gray-500'} animate-[appear-bottom_1s_both_${delay}] py-4 pb-[17px] rounded-md bg-white`}>
            <div className="flex gap-2 justify-between px-4">
                <span className="capitalize font-medium text-[17px] flex gap-1.5 items-center">
                    {todo.state ? <CheckedIcon/>: <UncheckedIcon strokeColor="red"/>}                                
                    {todo.title}
                </span>     
                <span className={`${todo.urgency ? 'text-red-500': 'text-green-400'} font-medium uppercase`}>
                    {
                        todo.urgency ? 'Urgent' : 'Relax'
                    }
                </span>           
            </div>
            <hr className="mt-3"/>
            <BasicModal open={open} setOpen={setOpen}>
                <ContentModal/>
            </BasicModal>
            <p className="my-4 mx-4 capitalize">{todo.description}</p>
            <hr className=""/>
            <div className="mx-4 flex justify-between mt-5">
                <button 
                    className="hover:bg-blue-500 hover:text-white duration-300 border border-blue-500 rounded-lg px-4 py-0.5 text-blue-500"
                    onClick={()=>{handleChangeState(todo.id)}}
                >                        
                    {
                        todo.state ? 'Uncheck': 'Check'
                    }                    
                </button>
                <div className="flex gap-1.5">
                    <button><DeleteIcon/></button>
                    <button onClick={handleOpen}><EditIcon/></button>                                                                
                </div>
            </div>
        </div>
    );
};

export default CardTodo;