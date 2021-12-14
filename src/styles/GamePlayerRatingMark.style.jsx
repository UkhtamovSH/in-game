import styled from "styled-components";

export const GamePlayerRatingMarkWrapp = styled.div`
  padding-top: 15px;
`;
export const RatingIconsStar = styled.div`
i{
  cursor: pointer;
}
`;
export const StarRating = styled.div`
  .star-rating {
    border-bottom: 1px solid #333333;
    margin: 20px 0;
  }
  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 30px;
    margin-right: 5px;
  }
  .on {
    color: #f6ce42;
  }
  .off {
    color: #333333;
  }
`;

export const GamerAppBtn = styled.div`
  &.appBtnGreen {
    position: fixed;
    bottom: 10px;
    right: 0;
  }
`;

export const RatingTextArea = styled.div`
  .gamerTextArea {
    display: flex;
    margin: 0 auto;
    padding: 15px 0;
    background-color: #333333;
    border-radius: 15px;
    outline: none;
    border: none;
    box-sizing: border-box;
    padding-left: 40px;
    color: #fff;
    width: 345px;
    height: 150px;
    font-size: 15px;
  }
  .commentIconImg {
    position: absolute;
    top: 142px;
    left: 65px;
  }
`;
export const RatingMarks = styled.div`
  display: flex;
  gap: 10px;
  border-bottom: 1px solid #333333;
  padding: 20px 0;
  img {
    cursor: pointer;
    width: 20px;
    height: 19px;
  }
`;
