import { Container } from "./styles"

interface IInputProps {
    shift: string
    time: string
}

const Input = ({shift, time}: IInputProps) => {
    return ( 
    <Container>
        <div className="input-shifts">
            <input type="radio" />
            <h4>{shift}</h4>
        </div>
        <div className="input-time">
            <h4>{time}</h4>
        </div>
    </Container>
     );
}
 
export default Input;