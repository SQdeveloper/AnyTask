import { FormEvent, useState } from "react";
import AddIcon from "../../../components/icons/AddIcon";
import { URGENCY } from "../../../constants/UrgencyTodo";
import useTodoActions from "../hooks/useTodoActions";
import { Alert } from "@mui/material";
import { UppercaseText } from "../../../utilities/UppercaseText";

const ModalCreate = ({handleClose}: {handleClose: Function}) => {
    const { handleAddTodo } = useTodoActions();
    const [isModified, setIsModified] = useState(false);


    const handleCreateTodo = (event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault();

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const title = UppercaseText(formData.get('title') as string);
        const description = UppercaseText(formData.get('description') as string);    
        const _urgency = formData.get('urgency') as string;
        const urgency = _urgency === 'urgent' ? URGENCY.URGENT : URGENCY.RELAX;
     
        if(!!!title || !!!description || !!!_urgency) return setIsModified(true);                
        handleAddTodo({title, description, urgency, state:false});
        handleClose();
    }    

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
                    {
                        isModified && 
                        <Alert variant="outlined" severity="error">
                            Complete fields
                        </Alert>
                    }
                </div>
                <hr className="border-gray-300"/>
                <button className="button-bg mt-4 mx-4">Create</button>
            </form>
        </div>
    )
};

export default ModalCreate;