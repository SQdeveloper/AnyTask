import { ReactNode } from "react";
import SideBar from "./SideBar";

interface Props {
    children: ReactNode
}

const DefaultLayaut: React.FC<Props> = ({children}) => {
    return (
        <div className="w-full flex bg-waves bg-center bg-cover bg-no-repeat">
            <div className="animate-appear-right w-[230px] py-4 bg-transparent-white backdrop-blur-md">
                <SideBar/>
            </div>
            <div className="flex-1 px-8 py-4 h-[100svh] overflow-y-scroll">
                {children}
            </div>
        </div>
    );
};

export default DefaultLayaut;