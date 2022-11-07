import { Container, Box, Content } from "./styles"
import forbidden_fountain from "../../assets/icons/forbidden-fountain.png"
import forbidden_lockerroom from "../../assets/icons/forbidden-lockerroom.png"
import partial_fountain from "../../assets/icons/partial-fountain.png"
import partial_lockerroom from "../../assets/icons/partial-lockerroom.png"
import recommended_mask from "../../assets/icons/recommended-mask.png"
import recommended_towel from "../../assets/icons/recommended-towel.png"
import required_lockerroom from "../../assets/icons/required-lockerroom.png"
import required_mask from "../../assets/icons/required-mask.png"
import required_towel from "../../assets/icons/required-towel.png"

const Legend = () => {
    return (
        <Container>
            <div className="container-title">
                <h2>Medidas de segurança</h2>
            </div>
            <Content>
                <Box>
                    <div className="box-title">
                        <h2>Máscara</h2>
                    </div>
                    <div className="box-imgs">
                        <img src={required_mask} />
                        <img src={recommended_mask} />
                    </div>
                </Box>
                <Box>
                    <div className="box-title">
                        <h2>Toalha</h2>
                    </div>
                    <div className="box-imgs">
                        <img src={required_towel} />
                        <img src={recommended_towel} />

                    </div>
                </Box>
                <Box>
                    <div className="box-title">
                        <h2>Bebedouro</h2>
                    </div>
                    <div className="box-imgs">
                        <img src={partial_fountain} />
                        <img src={forbidden_fountain} />
                    </div>
                </Box>
                <Box>
                    <div className="box-title">
                        <h2>Vestiário</h2>
                    </div>
                    <div className="box-imgs">
                        <img src={required_lockerroom} />
                        <img src={partial_lockerroom} />
                        <img src={forbidden_lockerroom} />
                    </div>
                </Box>
            </Content>
        </Container>
    );
}

export default Legend;