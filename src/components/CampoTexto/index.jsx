import styled from "styled-components";

const CampoTextoStyles = styled.input`
    /*width: 30%;
    background-color: none;
    border-radius: 10px;
    border: 2px solid orange;*/

    /* Barra de búsqueda */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 12px 16px;
gap: 365px;

position: absolute;
width: 652px;
height: 56px;
left: 766px;
top: 64px;

border-radius: 10px;

`

const CampoTexto = () => {
    return <CampoTextoStyles type="text" placeholder="Que estas buscando?"/>
}

export default CampoTexto