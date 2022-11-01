import {Container} from "./styles"
import icon_hour from "../../assets/icons/icon-hour.png"
import Input from "../Input";
import Button from "../Button";

const Form = () => {
    return ( 
    <Container>
        <div className="container-top">
            <img src={icon_hour} />
            <h5>Horário</h5>
        </div>
        <div className="container-title">
            <h3>Qual período quer treinar?</h3>
        </div>
        <div className="container-inputs">
            <Input shift="Manhã" time={"06:00 às 12:00"}/>
            <Input shift="Tarde" time={"12:01 às 18:00"} />
            <Input shift="Noite" time={"18:01 às 23:00"} />
        </div>
        <div className="container-results">
            <div className="input-box">
                <input type='checkbox' />
                <h5>Exibir unidades fechadas</h5>
            </div>
            <div className="result-box">
                <h5>Resultados encontrados:</h5><h3>0</h3>
            </div>
        </div>
        <div className="container-buttons">
            <Button styleType="1"><p>Encontrar unidade</p></Button>
            <Button styleType="2"><p>Limpar</p></Button>
        </div>
    </Container> 
    );
}
 
export default Form;