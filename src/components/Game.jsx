import { useEffect } from "react";
import Timer from "react-compound-timer/build";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { setMinutes } from "../redux/actions";
import {
  AppFooter,
  AppHeader,
  AppHeaderFlex,
  AppMAIN,
} from "../styles/ContainerFluid.styled";

const TimerDiv = styled.div`
  background: #333333;
  border-radius: 24px;
  padding: 24px;
  .timerDivSub {
    font-family: "Manrope-Bold", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 87px;
    text-align: center;
    color: #ffffff;
  }

  .timerDivText {
    font-family: "Manrope-Medium", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    color: #a8a8a8;
  }
`;

const Game = () => {
  const { minutes, gameActive } = useSelector((state) => state);

  let history = useNavigate();

  // useEffect(() => {
  //   if (!gameActive) {
  //     history("/newgame");
  //   }
  // }, [gameActive]);

  const TimerComp = () => (
    <Timer
      initialTime={minutes ? minutes * 60000 : null}
      direction="backward"
      checkpoints={[
        {
          time: 0,
          callback: () => console.log("gg"),
        },
      ]}
    >
      {() => (
        <>
          {minutes > 59 ? (
            <>
              <Timer.Hours /> {`${" : "}`}
            </>
          ) : (
            ""
          )}
          <Timer.Minutes /> : <Timer.Seconds />
        </>
      )}
    </Timer>
  );

  return (
    <>
      <AppHeader>
        <AppHeaderFlex>
          <div />
          <div className="">
            <span>Новая игра</span>
          </div>
          <div />
        </AppHeaderFlex>
      </AppHeader>
      <AppMAIN style={{ padding: "0 15px" }}>
        <TimerDiv>
          <div className="timerDivText">До конца матча осталось</div>
          <div className="timerDivSub">
            <TimerComp />
          </div>
        </TimerDiv>
      </AppMAIN>
      <AppFooter>
        <button className="appBtnGreen">Завершить матч</button>
      </AppFooter>
    </>
  );
};

export default Game;
