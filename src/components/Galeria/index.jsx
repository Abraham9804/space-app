import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";

const GaleriaStyle = styled.section`
    width: 100%;
    display: flex;
`

const SeccionFluida = styled.section`
    flex-grow: 1;
`

const Galeria = () => {
    return <>
            <Tags/>
            <GaleriaStyle>
                <SeccionFluida>
                    <Titulo>Navegue por la galeria </Titulo>
                </SeccionFluida>
                <Populares>
                </Populares>
            </GaleriaStyle>
        </>
    
}

export default Galeria