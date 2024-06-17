import CardTodo from "../components/CardTodo";
import DefaultLayaut from "../components/DefaultLayaut";
import CheckedIcon from "../components/icons/CheckedIcon";
import FiltersIcon from '../components/icons/FiltersIcon'
import LegendIcon from "../components/icons/LegendIcon";
import UncheckedIcon from "../components/icons/UncheckedIcon";

const Todos = () => {
    return (        
        <DefaultLayaut>
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
                    <CardTodo delay=""/>
                    <CardTodo delay="1000ms"/>
                    <CardTodo delay=""/>
                    <CardTodo delay=""/>
                    <CardTodo delay=""/>
                    {/* <CardTodo delay="1.5s"/>
                    <CardTodo delay="1.6s"/> */}
                </section>
            </section>        
        </DefaultLayaut>
    );
};

export default Todos;