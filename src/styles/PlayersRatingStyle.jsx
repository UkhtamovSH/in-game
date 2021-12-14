import styled from "styled-components";

export const PlayersRatingMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 16px 0;
  border-bottom: 1px solid #2f2f2f;
  .listID1,
  .listID2,
  .listID3,
  .listID4 {
    border-radius: 50%;
    width: 27px;
    height: 27px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Manrope-Bold", sans-serif;
    font-weight: 500;
    font-size: 13px;
    color: #fff;
  }

  .listID1 {
    background-color: #f6ce42;
  }
  .listID2 {
    background-color: #bdbdbd;
  }
  .listID3 {
    background-color: #c5a432;
  }
  .listID4 {
    background-color: transparent;
  }

  p {
    margin-bottom: 0;
  }

  .playersRatingSubFlex {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    .userImg {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      position: relative;
      margin: 0 12px;
      img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        object-fit: cover;
      }
      .posName {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 2;
        border: 1px solid #000;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        background-color: ${({ theme }) => theme.appColors.yellow};
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: "Manrope-Bold", sans-serif;
        font-weight: bold;
        font-size: 12px;
        color: #121212;
      }
    }
  }
  .countFlex {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    text-align: center;
    & div:nth-child(2) {
      margin-left: 15px;
    }
  }

  .text1 {
    font-family: "Manrope-Medium", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
  }
  .text22,
  .text2 {
    font-family: "Manrope-Regular", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: #bdbdbd;
  }
  .text22Flex {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .dot {
    margin: 0 8px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #bdbdbd;
  }
  .nameDiv {
    margin: 0 8px 0 0;
  }

  @media only screen and (max-width: 576px) and (min-width: 320px) {
    .text22Flex {
      flex-direction: column;
      align-items: flex-start;
    }
    .dot {
      display: none;
    }
    .text1 {
      font-size: 14px;
    }
    .userImg {
      margin: 0 6px !important;
    }
    .countFlex div:nth-child(2) {
      margin-left: 4px !important;
    }
  }
`;
