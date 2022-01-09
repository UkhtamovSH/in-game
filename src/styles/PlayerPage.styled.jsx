import styled from "styled-components";

export const PlayerAvatarDiv = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const AvatarImgDiv = styled.div``;
export const AvatarWrapDiv = styled.div`
  display: flex;
  /* justify-content: space-between; */
  gap: 20px;
  align-items: center;
`;

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
`;
export const HomeContainer = styled.div`
  position: relative;
  left: 0;
  & .wins {
    padding: 0 15px;
    display: grid;
    grid-template-columns: auto auto;
    background-color: ${({ theme }) => theme.appColors.whiteGray};
    border-radius: 16px 64px 64px 16px;
    padding: 13px;
    box-sizing: border-box;

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
      width:90px;
      height:90px;
      margin:0 auto;
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

  & .avatarWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    .avatarImg {
      z-index: 2;
      border-radius: 50%;
      margin: 0 auto;
    }
    & .ageAvatar {
      display: flex;
      align-items: center;
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
  justify-content: space-between;

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
