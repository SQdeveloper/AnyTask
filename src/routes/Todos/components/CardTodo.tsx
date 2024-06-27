import { Todo } from "../../../store/todos/slice";

interface Props {
    todo: Todo,
    index: number,
    setSelectedTodo: Function,
    indexSelectedTodo: number,
    setIndexSelectedTodo: React.Dispatch<React.SetStateAction<number>>
}

const CardTodo: React.FC<Props> = ({todo, indexSelectedTodo, setIndexSelectedTodo, index, setSelectedTodo}) => {
    return (
        <li className="flex relative gap-1 select-none" onClick={()=>{setSelectedTodo(todo)}}>
            <input 
                id={`todo-option${todo.id}`} 
                checked={indexSelectedTodo === index} 
                className="peer hidden" type="radio" name="todo"
                onChange={() => setIndexSelectedTodo(index)}
            />
            <label 
                htmlFor={`todo-option${todo.id}`} 
                className={`${todo.state && 'opacity-40'} transition-opacity flex gap-1 justify-between peer-checked:shadow-style cursor-pointer outline-none rounded-md w-full p-2 text-start hover:bg-gray-100`}
            >
                <div className={`${todo.state ? 'clippy-100' : 'clippy-0'} transition-clippy absolute bg-black top-[50%] translate-y-[-50%] h-[1px] w-full`}></div>
                <span className="overflow-hidden text-ellipsis h-fit whitespace-nowrap ">- {todo.title}</span>
                {todo.urgency ?
                    <span className="text-red-400">
                        urgent
                    </span>
                    :
                    <span className="text-blue-500">
                        relax                                            
                    </span>
                }
            </label>
        </li>
    );
};

export default CardTodo;