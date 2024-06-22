import { Todo } from "../../../store/todos/slice";
import CheckedIcon from "../../../components/icons/CheckedIcon";
import DeleteIcon from "../../../components/icons/DeleteIcon";
import EditIcon from "../../../components/icons/EditIcon";
import UncheckedIcon from "../../../components/icons/UncheckedIcon";
import { useState } from "react";
import BasicModal from "../../../components/Modal";
import useTodoActions from "../hooks/useTodoActions";
import ModalEdit from "./ModalEdit";
import ModalDelete from "../../../components/ModalDelete";

interface Props {
    delay: number,
    todo: Todo
}

const CardTodo: React.FC<Props> = ({delay, todo}) => {
    const [open, setOpen] = useState<boolean>(false);
    const { handleChangeState } = useTodoActions();
    const [openModalDelete, setOpenModalDelete] = useState(false);

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

    return (
        <div className={`${todo.state && 'text-gray-500'} animate-appear-bottom delayAnimation-${delay} py-4 pb-[17px] rounded-md bg-white`}>
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
                <ModalEdit todo={todo} handleClose={handleClose}/>
            </BasicModal>
            <BasicModal open={openModalDelete} setOpen={setOpenModalDelete}>
                <ModalDelete handleClose={handleCloseModalDelete} id={todo.id}/>
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
                    <button onClick={handleOpenModalDelete}><DeleteIcon/></button>
                    <button onClick={handleOpen}><EditIcon/></button>                                                                
                </div>
            </div>
        </div>
    );
};

export default CardTodo;