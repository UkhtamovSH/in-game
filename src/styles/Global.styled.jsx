import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
    background: ${({ theme }) => theme.appColors.gray};    
  }
  html, body {
  margin:0px;
  height:100%;
  }
  *{
    padding: 0;
    margin: 0;
  }
  
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #000; 
  }

  


.appBtnGreen,
.appBtnGreen2,
.appBtnGray,
.appBtnTransparent,
.appBtnWhite{
  font-family: "Manrope-Bold",sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  border-radius: 12px;
  text-decoration: none!important;
  padding: 18px 5px;
  display: block;
  border: none;
  width: -webkit-fill-available;
  cursor: pointer;
}
.appBtnGreen2,
.appBtnGreen{
  background: ${({ theme }) => theme.appColors.green};
  color: ${({ theme }) => theme.appColors.white};
}
.appBtnGreen2{
  margin: 16px;
}
.appBtnGray{
  background: ${({ theme }) => theme.appColors.gray};
  color: ${({ theme }) => theme.appColors.white};
}
.appBtnWhite{
  background: ${({ theme }) => theme.appColors.white};
  color: ${({ theme }) => theme.appColors.gray};
}
.appBtnTransparent{
  margin: 16px;
  background: transparent;
  color: ${({ theme }) => theme.appColors.white};
}
.appBtnGreen2,
.appBtnGreen,
.appBtnGray,
.appBtnTransparent,
.appBtnWhite:focus{
  outline: none;
}
.appHeaderr{
  padding: 10px 20px;
  display: inline-block!important;
}
`

export const InputFormFlex = styled.div`
  display: flex;
  background: ${({ theme }) => theme.appColors.blackGray};
  border-radius: 16px;
  margin: 16px;
  height: 45px;
  & input{
    width: 100%;
    height: auto;
    border: none!important;
    background: ${({ theme }) => theme.appColors.blackGray};
    font-family: "Manrope-Regular",sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    color: ${({ theme }) => theme.appColors.gray};
    
    &:focus{
      outline: none;
      box-shadow: none; 
    }
  }
  & span{
    width: 70px;
    height: auto;
    & span{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
  }
  & .span1{
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }
  & .span2{
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }
  & .special-label {
    display: none;
  }
  & .react-tel-input {
    width: 100%;
    & .form-control{
      height: 100%;
      border: none!important;
    }
  }
`
export const FormUpperDiv = styled.div`
  margin-top: 60px;
`

