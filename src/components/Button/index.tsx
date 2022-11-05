import { ReactNode } from "react";
import { Container } from "./styles"

interface IButtonProps {
    children: ReactNode
    styleType: string
    onClick?: React.MouseEventHandler<HTMLElement>;
}

const Button = ({children, styleType, onClick}:IButtonProps) => {
    return ( 
        <Container onClick={onClick} type="button" styleType={styleType}>
            {children}
        </Container>
     );
}
 
export default Button