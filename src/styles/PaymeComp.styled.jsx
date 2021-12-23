import styled from "styled-components";

export const PayDiv = styled.div`
  padding: 0 15px;
  /**
  Default Markup
**/

  body {
    background: #f0e5e1;
  }

  .container {
    max-width: 900px;
    margin: 0 auto;
  }
  .colInput .inputPayme {
    margin-top: 10px;
    width: 100%;
    border-radius: 10px;
    font-size: 15px;
    background-color: #252525;
    box-shadow: 0 0 1px 1px #2ecc71;
    border: none;
    outline: none;
    padding: 10px 10px;
    color: #fff;
    box-sizing: border-box;
  }
  label {
    width: 100%;
  }

  .card-input-element {
    display: none;
  }

  .card-input {
    margin: 10px 0;
    padding: 30px;
  }
  .card-input {
    margin: 10px 0;
    padding: 30px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .card-input:hover {
    cursor: pointer;
  }

  .card-input-element:checked + .card-input {
    background-color: #252525;
    box-shadow: 0 0 1px 1px #2ecc71;
  }

  .payCheckTick {
    border-radius: 50%;
    font-size: 25px;
  }
  .payment {
    width: 100%;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 80px;
    left: 50%;
    transform: translate(-50.09%, 0);
    background-color: ${({ theme }) => theme.appColors.black};
    @media (max-width: 8000px) and (min-width: 576px) {
      max-width: 440px;
    }

    @media only screen and (max-width: 576px) and (min-width: 320px) {
      max-width: 94%;
    }
  }
`;
