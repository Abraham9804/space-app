const ItemNavegacion = ({children, iconoActivo, iconoInactivo, activo=false}) =>{
    return <>
        <img src={activo?iconoActivo:iconoInactivo} alt="icono"/>
    </>
}

export default ItemNavegacion