import styled from "styled-components";
import AppImg1 from "../assets/Img/Images.png";

export const AppMainContain = styled.div``;
export const Polya = styled.div`
  width: 450px;
  background-image: url(${AppImg1});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 254px;
  margin: 10px auto;
  border-radius: 16px;
  background-color: #4fd2;
  a {
    text-decoration: none;
    color: #fff;
  }
  .poolyaImg img {
    width: 450px;
  }
  .address {
    padding: 20px;
    position: relative;
    top: 100px;
    left: auto;
  }

  .stadion {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    .leftFree {
      background-color: #f6ce42;
      padding: 5px 8px;
      border-radius: 8px;
      p {
        color: black;
      }
    }
    .rightFree {
      display: flex;
      gap: 10px;
      padding: 5px 8px;
      background: #4f4f4f;
      border-radius: 8px;
      img {
        height: 15px;
      }
    }
  }
`;
