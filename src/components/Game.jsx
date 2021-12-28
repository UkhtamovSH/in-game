import { useEffect, useState } from "react";
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
import ChoosenPlayers from "./sections/newgame/ChoosenPlayers";
import ClubImg1 from "../assets/svg/clubImg1.svg";
import ClubImg2 from "../assets/svg/clubImg2.svg";
import { GetAuthInstance } from "../helpers/httpClient";
import { get } from "lodash";

const TimerDiv = styled.div`
  background: #333333;
  border-radius: 24px;
  padding: 35px 24px;
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

const GameHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  height: 100%;
  text-align: center;
  margin: 8px 0 24px 0;
  img {
    width: 42px;
    height: 49px;
  }
  div:nth-child(2) {
    margin: 0 40px;
    .shot {
      font-family: "Manrope-Bold", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      text-align: center;
      color: #ffffff;
    }
  }
  .dateText {
    font-family: "Manrope-Regular", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: #bdbdbd;
  }
`;

// const TimerComptest = ({
//   start,
//   resume,
//   pause,
//   stop,
//   reset,
//   timerState,
//   getTime,
// }) => {
//   const isHour = parseInt(getTime() / (1000 * 60 * 60));
//   const isMinute = parseInt(getTime() / (1000 * 60));
//   const isSecond = parseInt(getTime() / 1000);
//   const time = getTime();
//   console.log(time, "gg");
//   const dispatch = useDispatch();
//   // const [state, setState] = useState('start')
//   useEffect(() => {
//     dispatch(setMinutes(time));
//   }, [time]);
//   return (
//     <div>
//       {isHour ? <Timer.Hours /> + " : " : null}
//       {isMinute ? <Timer.Minutes /> : null} :{" "}
//       {isSecond ? <Timer.Seconds /> : null}
//     </div>
//   );
// };

const Game = () => {
  const [clubs, setClubs] = useState([]);
  const [nextUrlClubs, setNextUrlClubs] = useState("");
  const { minutes, gameActive } = useSelector((state) => state);
  const [modalCount, setModalCount] = useState(null);
  const [modal, setModal] = useState(false);

  const [shotClub1, setShotClub1] = useState(0);
  const [shotClub2, setShotClub2] = useState(0);

  const toggleModalCount = (i) => setModalCount(i);
  const toggleModal = () => setModal(!modal);

  let history = useNavigate();

  // useEffect(() => {
  //   if (!gameActive) {
  //     history("/newgame");
  //   }
  // }, [gameActive]);

  const resultDataGame = JSON.parse(sessionStorage.getItem("datagame"));

  let time = resultDataGame?.game_time;

  const TimerComp = () => (
    <Timer
      // initialTime={1 * 60000}
      initialTime={time ? time * 60000 : null}
      direction="backward"
      checkpoints={[
        {
          time: 0,
          callback: () => console.log("gg"),
        },
      ]}
    >
      {({ start, resume, pause, stop, reset, timerState, getTime }) => {
        const isHour = parseInt(getTime() / (1000 * 60 * 60));
        const isMinute = parseInt(getTime() / (1000 * 60));
        const isSecond = parseInt(getTime() / 1000);
        return (
          <div>
            {isHour ? (
              <>
                <Timer.Hours /> :{" "}
              </>
            ) : null}
            {isMinute ? (
              <>
                <Timer.Minutes /> :{" "}
              </>
            ) : null}
            {isSecond ? <Timer.Seconds /> : null}
          </div>
        );
      }}
    </Timer>
  );

  const getClubs = () => {
    GetAuthInstance()
      .get("/api/v1/football-club/?per_page=10000")
      .then((res) => {
        if (res.status === 200) {
          setClubs(res.data.results);
        }
      })
      .catch(() => {
        setClubs([]);
      });
  };

  const countClubsShot = (user) => {
    let getClub1 = get(resultDataGame?.game_club, "0", []);
    let findIDFilter1 = getClub1.users.filter((item) => item.user === user);
    let findID1 = get(findIDFilter1, "0.user", []);

    let getClub2 = get(resultDataGame?.game_club, "1", []);
    let findIDFilter2 = getClub2.users.filter((item) => item.user === user);
    let findID2 = get(findIDFilter2, "0.user", []);

    if (findID1 === user) {
      setShotClub1(shotClub1 + 1);
      toggleModal();
    } else if (findID2 === user) {
      setShotClub2(shotClub2 + 1);
      toggleModal();
    }
  };

  useEffect(() => {});

  useEffect(() => {
    getClubs();
    countClubsShot();
  }, []);

  const getClub1 = get(resultDataGame?.game_club, "0", []);
  const getClub2 = get(resultDataGame?.game_club, "1", []);

  const fClub1 = clubs.filter((item) => item.id === getClub1.club);
  const getFclub1 = get(fClub1, "0", []);

  const fClub2 = clubs.filter((item) => item.id === getClub2.club);
  const getFclub2 = get(fClub2, "0", []);

  return (
    <>
      {!modal ? (
        <>
          <AppHeader>
            <AppHeaderFlex>
              <div />
              <div className="">
                <span>Игра началась</span>
              </div>
              <div />
            </AppHeaderFlex>
          </AppHeader>
          <AppMAIN style={{ padding: "0 15px" }}>
            <GameHeader>
              <div className="">
                <img
                  src={getFclub1?.image ? getFclub1?.image : ClubImg1}
                  alt=""
                />
                <p>{getFclub1?.name ? getFclub1?.name : "Club name"}</p>
              </div>
              <div className="">
                <p className="shot">
                  {shotClub1}:{shotClub2}
                </p>
                <p className="dateText">{resultDataGame?.date}</p>
              </div>
              <div className="">
                <img
                  src={getFclub2?.image ? getFclub2?.image : ClubImg2}
                  alt=""
                />
                <p>{getFclub2?.name ? getFclub2?.name : "Club name"}</p>
              </div>
            </GameHeader>

            <TimerDiv>
              <div className="timerDivText">До конца матча осталось</div>
              <div className="timerDivSub">
                <TimerComp />
              </div>
            </TimerDiv>

            <button
              className="appBtnYellow"
              onClick={() => {
                toggleModal();
                toggleModalCount(1);
              }}
              style={{ marginTop: "43px" }}
            >
              Гол!
            </button>
          </AppMAIN>
          <AppFooter>
            <button className="appBtnGreen">Завершить матч</button>
          </AppFooter>
        </>
      ) : (
        <>
          {modal ? (
            <>
              {modalCount === 1 ? (
                <ChoosenPlayers
                  toggleModal={toggleModal}
                  resultDataGame={resultDataGame}
                  countClubsShot={countClubsShot}
                />
              ) : null}
            </>
          ) : null}
        </>
      )}
    </>
  );
};

export default Game;
