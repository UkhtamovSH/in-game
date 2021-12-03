import styled from "styled-components";

export const ProfileHeaderFlex = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 15px;
  & .profileHeaderFlexSub1 {
    img {
      width: 65px;
      height: 65px;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  & .profileHeaderFlexSub2 {
    margin-left: 20px;
    .text12Flex {
      display: flex;
      justify-content: flex-start;
    }
    p,
    span {
      font-family: "Manrope-Regular", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 150%;
    }
    p {
      color: ${({ theme }) => theme.appColors.gray};
      margin-bottom: 10px;
    }
    .text1 {
      color: ${({ theme }) => theme.appColors.yellow};
    }
    .text2 {
      color: ${({ theme }) => theme.appColors.red};
      margin-left: 25px;
      cursor: pointer;
    }
  }
`;

export const ProfileRadioDiv = styled.div`
  display: flex;
  padding: 0 15px;
  margin: 25px 0;
  div label {
    font-family: "Monrope-Regular", sans-serif;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    color: ${({ theme }) => theme.appColors.white};
  }
  div:nth-child(2) {
    margin-left: 100px;
  }
`;
