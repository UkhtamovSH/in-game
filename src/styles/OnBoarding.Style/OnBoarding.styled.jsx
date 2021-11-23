import styled, { keyframes } from "styled-components";
import AppImg1 from "../../assets/Img/appImg1.png";

const transit = keyframes`
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
`;
export const OnBoardingStyle = styled.div`
  background-image: url(${AppImg1}) !important;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  animation: ${transit} 1s linear forwards;
  transition: ease-in-out 0.35s;
`;


const anima = keyframes`
  0% {
    opacity:0;
    transform: translateY(150px);
  }
  100% {
    opacity:1;
    transform: translateY(50px);
  }
`;
export const OnBoardingLogoStyle = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100%;
  flex-flow: column;

  .appLogo {
    animation: ${anima} 1s linear forwards;
    position: relative;
    p {
      font-family: "Manrope-Regular", sans-serif;
      font-weight: 600;
      font-size: 44px;
      text-align: center;
      color: ${({ theme }) => theme.appColors.white};
      text-decoration: none;
    }
  }
`;
