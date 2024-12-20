import styled from "styled-components"
import GlobalStyle from "./components/GlobalStyles"
import Header from "./components/Header"
import BarraLateral from "./components/BarraLateral"
import Banner from "./components/Banner"
import bannerImg from "./assets/banner.png" //enviamos la url como una variable en los props
import Galeria from "./components/Galeria"
const FondoGradiente = styled.div`
  width: 100%;
  height: 100vh;
`

const AppContainer = styled.div`
  width: 100%;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
  padding: 24px;
`

const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
`



function App() {
  
  return (
    <>
      <FondoGradiente>
        <GlobalStyle/>
        <AppContainer >
          <Header/>
          <MainContainer >
            <BarraLateral/>
            <ContenidoGaleria>
              <Banner texto="La galeria mas completa del espacio" backgroundImage={bannerImg}/>
              <Galeria/>
            </ContenidoGaleria>
          </MainContainer>
        </AppContainer>
      </FondoGradiente>
    </>
  )
}

export default App
