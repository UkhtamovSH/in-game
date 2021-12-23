import styled from "styled-components";

export const PayHistoryDiv = styled.div`
  background-color: #252525;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom:16px;
  & span {
    font-size: 14px;
    line-height: 140%;
    color: #ffffff;
  }
  & .status {
    display: flex;
    justify-content: space-between;
    label {
      font-weight: 600;
      font-size: 14px;
      line-height: 100%;
      color: #0eb800;
    }
    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 150%;
      color: #bdbdbd;
    }
    span {
      font-weight: 600;
      font-size: 14px;
      line-height: 100%;
      text-align: right;
      color: #ffffff;
    }
  }
`;
