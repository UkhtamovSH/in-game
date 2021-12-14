import styled from "styled-components";
import AppImg1 from "../assets/Img/Images.png";

export const ContainerFluid = styled.div`
  display: grid;
  grid-template-areas: "menu";
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 16px rgb(0 0 0 / 227%);
  background: ${({ theme }) => theme.appColors.black};
  color: ${({ theme }) => theme.appColors.white};

  & .item {
    grid-area: menu;
    min-height: 100vh;
  }

  @media (max-width: 8000px) and (min-width: 576px) {
    max-width: 475px;
  }

  @media only screen and (max-width: 576px) and (min-width: 320px) {
    max-width: 100%;
  }
`;

export const AppHeader = styled.div`
  padding: 12px 16px;
  box-sizing: border-box;
  /* transform: translate(-50.09%, 0);
  position: fixed; */
  /* left: 50%;
  top: 0; */
  /* width: 100%; */
  background-color: ${({ theme }) => theme.appColors.black};
  z-index: 4;

  @media (max-width: 8000px) and (min-width: 576px) {
    /* max-width: 450px; */
  }

  @media only screen and (max-width: 576px) and (min-width: 320px) {
    max-width: 94%;
  }
`;
export const AppFooter = styled.div`
  padding: 12px;
  transform: translate(-50.09%, 0);
  position: fixed;
  left: 50%;
  bottom: 0;
  width: 100%;
  height: 58px;
  background-color: ${({ theme }) => theme.appColors.black};
  z-index: 99 !important;
  border-top: 1px solid #565050;

  @media (max-width: 8000px) and (min-width: 576px) {
    max-width: 450px;
  }

  @media only screen and (max-width: 576px) and (min-width: 320px) {
    max-width: 94%;
  }
`;
export const AppFooter2 = styled.div`
  padding: 12px;
  transform: translate(-50.09%, 0);
  position: fixed;
  left: 50%;
  bottom: 0;
  width: 100%;
  height: 58px;
  background-color: ${({ theme }) => theme.appColors.black2};
  z-index: 99 !important;

  @media (max-width: 8000px) and (min-width: 576px) {
    max-width: 450px;
  }

  @media only screen and (max-width: 576px) and (min-width: 320px) {
    max-width: 94%;
  }
`;
export const AppMainWrapp = styled.div`
  margin: 65px 0 100px 0;
`;
export const AppMAIN = styled.div`
  margin-top: 53px;
  margin-bottom: 82px;
  padding-bottom: 20px;
`;

export const AppMAIN2 = styled.div`
  margin-bottom: 82px;
  padding-bottom: 20px;
`;

export const AppHeaderFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
`;
