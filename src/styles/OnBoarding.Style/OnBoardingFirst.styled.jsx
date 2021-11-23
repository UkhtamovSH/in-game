import styled, { keyframes } from "styled-components";
import AppImg2 from "../../assets/Img/appImg2.png";

const transit = keyframes`
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
`;

export const OnBoardingFirst = styled.div`
  background-image: url(${AppImg2}) !important;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  position: relative;

  animation: ${transit} 1s linear forwards;
  transition: ease-in-out 0.35s;
  & .dots {
    display: flex;
    justify-content: center;
    margin-bottom: 32px;
    gap: 4px;
    & .firstDot {
      background-color: ${({ theme }) => theme.appColors.green};
      width: 27px;
      height: 8px;
      border-radius: 20px;
    }
    & .secondDot {
      background-color: ${({ theme }) => theme.appColors.gray};
      width: 8px;
      height: 8px;
      border-radius: 20px;
    }
    & .thirdDot {
      background-color: ${({ theme }) => theme.appColors.gray};
      width: 8px;
      height: 8px;
      border-radius: 20px;
    }
  }
  & .boardingFirstWrap {
    padding: 0 15px;
    transform: translate(0px, 460px);
  }
  h1 {
    font-family: "Manrope", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 140%;
    text-align: center;
  }
  p {
    font-family: "Manrope", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    color: #bdbdbd;
  }
  & button {
    background: #0eb800;
    border-radius: 12px;
    height: 56px;
    width: 343px;
    outline: none;
    border: none;
    margin-top: 48px;
    cursor: pointer;
    cursor: pointer;
    span {
      font-family: "Manrope", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 22px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: #ffffff;
    }
  }
`;
