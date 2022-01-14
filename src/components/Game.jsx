/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import Timer from "react-compound-timer/build";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router";
import styled from "styled-components";
// import { setMinutes } from "../redux/actions";
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
import { PlayersRatingMain } from "../styles/PlayersRatingStyle";
import { StylesHidden } from "../styles/Global.styled";
import { PossibleModal } from "../styles/NewGame.styled";
import { useNavigate } from "react-router";

const TimerDiv = styled.div`
  background: #333333;
  border-radius: 24px;
  .timerDivSub {
    font-family: "Manrope-Bold", sans-serif;
    font-style: normal;
    font-weight: bold;
    line-height: 87px;
    text-align: center;
    color: #ffffff;
  }

  @media (max-width: 8000px) and (min-width: 576px) {
    padding: 35px 24px;
    .timerDivSub {
      font-size: 64px;
    }
  }

  @media only screen and (max-width: 576px) and (min-width: 320px) {
    padding: 18px;
    .timerDivSub {
      font-size: 34px;
    }
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

const Game = () => {
  const [clubs, setClubs] = useState([]);
  const [countPlayers, setCountPlayers] = useState([]);
  // const [nextUrlClubs, setNextUrlClubs] = useState("");
  // const { minutes, gameActive } = useSelector((state) => state);
  const [modalCount, setModalCount] = useState(null);
  const [modal, setModal] = useState(false);

  const [shotClub1, setShotClub1] = useState(0);
  const [shotClub2, setShotClub2] = useState(0);

  const toggleModalCount = (i) => setModalCount(i);
  const toggleModal = () => setModal(!modal);

  const [possibleModal, setPossibleModal] = useState(false);

  const togglePossibleModal = () => setPossibleModal(!possibleModal);

  let history = useNavigate();

  // useEffect(() => {
  //   if (!gameActive) {
  //     history("/newgame");
  //   }
  // }, [gameActive]);

  const resultDataGame = JSON.parse(sessionStorage.getItem("datagame"));

  let time = resultDataGame?.game_time * 60000;
  const gameRef = useRef(time);
  const TimerComp = () => (
    <Timer
      initialTime={gameRef.current ? gameRef.current : null}
      direction="backward"
      checkpoints={[
        {
          time: 0,
          callback: () => console.log(""),
        },
      ]}
    >
      {({ getTime }) => {
        const isHour = parseInt(getTime() / (1000 * 60 * 60));
        const isMinute = parseInt(getTime() / (1000 * 60));
        const isSecond = parseInt(getTime() / 1000);
        const time = getTime();
        gameRef.current = time;
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
    const fClub1 = clubs.filter((item) => item.id === getClub1.club);
    const getFclub1 = get(fClub1, "0", []);

    let findIDFilter1 = {};
    get(getClub1, "users", []).forEach((item) => {
      if (item.user === user) {
        findIDFilter1 = {
          ...item,
          time: gameRef.current,
          club: getFclub1.name,
        };
      }
    });
    let findID1 = get(findIDFilter1, "user", 0);

    let getClub2 = get(resultDataGame?.game_club, "1", []);
    const fClub2 = clubs.filter((item) => item.id === getClub2.club);
    const getFclub2 = get(fClub2, "0", []);
    let findIDFilter2 = {};
    get(getClub2, "users", []).forEach((item) => {
      if (item.user === user) {
        findIDFilter2 = {
          ...item,
          time: gameRef.current,
          club: getFclub2.name,
        };
      }
    });
    let findID2 = get(findIDFilter2, "user", 0);

    if (findID1 === user) {
      setShotClub1(shotClub1 + 1);
      setCountPlayers([...countPlayers, findIDFilter1]);
      toggleModal();
    } else if (findID2 === user) {
      setShotClub2(shotClub2 + 1);
      setCountPlayers([...countPlayers, findIDFilter2]);
      toggleModal();
    }
  };

  const getClub1 = get(resultDataGame?.game_club, "0", []);
  const getClub2 = get(resultDataGame?.game_club, "1", []);

  const fClub1 = clubs.filter((item) => item.id === getClub1.club);
  const getFclub1 = get(fClub1, "0", []);

  const fClub2 = clubs.filter((item) => item.id === getClub2.club);
  const getFclub2 = get(fClub2, "0", []);

  const handleFinish = () => {
    const finishGame = {
      game: resultDataGame?.id,
      time: parseInt(gameRef.current),
      game_club1: {
        "game-club": resultDataGame?.gameClub1ID,
        score: shotClub1,
        ball: resultDataGame?.totalPrice,
        users: get(resultDataGame?.game_club, "0.users", []),
      },
      game_club2: {
        "game-club": resultDataGame?.gameClub2ID,
        score: shotClub2,
        ball: resultDataGame?.totalPrice2,
        users: get(resultDataGame?.game_club, "1.users", []),
      },
    };

    const date = resultDataGame.date;
    window.sessionStorage.setItem(
      "finishGame",
      JSON.stringify({ ...finishGame, countPlayers, date })
    );
    history(`/gameover/${resultDataGame?.id}`);
  };

  useEffect(() => {
    getClubs();
  }, []);

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
          <AppMAIN style={{ padding: "15px" }}>
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

            {countPlayers.length > 0
              ? countPlayers.map((countPlayer, index) => {
                  const { img, position, name, time, club } = countPlayer;

                  var hours = parseInt(time / (1000 * 60 * 60));
                  var minutes = parseInt(time / (1000 * 60)) % 60;
                  var seconds = ((time % 60000) / 1000).toFixed(0) - 1;

                  return (
                    <PlayersRatingMain key={index}>
                      <div className="">
                        <div className="playersRatingSubFlex">
                          <div className="userImg">
                            <img src={img} alt="" />
                            {position === 1 ? (
                              <p className="posName">G</p>
                            ) : position === 2 ? (
                              <p className="posName">D</p>
                            ) : position === 4 ? (
                              <p className="posName">F</p>
                            ) : position === 3 ? (
                              <p className="posName">M</p>
                            ) : null}
                          </div>
                          <div className="nameDiv">
                            <p className="text1">
                              {name !== null
                                ? name.length > 21
                                  ? name.substr(0, 20) + "..."
                                  : name
                                : "Анонимный игрок"}
                            </p>
                            <div className="text22Flex">
                              <p className="text22">Команда: {club}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="countFlex">
                          <div className="">
                            <p className="text1">Время</p>
                            <p className="text2">
                              {hours > 0 ? `${hours} :` : null} {minutes} :{" "}
                              {seconds}
                            </p>
                          </div>
                        </div>
                      </div>
                    </PlayersRatingMain>
                  );
                })
              : null}

            <button
              className="appBtnYellow"
              onClick={() => {
                toggleModal();
                toggleModalCount(1);
              }}
              style={{ marginTop: "23px" }}
            >
              Гол!
            </button>
          </AppMAIN>
          <AppFooter>
            <button className="appBtnGreen" onClick={togglePossibleModal}>
              Завершить матч
            </button>
          </AppFooter>
          {possibleModal ? (
            <PossibleModal>
              <div className="">
                <div className="possibleModalSub">
                  <div className="sub1">
                    <p>Вы действительно хотите завершить данный матч?</p>
                  </div>
                  <div className="sub3">
                    <div className="sub2BtnGroup">
                      <div
                        onClick={() => {
                          handleFinish();
                        }}
                      >
                        Завершить
                      </div>
                      <div style={{ width: "0px", padding: "0" }} />
                      <div onClick={togglePossibleModal}>Отменить</div>
                    </div>
                  </div>
                </div>
              </div>
              <StylesHidden />
            </PossibleModal>
          ) : null}
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
