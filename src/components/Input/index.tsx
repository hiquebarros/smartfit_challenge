import { useContext } from "react";
import { FilterContext } from "../../providers/contexts/filterContext";
import { Container } from "./styles"

interface IInputProps {
    shift: string
    time: string
    shiftState: string | undefined
    setShiftState: React.Dispatch<React.SetStateAction<string | undefined>>
}

const Input = ({shift, time, setShiftState, shiftState}: IInputProps) => {

    return ( 
    <Container>
        <div className="input-shifts">
            <input type="radio" value={shift.toLocaleLowerCase()} onChange={(evt)=> setShiftState(evt.target.value)} checked={shiftState === shift.toLocaleLowerCase()} />
            <h4>{shift}</h4>
        </div>
        <div className="input-time">
            <h4>{time}</h4>
        </div>
    </Container>
     );
}
 
export default Input;