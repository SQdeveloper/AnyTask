import { useState } from "react";
import CardTodo from "./components/CardTodo";
import BasicModal from "../../components/Modal";
import CheckedIcon from "../../components/icons/CheckedIcon";
import FiltersIcon from '../../components/icons/FiltersIcon'
import LegendIcon from "../../components/icons/LegendIcon";
import UncheckedIcon from "../../components/icons/UncheckedIcon";
import { useAppSelector } from "../../hooks/store";
import AddIcon from "../../components/icons/AddIcon";
import ModalCreate from "./components/ModalCreate";

const Todos = () => {
    const todos = useAppSelector(state=>state.todos)        
    const [open, setOpen] = useState(false);

    const handleOpen = ()=>{
        setOpen(true)
    }    

    return (                
        <section className="w-full">
            <BasicModal open={open} setOpen={setOpen}>
                <ModalCreate/>
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
                    <CardTodo key={index} todo={todo} delay={(index)*100}/>                   
                ))}
            </section>
        </section>                
    );
};

export default Todos;