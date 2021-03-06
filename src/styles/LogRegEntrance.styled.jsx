import styled from "styled-components";
import AppImg1 from "../assets/Img/appImg1.png";

export const LogRegEntranceStyle = styled.div`
  background-image: url(${AppImg1}) !important;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const FlexBottom = styled.div`
  transform: translate(-50.09%, 0);
  position: fixed;
  left: 50%;
  bottom: 15px;
  width: 100%;
  z-index: 99 !important;

  @media (max-width: 8000px) and (min-width: 576px) {
    max-width: 451px;
  }

  @media only screen and (max-width: 576px) and (min-width: 320px) {
    max-width: 94%;
  }
`;

export const AppLogo = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  & p {
    font-family: "Manrope-Regular", sans-serif;
    font-weight: 600;
    font-size: 44px;
    text-align: center;
    color: ${({ theme }) => theme.appColors.white};
  }
  & div > div {
    text-align: center;
  }
`;
