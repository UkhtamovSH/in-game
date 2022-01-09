import styled from "styled-components";

export const AppMainContain = styled.div``;
export const Polya = styled.div`
  position: relative;
  width: 100%;
  height: 254px;
  margin: 10px auto;
  border-radius: 16px;
  background-color: #4fd2;
  .layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(18, 18, 18, 0.2) 0%,
      rgba(18, 18, 18, 0.9) 174%
    );
    -webkit-transform: matrix(-1, 0, 0, 1, 0, 0);
    -ms-transform: matrix(-1, 0, 0, 1, 0, 0);
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
  .poolyaImg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 254px;
    display: flex;
    img {
      border-radius: 16px;
      display: flex;
      object-fit: cover;
      width: 100%;
      height: auto;
    }
  }
  a {
    text-decoration: none;
    color: #fff;
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
    position: relative;
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
