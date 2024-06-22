import { FormEvent, useState } from "react";
import useTodoActions from "../../../hooks/useTodoActions";
import { Todo } from "../../../store/todos/slice";
import EditIcon from "../../../components/icons/EditIcon";
import { Alert } from "@mui/material";

const ModalEdit = ({todo, handleClose}:{todo: Todo, handleClose: Function}) => {
    const { handleModifyTodo } = useTodoActions();
    const [isModified, setIsModified] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
    
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const title = formData.get('title') as string;
        const urgency = formData.get('urgency') as string;
        const description = formData.get('description') as string;
        
        const _urgency = todo.urgency ? 'Urgent' : 'Relax';

        if(title === todo.title && urgency === _urgency && description === todo.description) return setIsModified(true);
        
        const transformedUrgency = urgency === 'Urgent' ? true : false;
        const body = {...todo, title, urgency: transformedUrgency, description}
        handleModifyTodo(body)
        handleClose();
    }

    return (
        <div className="box-modal-style">
            <div className="pb-4 flex justify-center items-center gap-2">
                <EditIcon strokeColor="#3B82F6"/>
                <h2 className="text-[23px] font-medium text-center">Modify</h2>
            </div>
            <hr className="border-gray-300"/>
            <form onSubmit={handleSubmit} className="flex flex-col" action="">
                <div className="flex flex-col gap-4 px-5 pt-4 pb-5">
                    <label className="flex flex-col gap-2" htmlFor="">
                        <span className='font-medium'>
                            Title
                        </span>
                        <input name="title" defaultValue={todo.title} className="input-style" placeholder=""/>
                    </label>
                    <label className="flex flex-col gap-2" htmlFor="">
                        <span className='font-medium'>
                            Urgency
                        </span>                        
                        <select defaultValue={todo.urgency? 'Urgent': 'Relax'} name="urgency" className="input-style">
                            <option value=''>
                                --select--
                            </option>
                            <option>
                                Urgent
                            </option>
                            <option >
                                Relax
                            </option>
                        </select>
                    </label>
                    <label className="flex flex-col gap-2" htmlFor="">
                        <span className='font-medium'>
                            Description
                        </span>
                        <textarea defaultValue={todo.description} name="description" className="input-style" placeholder=""/>
                    </label>
                    {
                        isModified && 
                        <Alert variant="outlined" severity="error">
                            Complete fields
                        </Alert>
                    }
                </div>
                <hr className="border-gray-300"/>
                <button className="button-bg mt-4 mx-4">Modify</button>
            </form>
        </div>
    )
}
export default ModalEdit;