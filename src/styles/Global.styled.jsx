import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    background: ${({ theme }) => theme.appColors.gray};    
  }
  @font-face {
  font-family: "Manrope-Bold";
  src: url("../assets/fonts/Manrope-Bold.ttf") format("truetype");
  font-style: normal;
}
  @font-face {
  font-family: "Manrope-ExtraBold";
  src: url("../assets/fonts/Manrope-ExtraBold.ttf") format("truetype");
  font-style: normal;
}
  @font-face {
  font-family: "Manrope-Medium";
  src: url("../assets/fonts/Manrope-Medium.ttf") format("truetype");
  font-style: normal;
}
  @font-face {
  font-family: "Manrope-Regular";
  src: url("../assets/fonts/Manrope-Regular.ttf") format("truetype");
  font-style: normal;
}
  @font-face {
  font-family: "Manrope-SemiBold";
  src: url("../assets/fonts/Manrope-SemiBold.ttf") format("truetype");
  font-style: normal;
}

.appBtnGreen,
.appBtnGray,
.appBtnWhite{
  font-family: "Manrope-Bold",sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  border-radius: 12px;
  text-decoration: none!important;
  padding: 18px 5px;
}
.appBtnGreen{
  background: ${({ theme }) => theme.appColors.green};
  color: ${({ theme }) => theme.appColors.white};
}
.appBtnGray{
  background: ${({ theme }) => theme.appColors.gray};
  color: ${({ theme }) => theme.appColors.white};
}
.appBtnWhite{
  background: ${({ theme }) => theme.appColors.white};
  color: ${({ theme }) => theme.appColors.gray};
}
.appBtnGreen,
.appBtnGray,
.appBtnWhite:focus{
  
  outline: none;
}

`

export default GlobalStyle;