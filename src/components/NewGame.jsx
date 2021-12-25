import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppFooter2,
  AppHeader,
  AppHeaderFlex,
  AppMAIN,
} from "../styles/ContainerFluid.styled";
import Navigation from "./sections/Navigation";
import Endurance from "../assets/svg/Endurance.svg";
import Player1 from "../assets/svg/player1.svg";
import Player2 from "../assets/svg/player2.svg";
import {
  NewGameHeaderFlex,
  NewGamePositionCard,
  NewGameWrapper,
  PossibleModal,
} from "../styles/NewGame.styled";
import MinutesList from "../components/sections/newgame/MinutesList";
import { useDispatch, useSelector } from "react-redux";
import { setMinutes } from "../redux/actions";
import TeamsNameList from "./sections/newgame/TeamsNameList";
import { get } from "lodash";
import { GetAuthInstance } from "../helpers/httpClient";
import PlayersNameList from "./sections/newgame/PlayersNameList";
import { StylesHidden } from "../styles/Global.styled";

const NewGame = () => {
  const [modalCount, setModalCount] = useState(null);
  const [modal, setModal] = useState(false);
  const [preLoading, setPreLoading] = useState(false);
  const [typingTimeOut, setTypingTimeOut] = useState(0);

  //clubs
  const [clubs, setClubs] = useState([]);
  const [searchClubs, setSearchClubs] = useState("");
  const [nextUrlClubs, setNextUrlClubs] = useState("");
  const [active, setActive] = useState();
  const [active2, setActive2] = useState();
  const [teamOne, setTeamOne] = useState({});
  const [teamTwo, setTeamTwo] = useState({});

  //players list
  const [players, setPlayers] = useState([]);
  const [searchPlayers, setSearchPlayers] = useState("");
  const [nextUrlPlayers, setNextUrlPlayers] = useState("");
  const [activePlayers, setActivePlayers] = useState();

  //for team one players
  const [teamOneGoalkeeper, setTeamOneGoalkeeper] = useState({});
  const [teamOneDefender, setTeamOneDefender] = useState([]);
  const [teamOneMidfielder, setTeamOneMidfielder] = useState([]);
  const [teamOneForward, setTeamOneForward] = useState([]);

  //for team team players
  const [teamTwoGoalkeeper, setTeamTwoGoalkeeper] = useState({});
  const [teamTwoDefender, setTeamTwoDefender] = useState([]);
  const [teamTwoMidfielder, setTeamTwoMidfielder] = useState([]);
  const [teamTwoForward, setTeamTwoForward] = useState([]);

  //possible error modal :)
  const [possibleModalCount, setPossibleModalCount] = useState(null);
  const [possibleModal, setPossibleModal] = useState(false);

  // const [activeTeam] = useState({
  //   clubOneActive: 1,
  //   clubTwoActive: 2,
  // });

  // const { clubOneActive, clubTwoActive } = activeTeam;

  const [typeTeam] = useState({
    Goalkeeper: 1,
    Defender: 2,
    Midfielder: 3,
    Forward: 4,
  });

  const { Goalkeeper, Defender, Midfielder, Forward } = typeTeam;

  const togglePossibleModal = () => setPossibleModal(!possibleModal);

  const findPossiblePlayerPos = (target = 1, type = 0) => {
    if (target === 1) {
      if (teamOne?.id === undefined) {
        setPossibleModal(true);
        setModal(false);
      } else if (teamOne?.id) {
        if (typeTeam.Goalkeeper === type) {
          console.log("Goalkeeper teamOne");
          console.log(type);
        } else if (typeTeam.Defender === type) {
          console.log("Defender teamOne");
          console.log(type);
        } else if (typeTeam.Midfielder === type) {
          console.log("Midfielder teamOne");
          console.log(type);
        } else if (typeTeam.Forward === type) {
          console.log("Forward teamOne");
          console.log(type);
        }
      }
    } else if (target === 2) {
      if (teamTwo?.id === undefined) {
        setPossibleModal(true);
        setModal(false);
      } else if (teamTwo?.id) {
        if (typeTeam.Goalkeeper === type) {
          console.log("Goalkeeper teamTwo");
          console.log(type);
        } else if (typeTeam.Defender === type) {
          console.log("Defender teamTwo");
          console.log(type);
        } else if (typeTeam.Midfielder === type) {
          console.log("Midfielder teamTwo");
          console.log(type);
        } else if (typeTeam.Forward === type) {
          console.log("Forward teamTwo");
          console.log(type);
        }
      }
    }
  };

  let history = useNavigate();

  const toggleModal = () => {
    setModal(!modal);
  };
  const toggleCountModal = (i) => {
    setModalCount(i);
  };

  const { minutes } = useSelector((state) => state);
  const dispatch = useDispatch();

  const munitesList = [];
  for (let x = 15; x < 301; x++) {
    munitesList.push({ name: x });
  }

  const takeMinute = (mL) => {
    dispatch(setMinutes(mL));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataGame = {
      game_club: [
        {
          club: teamOne?.id,
          number: 1,
          // users: [teamOneWratar, ...teamOnejashitnik],
        },

        {
          club: teamTwo?.id,
          number: 2,
          // users: ,
        },
      ],
      game_time: minutes,
    };
    GetAuthInstance()
      .post("/api/v1/game/", dataGame)
      .then((res) => {
        history("/game");
      })
      .catch((err) => {});
  };

  useEffect(() => {
    setSearchClubs("");
    window.scrollTo(0, 0);
  }, [modal]);

  return (
    <>
      {!modal ? (
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
          <AppMAIN style={{ padding: "0 15px", position: "relative" }}>
            <NewGameWrapper>
              <form onSubmit={(e) => handleSubmit(e)}>
                <NewGameHeaderFlex>
                  <div
                    className="div1Main"
                    onClick={() => {
                      toggleCountModal(2);
                      toggleModal();
                    }}
                  >
                    <div className="div1">
                      {get(teamOne, "name") ? (
                        <>{get(teamOne, "name")}</>
                      ) : (
                        "Команда 1"
                      )}
                    </div>
                    <p>Кол-во очков</p>
                  </div>
                  <div
                    className="div2"
                    onClick={() => {
                      toggleCountModal(1);
                      toggleModal();
                    }}
                  >
                    <img src={Endurance} alt="" />
                    {minutes ? (
                      <>
                        <p>{minutes}</p>
                        <p>мин</p>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                  <div
                    className="div1Main"
                    onClick={() => {
                      toggleCountModal(3);
                      toggleModal();
                    }}
                  >
                    <div className="div1">
                      {get(teamTwo, "name") ? (
                        <>{get(teamTwo, "name")}</>
                      ) : (
                        "Команда 2"
                      )}
                    </div>
                    <p>Кол-во очков</p>
                  </div>
                </NewGameHeaderFlex>
                <p className="newGame__Title">Вратари</p>
                <NewGamePositionCard>
                  <div className="NewGamePositionFlex">
                    <div className="div1Main">
                      <div className="div1">
                        <div
                          className=""
                          onClick={() => {
                            toggleCountModal(4);
                            toggleModal();
                            findPossiblePlayerPos(1, 1);
                          }}
                        >
                          <img src={Player1} alt="" />
                          <p>Игрок</p>
                        </div>
                      </div>
                    </div>
                    <div className="div2Main">
                      <div className="div2">
                        <div
                          className=""
                          onClick={() => {
                            toggleCountModal(4);
                            toggleModal();
                            findPossiblePlayerPos(2, 1);
                          }}
                        >
                          <img src={Player2} alt="" />
                          <p>Игрок</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </NewGamePositionCard>

                <p className="newGame__Title">Защитники</p>
                <NewGamePositionCard>
                  <div className="NewGamePositionFlex">
                    <div className="div1Main">
                      <div className="div1">
                        <div
                          className=""
                          onClick={() => {
                            toggleCountModal(4);
                            toggleModal();
                            findPossiblePlayerPos(1, 2);
                          }}
                        >
                          <img src={Player1} alt="" />
                          <p>Игрок</p>
                        </div>
                      </div>
                    </div>
                    <div className="div2Main">
                      <div className="div2">
                        <div
                          className=""
                          onClick={() => {
                            toggleCountModal(4);
                            toggleModal();
                            findPossiblePlayerPos(2, 2);
                          }}
                        >
                          <img src={Player2} alt="" />
                          <p>Игрок</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </NewGamePositionCard>

                <p className="newGame__Title">Полузащитники</p>
                <NewGamePositionCard>
                  <div className="NewGamePositionFlex">
                    <div className="div1Main">
                      <div className="div1">
                        <div
                          className=""
                          onClick={() => {
                            toggleCountModal(4);
                            toggleModal();
                            findPossiblePlayerPos(1, 3);
                          }}
                        >
                          <img src={Player1} alt="" />
                          <p>Игрок</p>
                        </div>
                      </div>
                    </div>
                    <div className="div2Main">
                      <div className="div2">
                        <div
                          className=""
                          onClick={() => {
                            toggleCountModal(4);
                            toggleModal();
                            findPossiblePlayerPos(2, 3);
                          }}
                        >
                          <img src={Player2} alt="" />
                          <p>Игрок</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </NewGamePositionCard>

                <p className="newGame__Title">Нападащие</p>
                <NewGamePositionCard>
                  <div className="NewGamePositionFlex">
                    <div className="div1Main">
                      <div className="div1">
                        <div
                          className=""
                          onClick={() => {
                            toggleCountModal(4);
                            toggleModal();
                            findPossiblePlayerPos(1, 4);
                          }}
                        >
                          <img src={Player1} alt="" />
                          <p>Игрок</p>
                        </div>
                      </div>
                    </div>
                    <div className="div2Main">
                      <div className="div2">
                        <div
                          className=""
                          onClick={() => {
                            toggleCountModal(4);
                            toggleModal();
                            findPossiblePlayerPos(2, 4);
                          }}
                        >
                          <img src={Player2} alt="" />
                          <p>Игрок</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </NewGamePositionCard>

                <button
                  type="submit"
                  className="appBtnGreen"
                  style={{ marginTop: "16px" }}
                >
                  Начать игру
                </button>
              </form>
            </NewGameWrapper>
          </AppMAIN>
          <AppFooter2>
            <Navigation />
          </AppFooter2>
          {possibleModal ? (
            <PossibleModal>
              <div className="">
                <div className="possibleModalSub">
                  <div className="sub1">
                    <p>Ошибка</p>
                    <p>Cначала выберите клубы</p>
                  </div>
                  <div className="sub2" onClick={togglePossibleModal}>
                    OK
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
                <MinutesList
                  toggleModal={toggleModal}
                  munitesList={munitesList}
                  takeMinute={takeMinute}
                  minutes={minutes}
                />
              ) : modalCount === 2 ? (
                <TeamsNameList
                  toggleModal={toggleModal}
                  clubs={clubs}
                  setClubs={setClubs}
                  nextUrlClubs={nextUrlClubs}
                  setNextUrlClubs={setNextUrlClubs}
                  typingTimeOut={typingTimeOut}
                  setTypingTimeOut={setTypingTimeOut}
                  searchClubs={searchClubs}
                  setSearchClubs={setSearchClubs}
                  setPreLoading={setPreLoading}
                  preLoading={preLoading}
                  teamOne={teamOne}
                  setTeamOne={setTeamOne}
                  teamTwo={teamTwo}
                  setTeamTwo={setTeamTwo}
                  active={active}
                  setActive={setActive}
                  active2={active2}
                  setActive2={setActive2}
                  modalCount={modalCount}
                />
              ) : modalCount === 3 ? (
                <TeamsNameList
                  toggleModal={toggleModal}
                  clubs={clubs}
                  setClubs={setClubs}
                  nextUrlClubs={nextUrlClubs}
                  setNextUrlClubs={setNextUrlClubs}
                  typingTimeOut={typingTimeOut}
                  setTypingTimeOut={setTypingTimeOut}
                  searchClubs={searchClubs}
                  setSearchClubs={setSearchClubs}
                  setPreLoading={setPreLoading}
                  preLoading={preLoading}
                  teamOne={teamOne}
                  setTeamOne={setTeamOne}
                  teamTwo={teamTwo}
                  setTeamTwo={setTeamTwo}
                  active={active}
                  setActive={setActive}
                  active2={active2}
                  setActive2={setActive2}
                  modalCount={modalCount}
                />
              ) : modalCount === 4 ? (
                <PlayersNameList
                  toggleModal={toggleModal}
                  typingTimeOut={typingTimeOut}
                  setTypingTimeOut={setTypingTimeOut}
                  setPreLoading={setPreLoading}
                  preLoading={preLoading}
                  activePlayers={activePlayers}
                  setActivePlayers={setActivePlayers}
                  nextUrlPlayers={nextUrlPlayers}
                  setNextUrlPlayers={setNextUrlPlayers}
                  setPlayers={setPlayers}
                  players={players}
                  setSearchPlayers={setSearchPlayers}
                  searchPlayers={searchPlayers}
                  modalCount={modalCount}
                />
              ) : (
                ""
              )}
            </>
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
};

export default NewGame;
