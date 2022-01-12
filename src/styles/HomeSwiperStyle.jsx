import styled from "styled-components";

export const HomeSwiperStyle = styled.div`
  .sliderDivv {
    background-color: #252525;
    width: 100% !important;
    border-radius: 16px;
  }
  .lastPlays {
    label a {
      text-decoration: none;
      color: #fff;
    }
  }
  .slick-slider {
    width: 425px;
    @media (max-width: 8000px) and (min-width: 576px) {
      width: 425px;
    }

    @media only screen and (max-width: 576px) and (min-width: 320px) {
      .slick-list {
        .slick-track {
          .slick-slide {
            div {
              margin: 0 40px;
            }
          }
        }
      }
      width: 320px;
    }
    .slick-list {
      margin: 0 0 0 -45px;
      overflow: visible;
      .slick-track {
        .slick-slide {
          div {
            background-color: #252525;
            border-radius: 16px;
            margin: 0 20px;

            @media only screen and (max-width: 576px) and (min-width: 320px) {
              margin: 0 10px;
            }
          }
        }
      }
    }
  }
  .slick-prev:before,
  .slick-next:before {
    display: none;
  }
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
    @media (max-width: 8000px) and (min-width: 576px) {
      margin: 10px 20px 10px 0 !important;
    }

    @media only screen and (max-width: 576px) and (min-width: 320px) {
      margin: 0 10px 10px 0 !important;
    }
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

  .sliderDiv3 {
    display: flex;
    align-items: center;
    padding: 0 15px;
    .commenterNameTop {
      margin-left: 15px;
    }
    .sliderDiv3Sub1 {
      position: relative;
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
  .sliderDiv2 {
    display: flex;

    @media (max-width: 8000px) and (min-width: 576px) {
      margin: 20px 20px auto 0 !important;
    }

    @media only screen and (max-width: 576px) and (min-width: 320px) {
      margin: 20px 0 0 0 !important;
    }
    .sliderDiv2Sub1 {
      @media (max-width: 8000px) and (min-width: 576px) {
        margin: 0 !important;
      }

      @media only screen and (max-width: 576px) and (min-width: 320px) {
        margin: 0 !important;
      }
      position: relative;
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
    .commenterNameTop {
      background-color: transparent !important;
      border-radius: 0 !important;

      @media (max-width: 8000px) and (min-width: 576px) {
        margin: auto 0 auto -10px !important;
      }

      @media only screen and (max-width: 576px) and (min-width: 320px) {
        margin: auto 0 auto 0 !important;
      }
    }
  }
  .swiperParagraph3,
  .swiperParagraph2 {
    font-family: "Manrope-Regular", sans-serif;
    font-weight: normal;
    font-size: 14px;
    color: #bdbdbd;
    background-color: transparent !important;
    border-radius: 0 !important;
  }
  .swiperParagraph3 {
    padding: 0 15px;
  }
  .swiperParagraph2 {
    @media (max-width: 8000px) and (min-width: 576px) {
      margin: 20px 20px 20px 0 !important;
    }

    @media only screen and (max-width: 576px) and (min-width: 320px) {
      margin: 20px 10px 20px 0 !important;
    }
  }
  .sliderDiv {
    margin: 0 0;
    width: 277px;
    margin-top: 20px;
    padding: 10px 0;
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
        font-size: 10px !important;
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
    img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
    }
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
        }
      }
    }
  }
`;
