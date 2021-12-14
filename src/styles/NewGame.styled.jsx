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
  .div1Main {
    width: 100%;
    p {
      margin-top: 8px;
      text-align: center;
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
    padding: 15px;
    cursor: pointer;
  }
  .div2 {
    text-align: center;
    background: #184e4f;
    border-radius: 80px;
    padding: 15px;
    margin: 0 12px;
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
    .div1{
      width: 100%;
      margin-right: 5px;
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
    .div2Main{
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
    .div2{
      margin-left: 5px;
      text-align: end;
      overflow-x: auto;
      overflow-y: hidden;
      white-space: nowrap;  
      width: 200px;
        /* -webkit-overflow-scrolling: touch;
        &::-webkit-scrollbar {
          display: none;
        } */
      div{ 
        display: inline-block;
        margin: 0 8px;
        text-align: center;
      }
    }
  }
`;
