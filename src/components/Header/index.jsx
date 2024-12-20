import styled from "styled-components";
import CampoTexto from "../CampoTexto";


const HeaderStyle = styled.header`
    width: 100%;
    padding: 60px 24px;
    display: flex;
    justify-content: space-between;
    img{
        width: 212px;
    }
`

const Header = () => {
    return  <HeaderStyle>
                <img src="img/logo_blanco.png" alt="logo"/>
                <CampoTexto/>
            </HeaderStyle>
}

export default Header