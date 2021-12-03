import styled from "styled-components";

export const ModalAppSection = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.appColors.black};
`;

export const ModalCountSection = styled.div``;
export const RadioInputFlexTop = styled.div`
  margin: 0 15px;
`;
export const RadioInputFlex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  height: 100%;
  padding: 10px 0;
  border-top: 1px solid #252525;
  border-bottom: 1px solid #252525;
  label {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  [type="radio"]:checked,
  [type="radio"]:not(:checked) {
    position: absolute;
    right: 15px;
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
    right: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: 1px solid #ddd !important;
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
    right: 4px;
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
