import styled from "styled-components";

export const PlayerAvatarDiv = styled.div``;

export const HomeStyle = styled.div`
  .lastPlays {
    display: flex;
    justify-content: space-between;
    img {
      width: 8px;
      height: 10px;
    }
  }
  label {
    padding: 15px 20px;
    cursor: pointer;
  }
  & .topSetting {
    background-color: ${({ theme }) => theme.appColors.whiteGray};
    width: 100%;
    border-radius: 0px 0px 32px 32px;
    display: flex;
    justify-content: space-between;
    padding: 15px 20px;
    box-sizing: border-box;
    align-items: flex-end;
    position: relative;
    z-index: 2;
    padding-top: 68px;
    & div {
      img {
        cursor: pointer;
      }
    }
  }
`;
export const HomeContainer = styled.div`
  position: relative;
  left: 0;
  & .wins {
    margin: 0 15px;
    display: grid;
    grid-template-columns: auto auto;
    background-color: ${({ theme }) => theme.appColors.whiteGray};
    border-radius: 64px 16px 16px 64px;
    padding: 13px;
    box-sizing: border-box;
    
    @media only screen and (max-width: 576px) and (min-width: 320px) {
      grid-template-columns: auto!important;
      background-color: transparent;
    }

  }

    .rightWinWrapper {
      display: flex;
      justify-content:space-between;
      margin:0 auto;
      gap: 40px;
     
    }

    .topWinContain {
      display: flex;
      gap: 5px;
      padding-top: 10px;
      &:nth-child(2) {
        margin-top: 15px;
      }
      .topWin {
        & p:nth-child(1) {
          font-size: 16px;
          line-height: 22px;
        }
        & p:nth-child(2) {
          color: ${({ theme }) => theme.appColors.gray}!important;
          font-weight: normal;
          font-size: 12px;
          line-height: 16px;
        }
      }
      img {
        height: 20px;
        width: 20px;
      }
    }
    & .leftWin {
      border-radius: 50%;
      width: 120px;
      height: 120px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      background-color: ${({ theme }) => theme.appColors.grayWhite};
      
      @media only screen and (max-width: 576px) and (min-width: 320px) {
        width: 100px;
        height: 100px;
       margin:0 auto;
      }
      & p:nth-child(1) {
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 33px;
      }
      & p:nth-child(2) {
        color: ${({ theme }) => theme.appColors.gray}!important;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 140%;
        text-align: center;
      }
    }
  }
  & img {
    width: 120px;
    height: 120px;
  }

  & .avatarWrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    position: relative;
    bottom: 60px;
    @media only screen and (max-width: 576px) and (min-width: 320px) {
      & h2 {
      font-size: 18px!important;
      margin: 0 15px!important;
    }
    }
    .avatarImg {
      z-index: 2;
      border-radius: 50%;
      margin: 0 auto;
    }
    & .ageAvatar {
      display: flex;
      align-items: center;
      margin: 0 auto;
      gap: 5px;
      span {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.appColors.white};
      }
      p {
        font-family: "Manrope-Medium", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 140%;
        color: ${({ theme }) => theme.appColors.gray};
      }
    }
    & h2 {
      font-family: "Manrope-Bold", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 33px;
      text-align: center;
      margin: 0 auto;
    }
    & .beOnline {
      display: flex;
      align-items: center;
      gap: 5px;
      margin: 0 auto;
      & span:nth-child(1) {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.appColors.green};
      }
      & span:nth-child(2) {
        color: ${({ theme }) => theme.appColors.green};
        font-family: "Manrope", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
      }
    }
  }
`;
export const HomeTimeStyle = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  .firstTime {
    .firstTimeSub {
      img {
        width: 64px;
        height: 64px;
      }
    }
    width: 104px;
    min-height: 158px;
    /* padding: 20px; */
    border-radius: 52px;
    background-color: ${({ theme }) => theme.appColors.whiteGray};
    /* border-radius: 100px; */
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 576px) and (min-width: 320px) {
      width: auto;
      height: auto;
      background-color: transparent;
      & .watchTitle {
        text-align: center;
        h1 {
          font-weight: normal !important;
          font-size: 14px !important;
        }
      }
    }

    & .watchTitle {
      margin-top: 5px;
      text-align: center;
      h1 {
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 140%;
      }
      span {
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 140%;
        color: #bdbdbd;
      }
    }
    & .watch {
      padding: 15px 18px;
      background-color: #255c5c;
      border-radius: 50%;
      img {
        width: 30px;
        height: 30px;
        color: #26dbdc;
      }
    }
  }
`;

export const SHomeContainer = styled.div`
  .sHomeHeader {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 110px;
    border-radius: 0px 0px 32px 32px;
    background-color: #484343;
    overflow: hidden;
  }
  .sHomeHeaderRound {
    z-index: -1;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: -60px;
    div {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background-color: #484343;
      overflow: hidden;
    }
  }
  .sHomeHeaderRound2 {
    z-index: -1;
    display: flex;
    justify-content: center;
    width: 100%;
    div {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background-color: #484343;
      overflow: hidden;
    }
  }
  .sHomeMain1Flex {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 16px;
    div {
      width: 70px;
      height: 16px;
      border-radius: 12px;
      background-color: #484343;
      overflow: hidden;
    }
  }
  .sHomeMain2Flex {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 16px;
    div {
      width: 90%;
      height: 16px;
      border-radius: 16px;
      background-color: #484343;
      overflow: hidden;
    }
  }

  .sHomeMain3Flex {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 16px;
    div {
      width: 90%;
      height: 114px;
      border-radius: 64px 16px 16px 64px;
      background-color: #484343;
      overflow: hidden;
    }
  }
  .sHomeMain4Flex {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 16px;
    div {
      width: 33.3%;
      height: 160px;
      border-radius: 52px;
      background-color: #484343;
      overflow: hidden;
      margin: 0 25px;
    }
  }

  .sHomeMain5Flex {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 16px;
    div {
      width: 90%;
      height: 114px;
      border-radius: 16px;
      background-color: #484343;
      overflow: hidden;
    }
  }
`;
