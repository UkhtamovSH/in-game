import styled from "styled-components";

export const TitleSubTitleStyle = styled.div`
  padding: 15px;
  & p:nth-child(1) {
    font-family: "Manrope-ExtraBold", sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 140%;
    text-align: center;
    color: ${({ theme }) => theme.appColors.white};
  }
  & p:nth-child(2) {
    font-family: "Manrope-Medium", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    color: ${({ theme }) => theme.appColors.gray};
    margin-top: 10px;
  }
`;

const TitleSubTitle = ({ title, subtitle }) => (
  <TitleSubTitleStyle>
    <p>{title}</p>
    <p>{subtitle}</p>
  </TitleSubTitleStyle>
);
export default TitleSubTitle;
