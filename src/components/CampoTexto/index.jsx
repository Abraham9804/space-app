import styled from "styled-components";

const CampoTextoStyle = styled.input`
    width: 40%;
    height: 56px;
    border-radius: 10px;
    border: 1px solid #C98CF1;
    background-color: transparent;
    background-image: url('img/search.png');
    background-position: 97% center;
    background-repeat: no-repeat;
    padding: 10px 20px;
    color: white;
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: white;
    }
`


const CampoTexto = () => {
    return  <CampoTextoStyle type="text" placeholder="Que estas buscando?"/>        
}

export default CampoTexto