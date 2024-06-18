import CardTodo from "../components/CardTodo";
import CheckedIcon from "../components/icons/CheckedIcon";
import FiltersIcon from '../components/icons/FiltersIcon'
import LegendIcon from "../components/icons/LegendIcon";
import UncheckedIcon from "../components/icons/UncheckedIcon";

const Todos = () => {
    return (                
        <section className="w-full">
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
                        Tarea realizada
                    </div>
                    <div className="flex gap-1 text-nowrap">
                        <UncheckedIcon/>
                        Falta realizar
                    </div>
                </div>
            </div>
            <section className="w-full mt-6 grid grid-todos gap-4">                                        
                <CardTodo delay="0s"/>
                <CardTodo delay="0.2s"/>
                <CardTodo delay="0.4s"/>
                <CardTodo delay="0.6s"/>
                <CardTodo delay="0.8s"/>                    
            </section>
        </section>                
    );
};

export default Todos;