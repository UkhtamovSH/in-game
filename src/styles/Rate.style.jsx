import styled from "styled-components";

export const RateWrapper = styled.div`
  padding: 15px;
`;

export const StarDiv = styled.div`
  & .StarDivBorder{
    border-bottom: 1px solid #333333;
    padding: 16px 0;
  }
`;

export const RatingTextArea = styled.div`
  .gamerTextArea {
    display: flex;
    background-color: #333333;
    border-radius: 15px;
    outline: none;
    border: none;
    box-sizing: border-box;
    padding: 20px;
    color: #fff;
    width: 100%;
    height: 150px;
    font-size: 15px;
  }
`;
export const RatingMain = styled.div`
  padding: 20px;
`;

export const Container = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 10px;
  font-size: 60px;
`;
export const Radio = styled.input`
  display: none;
`;
export const Rating = styled.div`
  cursor: pointer;
  font-size: 25px;
`;
