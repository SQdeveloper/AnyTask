import { Link } from "react-router-dom";
import DailyTaskIcon from "./icons/DailyTaskIcon";
import TargetsIcon from "./icons/TargetsIcon";
import TodoIcon from "./icons/TodoIcon";

const SideBar = () => {
    return (
        <aside className="font-primary">
            <header className="flex gap-2 px-4">
                <div className="aspect-square w-10 h-fit">
                    <img className="rounded-full object-cover h-full w-full" src="../../src/assets/images/perfil.jpg" alt="perfil" />
                </div>
                <div>
                    <h3 className="font-medium">Jefferson Silva</h3>
                    <h4 className=" text-gray-500 text-sm">Frontend Developer</h4>                    
                </div>
            </header>                        
            <ul className="mt-6 flex flex-col">
                <li>
                    <Link to='' className="link-sidebar">
                        <TodoIcon/>
                        Todos
                    </Link>
                </li>
                <li>
                    <Link to='' className="link-sidebar">
                        <DailyTaskIcon/>
                        Daily tasks
                    </Link>
                </li>
                <li>
                    <Link to='' className="link-sidebar">
                        <TargetsIcon/>
                        Targets
                    </Link>
                </li>
            </ul>
        </aside>
    );
};

export default SideBar;