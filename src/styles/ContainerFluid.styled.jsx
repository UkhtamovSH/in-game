import styled from "styled-components";

export const ContainerFluid = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 16px rgb(0 0 0 / 227%);
  background: ${({ theme }) => theme.appColors.black};  
  color: ${({ theme }) => theme.appColors.white}; 
  
  @media (max-width: 6150px) and (min-width: 1900px) {
    max-width: 1450px;
  }
  
  @media (max-width: 4650px) and (min-width: 1900px) {
    max-width: 1100px;
  }
  
  @media (max-width: 3100px) and (min-width: 1900px) {
    max-width: 690px;
  }
  
  @media (max-width: 2400px) and (min-width: 1900px) {
    max-width: 490px;
  }
  
  @media (max-width: 2200px) and (min-width: 1900px) {
    max-width: 440px;
  }
  
  @media (max-width: 1900px) and (min-width: 1600px) {
    max-width: 400px;
  }

  @media (max-width: 1600px) {
  max-width: 375px;
  }

`