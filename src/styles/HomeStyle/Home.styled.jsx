import styled from "styled-components";
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
  bottom: 60px;
  left: 0;
  transform: translateY(0 200px);
  display: flex;
  justify-content: center;
  & .wins {
    width: 343px;
    justify-content: space-between;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.appColors.whiteGray};
    border-radius: 64px 16px 16px 64px;
    padding: 13px;
    box-sizing: border-box;
    .rightWinWrapper {
      padding-right: 25px;
    }
    .rightWin {
      display: flex;
      gap: 10px;
    }
    .topWinContain {
      display: flex;
      justify-content: space-between;
      gap: 10px;
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
      width: 88px;
      height: 88px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      background-color: ${({ theme }) => theme.appColors.grayWhite};
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
    align-items: center;
    gap: 10px;

    img {
      z-index: 2;
    }
    & .ageAvatar {
      display: flex;
      align-items: center;
      justify-content: center;
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
    }
    & .beOnline {
      display: flex;
      align-items: center;
      gap: 5px;
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
  gap: 15px;
  .firstTime {
    width: 104px;
    height: 158px;
    background-color: ${({ theme }) => theme.appColors.whiteGray};
    border-radius: 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    & .watchTitle {
      text-align: center;
      h1 {
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
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
