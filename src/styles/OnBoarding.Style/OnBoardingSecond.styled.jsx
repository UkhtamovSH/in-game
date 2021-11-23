import styled from "styled-components";
import AppImg3 from "../../assets/Img/appImg3.png";

export const OnBoardingSecondStyle = styled.div`
  background-image: url(${AppImg3}) !important;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  position: relative;
  & .boardingFirstWrap {
    padding: 0 15px;
    transform: translate(0px, 460px);
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
  }
`;
