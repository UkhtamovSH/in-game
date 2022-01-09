import styled from "styled-components";

export const StadionPage = styled.div`
  margin: 60px 0;
  .btnPozvonit {
    z-index: 1;
    padding: 10px 10px;
    transform: translate(-50.09%, 0);
    position: fixed;
    left: 50%;
    bottom: 0;
    background-color: #121212;
    .appBtnGreen {
      width: 450px;
      z-index: 4;
      box-sizing: border-box;
      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
  h3 {
    font-weight: 600;
    font-size: 24px;
  }
  p {
    font-size: 16px;
    line-height: 130%;
    color: #bdbdbd;
    padding-top: 10px;
  }
  .aboutStadion {
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    .polyaMap {
      .polyaInMap {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        iframe {
          border-radius: 20px;
        }
      }
    }
    .polyaMark {
      .priceMark {
        padding: 10px 0;
        .priceStar {
          display: flex;
          gap: 10px;
        }
        display: flex;
        gap: 10px;
        img {
          height: 20px;
        }
      }
    }
  }
  .swiper {
    width: 475px;
    margin-top: 30px;

    img {
      width: 450px;
      height: 185px;
      border-radius: 16px;
      margin: 0 0px;
    }
    .slick-prev:before,
    .slick-next:before {
      display: none;
    }
    .slick-slider {
      .slick-list {
        padding: 0px 20px !important;
        .slick-slide {
          /* padding-left: 40px; */
        }
      }
    }
  }
  .backIcon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    transform: translate(-50.09%, 0);
    position: fixed;
    left: 50%;
    top: 0;
    z-index: 99;
    background-color: #121212;
    width: 475px;
    box-sizing: border-box;

    img {
      height: 15px;
      cursor: pointer;
    }
    h3 {
      margin: 0 auto;
      font-weight: bold;
      font-size: 16px;
      line-height: 22px;
    }
  }
`;
