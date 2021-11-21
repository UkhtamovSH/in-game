import styled from "styled-components";

export const LoginSection = styled.div`
  position: relative;
  min-height: 100%;
  & .bgImgLogin{
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
    min-height: 100%;
    width: 100%;
  }
`
export const LoginSectionSub = styled.div`
  position: relative;
  z-index: 2;
  padding-top: 30px;
`

export const LogRegFooterLinkFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-family: "Manrope-Regular",sans-serif;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #828282;
  & a{
    color: ${({ theme }) => theme.appColors.green};
    text-decoration: none;
  }
`

export const FlexcheckBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  
.form-group input {
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;
  cursor: pointer;
}

.form-group label {
  position: relative;
  cursor: pointer;
  font-family: "Manrope-Regular",san-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: ${({ theme }) => theme.appColors.gray};
}

.form-group label:before {
  content:'';
  -webkit-appearance: none;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.appColors.green};
  border-radius: 8px;
  padding: 10px;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  margin-right: 5px;
  margin-top: -2px;
}

.form-group input:checked + label:after {
  content: '';
  display: block;
  position: absolute;
  top: 2px;
  left: 9.5px;
  width: 4px;
  height: 8px;
  border: solid ${({ theme }) => theme.appColors.black};
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
.form-group input:checked + label:before{
  background: ${({ theme }) => theme.appColors.green};
}
a{
  font-family: "Manrope-SemiBold",sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  text-align: right;
  color: ${({ theme }) => theme.appColors.gray};
  text-decoration: none;
}
`