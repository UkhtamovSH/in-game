import styled from "styled-components";

export const CommentsWrapper = styled.div`
  padding: 10px 15px;
`;

export const SliderDiv = styled.div`
  background-color: #252525;
  border-radius: 16px;
  padding: 10px 15px;
  .commenterImg {
    display: flex;
    gap: 20px;
    margin-bottom: 15px;
    .commenterName {
      .ageAvatar2 {
        display: flex;
        align-items: baseline !important;
        gap: 5px;
        margin-top: 5px;
        span {
          width: 5px;
          height: 5px;
          background-color: #fff;
          border-radius: 50%;
        }
      }
    }

    img {
      border-radius: 50%;
      width: 48px;
      height: 48px;
    }
  }
`;
