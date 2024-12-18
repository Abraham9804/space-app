import styled from "styled-components";
import ItemNavegacion from "./ItemNavegacion";

const ListaStyle = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`


const BarraLateral = () => {
    return  <aside>
                <nav>
                    <ListaStyle>
                        <ItemNavegacion iconoActivo={"iconos/home-activo.png"} iconoInactivo={"iconos/home-inactivo.png"} activo>
                            Inicio
                        </ItemNavegacion>
                    </ListaStyle>
                        
                   
                </nav>
            </aside>
}

export default BarraLateral