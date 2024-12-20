import styled from "styled-components";
const ItemNavegacionStyles = styled.li`
    font-size: 24px;
    margin-bottom: 30px;
    line-height: 28px;
    display: flex;
    align-items: center;
    gap: 16px;
    color: ${props => props.$estatus ? "#7B78E5": "#D9D9D9"};
    font-family: ${props => props.$estatus ? "GandhiSansBold": "GandhiSansRegular"};
`

const ItemNavegacion = ({children, iconoActivo, iconoInactivo, activo=false}) =>{
    return  <ItemNavegacionStyles $estatus={activo}>
                <img src={activo?iconoActivo:iconoInactivo} alt="icono"/>
                {children}
            </ItemNavegacionStyles >
}

export default ItemNavegacion