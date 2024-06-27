import { useState } from "react";
import BasicModal from "../../../components/Modal";
import ModalDelete from "../../../components/ModalDelete";
import ModalEdit from "./ModalEdit";
import useTodoActions from "../hooks/useTodoActions";
import CheckedIcon from "../../../components/icons/CheckedIcon";
import UncheckedIcon from "../../../components/icons/UncheckedIcon";
import DeleteIcon from "../../../components/icons/DeleteIcon";
import EditIcon from "../../../components/icons/EditIcon";
import { Todo } from "../../../store/todos/slice";

interface Props {
    selectedTodo: Todo
}

const DetailsTodo: React.FC<Props> = ({selectedTodo}) => {
    const [open, setOpen] = useState(false);    
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const { handleChangeState } = useTodoActions();    

    const handleOpenModalDelete = ()=>{
        setOpenModalDelete(true);
    }

    const handleCloseModalDelete = ()=>{
        setOpenModalDelete(false);
    }

    const handleOpen = ()=>{
        setOpen(true)
    }    

    const handleClose = ()=>{
        setOpen(false)
    }        

    return (
        <div className="flex flex-1 flex-col animate-appear-bottom delayAnimation-100 justify-between p-4 bg-white rounded-xl w-full">
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
    );
};

export default DetailsTodo;