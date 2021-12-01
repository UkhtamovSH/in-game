import styled from "styled-components";

export const HomeSwiperStyle = styled.div`
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
      width: 390px;
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
    margin: 0 0 !important;
    padding: 10px 10px;

    img {
      width: 90px;
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
    margin: 0 0 !important;
    width: 277px;
    margin-top: 20px;
    padding: 10px 0;
     p {
      text-align: center;
      padding: 15px 0px;
      cursor: pointer;
      text-decoration: none;
      color: #fff;

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
    img {
      width: 42px;
      height: 42px;
      border-radius:50%;
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
          margin: 20px 8px 0 8px;
        }
      }
    }
  }
`;
