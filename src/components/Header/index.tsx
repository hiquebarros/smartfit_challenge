import { Container } from "./styles"
import logo from "../../assets/smart-logo.svg"

const Header = () => {
    return (
    <Container>
        <img src={logo}></img>
    </Container>
    );
}
 
export default Header