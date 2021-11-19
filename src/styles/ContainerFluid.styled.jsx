import styled from "styled-components";

export const ContainerFluid = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 568px;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 16px rgb(0 0 0 / 227%);
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.appColors.black};  
  color: ${({ theme }) => theme.appColors.white}; 
`