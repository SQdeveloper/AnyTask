import DeleteIcon from "./icons/DeleteIcon";
import EditIcon from "./icons/EditIcon";
import UncheckedIcon from "./icons/UncheckedIcon";

interface Props {
    delay: string
}

const CardTodo: React.FC<Props> = ({delay}) => {
    return (
        <div className={`animate-appear-bottom delay-1000 px-4 pt-3 pb-[17px] rounded-md bg-white`}>
            <div className="flex gap-2 justify-between">
                <strong className="text-[17px]">Solucionar las Notificaciones</strong>
                <UncheckedIcon strokeColor="red"/>
            </div>
            <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quaerat odio fugiat laudantium, ipsa eum ratione eaque obcaecati! Dolorum odit recusandae consequatur neque iure! Est ut natus dolor culpa sequi?</p>
            <div className="flex justify-between mt-5">
                <button className="hover:bg-blue-500 hover:text-white duration-300 border border-blue-500 rounded-lg px-4 py-0.5 text-blue-500">Check</button>
                <div className="flex gap-1.5">
                    <button><DeleteIcon/></button>
                    <button><EditIcon/></button>                                                                
                </div>
            </div>
        </div>
    );
};

export default CardTodo;