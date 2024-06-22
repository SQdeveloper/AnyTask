import { MouseEventHandler } from "react";
import WarningIcon from "./icons/WarningIcon";
import useTodoActions from "../routes/Todos/hooks/useTodoActions";
import { TodoId } from "../store/todos/slice";

const ModalDelete = ({handleClose, id}: {handleClose: MouseEventHandler<HTMLButtonElement> | any, id: TodoId}) => {
    const { handleRemoveTodo } = useTodoActions();

    const handleClickDone = ()=>{
        handleRemoveTodo(id);
        handleClose();
    }

    return (
        <div className="box-modal-style">   
            <div className="flex justify-center mb-3">
                <WarningIcon strokeColor="#3B82F6"/>
            </div>         
            <hr className="border-t-gray-300" />
            <h2 className="mb-7 mt-5 font-sm text-xl text-center px-4">Are you sure to delete this todo?</h2>
            <hr className="border-t-gray-300" />
            <div className="flex justify-center mt-4 gap-6">
                <button onClick={handleClose} className="button-without">Cancel</button>
                <button onClick={handleClickDone} className="button-bg">Done</button>
            </div>
        </div>
    );
};

export default ModalDelete;