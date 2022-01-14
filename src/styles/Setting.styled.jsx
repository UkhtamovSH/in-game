import styled from "styled-components";

export const AutoSelectPlayerWrapp = styled.div`
  padding: 12px 16px;
`;

export const AutoSelectPlayer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
  border-bottom: 0.1px solid #5f5f5f;
  & img {
    cursor: pointer;
    padding-right: 15px;
  }
`;

export const SettingsLanguageFlex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  border-top: 0.1px solid #5f5f5f;
  border-bottom: 0.1px solid #5f5f5f;
  div {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 10px 0px;
    cursor: pointer;
    p {
      text-align: center;
    }
    &:nth-child(2) {
      border-left: 0.1px solid #5f5f5f;
      border-right: 0.1px solid #5f5f5f;
    }
  }
`;
export const AutoSelectPlayerAccount = styled.div`
  padding-top: 20px;
  & span {
    color: #eb5757;
    cursor: pointer;
  }
`;
export const AutoSelectSave = styled.div`
  padding: 10px 10px;
  transform: translate(-50.09%, 0);
  position: fixed;
  left: 50%;
  bottom: 5px;
  background-color: #121212;
  & .appBtnGreen {
    width: 435px;
  }
`;
