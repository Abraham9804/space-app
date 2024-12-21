import { BsArrowsAngleExpand } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import styled from "styled-components";

const ImagenContainer = styled.div`
    width: 448px;
    height: 356px;
`
const ImagenStyle = styled.div`
    width: 100%;
    height: 256px;
    background-image:  ${props =>`url(${props.$url})` };
    background-repeat: no-repeat;
    background-size: cover;
`
const FooterImage = styled.div`
    width: 100%;
    height: 100px;
    background-color: #001634;
    padding: 16px 22px;
    display: flex;
    justify-content: space-between;
    align-items: end;
    .contenedor__texto{
        h3{
            font-size: 20px;
            color: white;
        }
        p{
            font-size: 16px;
            color: white;
        }
    }

    .contenedor__botones{
       
    }
    
`


const Imagen = ({url, titulo, fuente}) => {
    return  <ImagenContainer>
                <ImagenStyle $url={url}></ImagenStyle>
                <FooterImage> 
                    <div className="contenedor__texto">
                        <h3>{titulo}</h3>
                        <p>{fuente}</p>
                    </div>
                    <div className="contenedor__botones">
                        <FaRegHeart size="24px" color="white" /><BsArrowsAngleExpand size="24px" color="white"/>
                    </div>
                </FooterImage>
            </ImagenContainer>
}

export default Imagen