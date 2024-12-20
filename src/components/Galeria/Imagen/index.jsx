import styled from "styled-components";

const ImagenContainer = styled.div`
    width: 448px;
    height: 256px;
`
const ImagenStyle = styled.div`
    background-image:  ${props =>`url(${props.$url})` };
    background-repeat: no-repeat;
    background-size: cover;
`

const Imagen = ({url}) => {
    return  <ImagenContainer>
                <ImagenStyle $url={url}>

                </ImagenStyle>
            </ImagenContainer>
}

export default Imagen