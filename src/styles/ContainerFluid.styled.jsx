import styled from "styled-components";
import AppImg1 from "../assets/Img/Images.png";

export const ContainerFluid = styled.div`
  display: grid;
  grid-template-areas: "menu";
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 16px rgb(0 0 0 / 227%);
  background: ${({ theme }) => theme.appColors.black};
  color: ${({ theme }) => theme.appColors.white};

  & .item {
    grid-area: menu;
    min-height: 100vh;
  }

  @media (max-width: 8000px) and (min-width: 576px) {
    max-width: 475px;
  }

  @media only screen and (max-width: 576px) and (min-width: 320px) {
    max-width: 100%;
  }
`;

export const AppHeader = styled.div`
  padding: 12px 16px;
  box-sizing: border-box;
  transform: translate(-50.09%, 0);
  position: fixed;
  left: 50%;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.appColors.black};
  z-index: 4;

  @media (max-width: 8000px) and (min-width: 576px) {
    max-width: 475px;
  }

  @media only screen and (max-width: 576px) and (min-width: 320px) {
    max-width: 94%;
  }
`;
export const AppFooter = styled.div`
  padding: 12px;
  transform: translate(-50.09%, 0);
  position: fixed;
  left: 50%;
  bottom: 0;
  width: 100%;
  height: 58px;
  background-color: ${({ theme }) => theme.appColors.black};
  z-index: 99 !important;
  border-top: 1px solid #565050;

  @media (max-width: 8000px) and (min-width: 576px) {
    max-width: 451px;
  }

  @media only screen and (max-width: 576px) and (min-width: 320px) {
    max-width: 94%;
  }
`;
export const AppFooter2 = styled.div`
  padding: 12px;
  transform: translate(-50.09%, 0);
  position: fixed;
  left: 50%;
  bottom: 0;
  width: 100%;
  height: 58px;
  background-color: ${({ theme }) => theme.appColors.black2};
  z-index: 99 !important;

  @media (max-width: 8000px) and (min-width: 576px) {
    max-width: 451px;
  }

  @media only screen and (max-width: 576px) and (min-width: 320px) {
    max-width: 94%;
  }
`;
export const AppMainWrapp = styled.div`
  margin: 65px 0 100px 0;
`;
export const AppMAIN = styled.div`
  margin-top: 53px;
  margin-bottom: 82px;
  padding-bottom: 20px;
  .on {
    color: #f6ce42;
  }
  .off {
    color: #333333;
  }
  /* .infiniteScroll {
  margin: 0 0 65px 0;
}


  .worldPlayers {
    padding: 5px 15px;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 20px  ;
    .numberLine{
      width: 20px;
      height: 20px;
      padding: 3px;
    background: #F6CE42;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 500;
    }
    .avatar{
      display: flex;
      align-items: center;
      gap: 3px;
    }
    .avatarFiltrImg {
      img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
      }
      span {
    position: relative;
    background-color: #F6CE42;
    bottom: 5px;
    right: 17px;
    border-radius: 50%;
    padding: 0 5px;
    color: black;
      }
}

    }
    .winsWrap{
      display: flex;
      gap: 10px;
      justify-content: flex-end;
      flex: 3;
    }
    .winsPersant,
    .markPersant
    {
      span {
        color: #bdbdbd;
        font-weight: normal;
        font-size: 12px;
      }
    }
    .AvatarName {
      h5 {
        font-weight: 500;
        font-size: 16px;
      }
    }
    .avatarAge {
      display: flex;
      align-items: center;
      gap: 10px;
      padding-top: 5px;
      p {
        color: #bdbdbd;
        font-weight: normal;
        font-size: 12px;
      }
      span {
        width: 5px;
        height: 5px;
        background-color: #bdbdbd;
        border-radius: 50%;
      }
    }
  }
  .filterOfPlayers {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    .colorP {
      cursor: pointer;
      color: #fff;
      border-bottom: 1px solid #0eb800;
      padding: 5px 50px;
      transition: all 0.3s ease;
    }
    .changeP {
      color: #4f4f4f;
      cursor: pointer;
      padding: 5px 50px;
      transition: all 0.3s ease;
    }
  }
  a {
    text-decoration: none;
    color: #fff;
    .polya {
      width: 450px;
      background-image: url(${AppImg1});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      height: 254px;
      margin: 10px auto;
      border-radius: 16px;
      background-color: #4fd2;
      .poolyaImg img {
        width: 450px;
      }
      .address {
        padding: 20px;
        position: relative;
        top: 100px;
        left: auto;
      }
      .stadion {
        padding: 20px;
        display: flex;
        justify-content: space-between;
        .leftFree {
          background-color: #f6ce42;
          padding: 5px 8px;
          border-radius: 8px;
          p {
            color: black;
          }
        }
        .rightFree {
          display: flex;
          gap: 10px;
          padding: 5px 8px;
          background: #4f4f4f;
          border-radius: 8px;
          img {
            height: 15px;
          }
        }
      }
    } */
`;

export const StadionPage = styled.div`
  margin: 60px 0;

  .btnPozvonit {
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
export const AppMAIN2 = styled.div`
  margin-bottom: 82px;
  padding-bottom: 20px;
`;

export const AppHeaderFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
`;
