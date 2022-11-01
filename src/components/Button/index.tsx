import { ReactNode } from "react";
import { Container } from "./styles"

interface IButtonProps {
    children: ReactNode
    styleType: string
}

const Button = ({children, styleType}:IButtonProps) => {
    return ( 
        <Container styleType={styleType}>
            {children}
        </Container>
     );
}
 
export default Button