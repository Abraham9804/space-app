import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import Imagen from "./Imagen";

const GaleriaStyle = styled.section`
    width: 100%;
    display: flex;
`

const SeccionFluida = styled.section`
    flex-grow: 1;
`

const Galeria = ({fotos = []}) => {
    return <>
            <Tags/>
            <GaleriaStyle>
                <SeccionFluida>
                    <Titulo>Navegue por la galeria </Titulo>
                    {fotos.map(foto => {
                        return <Imagen key={foto.id} url={foto.path}/>
                    })}
                </SeccionFluida>
                <Populares>
                </Populares>
            </GaleriaStyle>
        </>
    
}

export default Galeria