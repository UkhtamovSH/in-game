import styled from "styled-components";

export const GamePlayerContain = styled.div`
  a {
    text-decoration: none;
    color: #fff;
  }
`;
export const GamePlayerRating = styled.div`
  color: #bdbdbd;
  text-align: center;
`;
export const GamePlayer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 15px 0px;
  border-bottom: 1px solid #333333;
`;
export const GamePlayerCont = styled.div`
  display: flex;
  align-items: center;
`;
export const GamePlayerImg = styled.div`
  display: flex;
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
  p {
    position: relative;
    top: 27px;
    right: 20px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #f6ce42;
    border: 2px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const GamePlayerName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  h3 {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
  }
`;

export const GamePlayerRegion = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  p {
    font-weight: normal;
    font-size: 12px;
    line-height: 140%;
    color: #bdbdbd;
  }
  span {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #bdbdbd;
  }
`;

export const GamePlayerIcon = styled.div``;
