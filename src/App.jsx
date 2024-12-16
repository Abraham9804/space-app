import styled from "styled-components"
import GlobalStyle from "./components/GlobalStyles"

const FondoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  height: 100vh;
`



function App() {
  
  return (
    <>
      <FondoGradiente>
        <GlobalStyle/>
      </FondoGradiente>
    </>
  )
}

export default App