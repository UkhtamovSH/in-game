import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Routess from "./router/Routess"
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/Global.styled";
import Main from './layout/Main'

const theme = {
  appColors: {
    black: '#121212',
    gray: '#BDBDBD',
    white: '#fff',
    blue: '#039BE5',
    blueTwo: '#1787E7',
    green: '#0EB800',
    red: '#EB5757',
    yellow: '#F6CE42',
  }
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <GlobalStyle />
        <Router>
          <Routess />
        </Router>
      </Main>
    </ThemeProvider>
  )
}

export default App
