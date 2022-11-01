import { Container } from "./styles"
import logo from "../../assets/smart-logo.svg"

const Footer = () => {
    return ( 
        <Container>
            <img src={logo} />
            <p>Todos os direitos reservados - 2020</p>
        </Container>
     );
}
 
export default Footer;