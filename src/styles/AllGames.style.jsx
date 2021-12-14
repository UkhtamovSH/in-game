import styled from "styled-components";

export const AllGamesContainer = styled.div`
  padding: 20px;
`;
export const AllGamesMain = styled.div`
  .sliderImg {
    display: flex;
    justify-content: space-between;
    margin: 0 0 !important;
    padding: 0px 20px;

    img {
      /* width: 90px; */
      height: 60px;
    }
  }

  .commandResult {
    margin: 0 0 !important;
    display: flex;
    justify-content: space-between;
    padding: 5px 5px;
  }
  .sliderDiv {
    margin: 20px 0 !important;
    padding: 10px 0;
    background-color: #252525;
    border-radius: 16px;
    a {
      text-align: center;
      padding: 15px 0px;
      cursor: pointer;
      text-decoration: none;
      color: #fff;
      img {
        border-radius: 12px;
      }
    }
    .swiperParagraph {
      text-align: left;
      padding: 5px 20px;
      font-size: 14px;
      line-height: 160%;
      color: #bdbdbd;
    }
  }
  .comandaLogo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 10px !important;
    img {
      width: 42px;
      height: 42px;
    }
    p {
      font-weight: bold;
      font-size: 14px;
      padding-top: 10px;
    }
    h3 {
      font-weight: bold;
      font-size: 22px;
      line-height: 44px;
      text-align: center;
    }
    span {
      width: 62px;
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      color: ${({ theme }) => theme.appColors.gray};
    }
  }
  .commenterImg {
    display: flex;
    .commenterName {
      h5 {
        font-weight: 500;
        font-size: 16px;
      }
      .ageAvatar2 {
        display: flex;
        justify-content: space-between;
        margin: 0 !important;
        p {
          font-size: 12px;
          line-height: 140%;
          color: #bdbdbd;

        }
        span {
          border-radius: 50%;
          width: 4px;
          height: 4px;
          background-color: #bdbdbd;
          border: 1px solid;
          display: flex;
          align-items: center;
          margin: 20px 8px 0 8px;
        }
      }
    }
  }
`;
