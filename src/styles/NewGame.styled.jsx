import styled from "styled-components";
export const NewGameWrapper = styled.div`
  padding-bottom: 20px;
  .newGame__Title {
    font-family: "Manrope-Bold", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: #ffffff;
    margin: 24px 0 14px 0;
  }
`;
export const NewGameHeaderFlex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  align-items: center;
  @media (max-width: 8000px) and (min-width: 576px) {
    .div1 {
      padding: 15px;
    }
    .div2 {
      padding: 15px;
      margin: 0 12px;
    }
  }

  @media only screen and (max-width: 576px) and (min-width: 320px) {
    .div1 {
      padding: 8px;
    }
    .div2 {
      padding: 8px;
      margin: 0 8px;
    }
  }
  .div1 {
    font-family: "Manrope-SemiBold", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #bdbdbd;
    background: #333333;
    border-radius: 12px;
    cursor: pointer;
  }

  .div1Main {
    width: 100%;
    p {
      margin-top: 8px;
      text-align: center;
    }
  }
  .div2 {
    text-align: center;
    background: #184e4f;
    border-radius: 80px;
    cursor: pointer;
    p {
      font-family: "Manrope-Bold", sans-serif;
      font-weight: bold;
      line-height: 100%;
      text-align: center;
      color: #ffffff;
      display: block;
      &:nth-child(1) {
        font-size: 44px;
      }
      &:nth-child(2) {
        font-size: 24px;
      }
    }
  }
`;

export const NewGamePositionCard = styled.div`
  background: #333333;
  font-family: "Manrope-Medium", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
  padding: 16px;
  border-radius: 16px;
  .NewGamePositionFlex {
    display: flex;
    justify-content; space-between;
    width: 100%;
    height: 100%;
    align-items: center;
    img {
      cursor: pointer;
    }
    .divIMG{
      width: 48px;
      height: 48px;
      border-radius: 50%;
      object-fit: cover;
    }
    .div1,
    .div2{
      font-family: "Manrope-Medium",sans-serif;
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      color: #FFFFFF;
    }
    .div1Main{
      width: 100%;
      display: flex;
      justify-content: flex-start;
    }
    .div2Main{
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
    @media (max-width: 8000px) and (min-width: 576px) {
      .div1{
        margin-left: 5px;
        text-align: left;
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;  
        width: 200px;
        div{ 
          display: inline-block;
          margin: 0 8px;
          text-align: center;
        }
      }
      .div2{
        margin-left: 5px;
        text-align: end;
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;  
        width: 200px;
        div{ 
          display: inline-block;
          margin: 0 8px;
          text-align: center;
        }
      }
    }

    @media only screen and (max-width: 576px) and (min-width: 320px) {
      .div1{
        margin-left: 5px;
        text-align: left;
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;  
        width: 125px;
        div{ 
          display: inline-block;
          margin: 0 8px;
          text-align: center;
        }
      }
      .div2{
        margin-left: 5px;
        text-align: end;
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;  
        width: 125px;
        div{ 
          display: inline-block;
          margin: 0 8px;
          text-align: center;
        }
      }
    }
  }
`;

export const PossibleModal = styled.div`
  position: fixed;
  top: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  z-index: 999990;
  transform: translate(-50.09%, 0);
  left: 50%;
  width: 100%;
  .possibleModalSub {
    width: 300px;
    text-align: center;
    background-color: #333333;
    box-shadow: 0px 0px 27px 0px rgb(0 0 0);
    border-radius: 12px;
    margin: 5px;
    .sub1 {
      padding: 12px;
      p {
        padding: 8px 0;
        &:nth-child(1) {
          color: red;
        }
      }
    }
    .sub2 {
      border-top: 1px solid rgba(189, 189, 189, 0.4);
      padding: 12px;
      cursor: pointer;
      color: #1787e7;
    }

    .sub3 {
      border-top: 1px solid rgba(189, 189, 189, 0.4);
      color: #1787e7;
      .sub2BtnGroup {
        display: flex;
        justify-content: space-between;
        width: 100%;
        div {
          width: 100%;
          padding: 12px;
          cursor: pointer;
          font-size: 12px;
          &:nth-child(2) {
            border-left: 1px solid rgba(189, 189, 189, 0.4);
            border-right: 1px solid rgba(189, 189, 189, 0.4);
          }
        }
      }
    }
  }
`;
