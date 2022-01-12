import styled from "styled-components";

export const AllGamesContainer = styled.div`
  padding: 20px;
`;
export const AllGamesMain = styled.div`
  .sliderImg {
    display: flex;
    justify-content: space-between;
    /* padding: 10px; */
    img {
      margin: 0 4px;
      width: 90px;
      height: 60px;
      border: none !important;
      object-fit: cover;
      border-radius: 8px;
      @media only screen and (max-width: 576px) and (min-width: 320px) {
        width: 70px;
        height: 70px;
      }
    }
  }

  .commandResult {
    margin: 0 0 !important;
    display: flex;
    justify-content: space-between;
    padding: 5px 5px;
    .comandaLogo {
      text-align: center;
      @media (max-width: 8000px) and (min-width: 576px) {
        &:nth-child(1) {
          width: 100px;
        }
        &:nth-child(3) {
          width: 100px;
        }
      }

      @media only screen and (max-width: 576px) and (min-width: 320px) {
        &:nth-child(1) {
          width: 70px;
        }
        &:nth-child(3) {
          width: 70px;
        }
      }
    }
  }
  .sliderDiv {
    margin: 20px 0;
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
    @media only screen and (max-width: 576px) and (min-width: 320px) {
      p {
        font-weight: normal;
        font-size: 12px !important;
        text-align: center;
      }
    }
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
