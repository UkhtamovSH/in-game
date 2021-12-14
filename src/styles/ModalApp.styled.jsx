import styled from "@emotion/styled";

export const ModalWrapper = styled.div`
  z-index: 999 !important;
`;

export const ModalContainer = styled.div`
  width: 330px;
  height: 140px;
  background-color: #fff;
  border-radius: 16px;
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translate(-50%, -60%);
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
`;

export const ModalCancelBtn = styled.div`
  z-index: 99;
  /* width: 330px; */
  height: 55px;
  background-color: #fff;
  border-radius: 16px;
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translate(-50%, -40%);
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
