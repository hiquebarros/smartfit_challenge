import {Container} from "./styles"
import icon_hour from "../../assets/icons/icon-hour.png"
import Input from "../Input";
import Button from "../Button";
import { useContext } from "react";
import { FilterContext } from "../../providers/contexts/filterContext";
import useFilter from "../../hooks/useFilter";

const Form = () => {

    const { setShiftState, shiftState, setSearch, showClosed, setShowClosed, setAfternoonGyms, setMorningGyms, setNightgGyms, afternoonGyms } = useContext(FilterContext);

    function handleClean(){
        setSearch(false)
        setAfternoonGyms([])
        setMorningGyms([])
        setNightgGyms([])
    }

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
            <Input setShiftState={setShiftState} shiftState={shiftState} shift="Manhã" time={"06:00 às 12:00"}/>
            <Input setShiftState={setShiftState} shiftState={shiftState} shift="Tarde" time={"12:01 às 18:00"} />
            <Input setShiftState={setShiftState} shiftState={shiftState} shift="Noite" time={"18:01 às 23:00"} />
        </div>
        <div className="container-results">
            <div className="input-box">
                <input type='checkbox' onChange={()=> setShowClosed(!showClosed)} checked={showClosed} />
                <h5>Exibir unidades fechadas</h5>
            </div>
            <div className="result-box">
                <h5>Resultados encontrados:</h5><h3></h3>
            </div>
        </div>
        <div className="container-buttons">
            <Button styleType="1" onClick={() => setSearch(true)}><p>Encontrar unidade</p></Button>
            <Button styleType="2" onClick={() => handleClean()}><p>Limpar</p></Button>
        </div>
    </Container> 
    );
}
 
export default Form;