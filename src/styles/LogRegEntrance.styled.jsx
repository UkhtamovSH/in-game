import styled from "styled-components";
import AppImg1 from "../assets/Img/appImg1.png";

export const LogRegEntranceStyle = styled.div`
  background-image: url(${AppImg1}) !important;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  /* position: relative; */
`;

export const FlexBottom = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 100%; 
  & div{
    width: 100%;
  }
`;

export const AppLogo = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%; 
  & p{
    font-family: "Manrope-Regular",sans-serif;
    font-weight: 600;
    font-size: 44px;
    text-align: center;
    color: ${({ theme }) => theme.appColors.white}
  }
  & div > div {
    text-align: center;
  }
`