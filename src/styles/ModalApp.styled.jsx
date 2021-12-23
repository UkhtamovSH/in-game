import styled from "styled-components";

export const ModalDiv = styled.div``;

export const ModalNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  .closeIcon {
    height: 16px;
    cursor: pointer;
  }
`;
export const ModalWrapDiv = styled.div`
  /* width: 320px;
  height: 327px; */
  background: #181818;
  border-radius: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: flex;
  flex-direction: column;
  h2 {
    font-weight: 500;
    font-size: 18px;
    line-height: 100%;
    color: red;
    padding: 20px 50px 10px 50px;
  }
  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    color: #ffffff;
    padding: 5px 50px 15px 50px;
  }
  .modalBtn {
    color: #1787e7;
    cursor: pointer;
    border-top:0.5px solid #474747;
    padding:15px 0px;
  }
`;
export const ModalWrapper = styled.div`
  z-index: 999 !important;
`;

export const ModalContainer = styled.div`
  width: 330px;
  height: 140px;
  background-color: #fff;
  border-radius: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  & p {
    padding: 20px 20px 16px 20px;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    color: #121212;
    border-bottom: 1px solid#DADADE;
  }
  & span {
    color: #eb5757;
    width: 100%;
    /* margin-top:15px; */
    cursor: pointer;
    padding: 15px 0px;
  }
  img {
    width: 114px;
    margin: 0 auto;
  }
`;

export const ModalCancelBtn = styled.div`
  z-index: 99;
  height: 55px;
  background-color: #fff;
  border-radius: 16px;
  position: absolute;
  bottom: -90px;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0px 133px;
  & p {
    font-size: 18px;
    line-height: 100%;
    color: #bdbdbd;
  }
`;
