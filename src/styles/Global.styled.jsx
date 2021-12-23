import styled, { createGlobalStyle, keyframes } from "styled-components";

const animation = keyframes`
	0% {
		left: -150px;
	}
	100% {
		left: calc(100% + 150px);
	}
`;
export const GlobalStyle = createGlobalStyle`
  body{
    background: ${({ theme }) => theme.appColors.gray};    
    font-family: "Manrope",sans-serif;
    user-select:none;
  }
  body .ReactModal__Overlay--after-open {
    background-color:#000000b3 !important;
    z-index:999!important;
  }
  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 200ms ease-in-out;
}

.ReactModal__Overlay--after-open{
    opacity: 1;
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
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #000; 
  }
  .AppLoader2 {
    margin-left: 15px;
    border: 4px solid #f3f3f3;
    border-radius: 50%;
    border-top: 4px solid #666464;
    width: 40px;
    height: 40px;
   -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
  } 

  .beforeAnimation {
    position: relative;
    &:before {
      content: "";
      width: 150px;
      height: 100%;
      position: absolute;
      left: -30px;
      top: 0;
      transform: rotate(120deg);
      background: linear-gradient(
        90deg,
        #000 0px,
        rgba(134, 130, 130, 0.8) 75px,
        #000 150px
      );
      animation: ${animation} 0.7s infinite ease-in-out;
    }}
  
/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
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
`;

export const StylesHidden = createGlobalStyle`
	body {
		overflow: hidden !important;
	}
`;

export const InputFormFlex = styled.div`
  display: flex;
  background: ${({ theme }) => theme.appColors.blackGray};
  border-radius: 16px;
  margin: 16px;
  height: 45px;
  .spanInput,
  .spanInput2 {
    width: 100%;
    align-items: center;
    display: flex;
    font-family: "Manrope-Regular", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #bdbdbd;
  }

  .spanInput2 {
    border-radius: 16px;
    padding: 0 16px;
  }

  .spanInput {
    cursor: pointer;
  }
  .react-datepicker__input-container {
    display: flex;
    height: 100%;
  }
  .react-datepicker-popper {
    z-index: 2 !important;
  }

  & input,
  select {
    width: 100%;
    height: auto;
    border: none !important;
    background: ${({ theme }) => theme.appColors.blackGray};
    font-family: "Manrope-Regular", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    color: ${({ theme }) => theme?.appColors.gray};

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
  & span {
    width: 70px;
    height: auto;
    & span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
  }
  & .span1 {
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }
  & .span2 {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }
  & .special-label {
    display: none;
  }
  & .react-tel-input {
    width: 100%;
    & .form-control {
      height: 100%;
      border: none !important;
    }
  }
`;
export const FormUpperDiv = styled.div`
  margin-top: 60px;
`;
export const FormUpperDivSub = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  .containerValidation {
    height: 50px;
    width: 300px;
  }

  .character {
    line-height: 50px;
    font-size: 36px;
    color: white;
    background-color: rgba(255, 255, 255, 0.2);
    border: 1px solid transparent;
    border-radius: 8px;
    margin-left: 8px;
  }

  .character:first-child {
    margin-left: 0;
  }

  .character--inactive {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .character--selected {
    border: 1px solid white;
  }
`;
export const CustomRadio = styled.div`
  [type="radio"]:checked,
  [type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  [type="radio"]:checked + label,
  [type="radio"]:not(:checked) + label {
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
  }
  [type="radio"]:checked + label:before,
  [type="radio"]:not(:checked) + label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: 1px solid #ddd;
    border-radius: 100%;
    background: transparent;
  }
  [type="radio"]:checked + label:after,
  [type="radio"]:not(:checked) + label:after {
    content: "";
    width: 12px;
    height: 12px;
    background: ${({ theme }) => theme.appColors.green};
    position: absolute;
    top: 4px;
    left: 4px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  [type="radio"]:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  [type="radio"]:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

export const SContainer = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  z-index: 9999999;
  transform: translate(-50.09%, 0);
  left: 50%;
  width: 100%;
  & .beforeAnimation {
    position: relative;
    &:before {
      content: "";
      width: 150px;
      height: 100%;
      position: absolute;
      left: -30px;
      top: 0;
      transform: rotate(120deg);
      background: linear-gradient(
        90deg,
        #000 0px,
        rgba(134, 130, 130, 0.8) 75px,
        #000 150px
      );
      animation: ${animation} 0.7s infinite ease-in-out;
    }
  }
  @media (max-width: 8000px) and (min-width: 576px) {
    max-width: 450px;
  }

  @media only screen and (max-width: 576px) and (min-width: 320px) {
    max-width: 94%;
  }
`;
export const SContainerHeader = styled.div`
  box-sizing: border-box;
  transform: translate(-50.09%, 0);
  position: fixed;
  left: 50%;
  top: 0;
  width: 100%;
  z-index: 4;
  @media (max-width: 8000px) and (min-width: 576px) {
    max-width: 450px;
  }

  & .subSkeletonHeader {
    overflow: hidden;
    margin-top: 15px;
    height: 60px;
    width: 100%;
    background-color: #484343;
    border-radius: 12px;
  }
`;
export const SContainerFooter = styled.div`
  box-sizing: border-box;
  transform: translate(-50.09%, 0);
  position: fixed;
  left: 50%;
  bottom: 0;
  width: 100%;
  z-index: 4;

  @media (max-width: 8000px) and (min-width: 576px) {
    max-width: 450px;
  }

  & .subSkeletonFooter {
    overflow: hidden;
    margin-bottom: 15px;
    height: 60px;
    width: 100%;
    background-color: #484343;
    border-radius: 12px;
  }
`;
