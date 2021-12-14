import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routess from "./router/Routess";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/Global.styled";
import Main from "./layout/Main";
// import { useSelector } from "react-redux";
// import Loader from "./components/sections/Loader";

const theme = {
  appColors: {
    blackGray: "#333333",
    black: "#121212",
    black2: "#252525",
    gray: "#BDBDBD",
    white: "#fff",
    blue: "#039BE5",
    blueTwo: "#1787E7",
    green: "#0EB800",
    red: "#EB5757",
    yellow: "#F6CE42",
    whiteGray: "#252525",
    grayWhite: "#333333",
  },
};

const App = () => {
  // const { loading } = useSelector((state) => state);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Main>
          <GlobalStyle />
          <Router>
            <Routess />
          </Router>
        </Main>
        {/* {loading && <Loader />} */}
      </ThemeProvider>
    </>
  );
};

export default App;
