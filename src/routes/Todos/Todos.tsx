import { ChangeEvent, useState } from "react";
import FiltersIcon from '../../components/icons/FiltersIcon'
import { Todo } from "../../store/todos/slice";
import TodoList from "./components/TodoList";
import DetailsTodo from "./components/DetailsTodo";
import InputFilter from "./components/InputFilter";

const Todos = () => { 
    const [selectedFilter, setSelectedFilter] = useState<string>('All');
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>();
    const [indexSelectedTodo, setIndexSelectedTodo] = useState(0);

    const handleChangeDate = (e: ChangeEvent<HTMLInputElement>)=>{
        setSelectedFilter(e.target.value);
    }    

    const handleClickInputFilter = (value: string)=>{
        setSelectedFilter(value)
        setIndexSelectedTodo(0);
    }    

    return (                
        <section className="w-full flex flex-col h-full">            
            <div className="flex gap-4 flex-wrap">
                <div className="box-style">
                    <ul className="flex gap-1">
                        <li className="flex gap-1.5 items-center">                            
                            <FiltersIcon/>
                            <span className="font-medium">Filters:</span>                            
                        </li>
                        <InputFilter handleClickInputFilter={handleClickInputFilter} id="filter1" isDefaultChecked={true} value="All">
                            All
                        </InputFilter>
                        <InputFilter handleClickInputFilter={handleClickInputFilter} id="filter2" isDefaultChecked={false} value="Last">                        
                            Last 7 days
                        </InputFilter>                    
                        <InputFilter handleClickInputFilter={handleClickInputFilter} id="filter3" isDefaultChecked={false} value="Complete">                                                
                            Complete
                        </InputFilter>                    
                        <InputFilter handleClickInputFilter={handleClickInputFilter} id="filter4" isDefaultChecked={false} value="Incomplete">                                                                        
                            Imcomplete
                        </InputFilter>                                        
                        <InputFilter handleClickInputFilter={handleClickInputFilter} id="filter5" isDefaultChecked={false} value="Date">                                                                                                
                            Date: 
                            <input onChange={handleChangeDate} type="date" />                                  
                        </InputFilter>                                                            
                    </ul>
                </div>                 
            </div>
            <section className="w-full flex-1 mt-6 flex gap-4 overflow-hidden">         
                <TodoList selectedFilter={selectedFilter} indexSelectedTodo={indexSelectedTodo} setIndexSelectedTodo={setIndexSelectedTodo} setSelectedTodo={setSelectedTodo} />
                { selectedTodo && <DetailsTodo selectedTodo={selectedTodo}/> }
            </section>
        </section>                
    );
};

export default Todos;