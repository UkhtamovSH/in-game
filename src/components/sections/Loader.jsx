import React from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";

const skChase = keyframes`
	100% {
		transform: rotate(360deg);
	}
`;
const skChaseDot = keyframes`
	80%,
	100% {
		transform: rotate(360deg);
	}
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  height: 100vh;
  z-index: 9999999;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);

  transform: translate(-50.09%, 0);
  left: 50%;
  top: 0;
  width: 100%;

  @media (max-width: 8000px) and (min-width: 576px) {
    max-width: 450px;
  }

  @media only screen and (max-width: 576px) and (min-width: 320px) {
    max-width: 94%;
  }

  & .sk-chase {
    width: 60px;
    height: 60px;
    position: relative;
    animation: ${skChase} 2.5s infinite linear both;
    & .sk-chase-dot {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      animation: ${skChaseDot} 2s infinite ease-in-out both;
      &:nth-child(1) {
        animation-delay: -1.1s;
      }
      &:nth-child(2) {
        animation-delay: -1s;
      }
      &:nth-child(3) {
        animation-delay: -0.9s;
      }
      &:nth-child(4) {
        animation-delay: -0.8s;
      }
      &:nth-child(5) {
        animation-delay: -0.7s;
      }
      &:nth-child(6) {
        animation-delay: -0.6s;
      }
      &:before {
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        background-color: var(--white);
        border-radius: 5px;
      }
    }
  }
`;
const Styles = createGlobalStyle`
	body {
		overflow: hidden !important;
	}
`;

const Loader = () => {
  return (
    <Container>
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
      <Styles />
    </Container>
  );
};

export default Loader;
