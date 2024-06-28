import { ReactNode } from "react";

interface Props {
    handleClickInputFilter: Function,
    children: ReactNode,
    isDefaultChecked: boolean,
    value: string,
    id: string
}

const InputFilter: React.FC<Props> = ({handleClickInputFilter, children, isDefaultChecked, value, id}) => {
    return (
        <li className="flex gap-1.5 items-center">
            <input id={id} defaultChecked={isDefaultChecked} className="peer hidden" name="filters" type="radio" />
            <label onClick={()=>{handleClickInputFilter(value)}} htmlFor={id} className="peer-checked:shadow-style rounded-md py-1 px-2 select-none cursor-pointer">
                {children}
            </label>
        </li>
    );
};

export default InputFilter;