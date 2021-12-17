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
} from "../styles/NewGame.styled";
import MinutesList from "../components/sections/newgame/MinutesList";
import { useDispatch, useSelector } from "react-redux";
import { setMinutes } from "../redux/actions";
import TeamsNameList from "./sections/newgame/TeamsNameList";
import { get } from "lodash";
import { GetAuthInstance } from "../helpers/httpClient";
import PlayersNameList from "./sections/newgame/PlayersNameList";

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

  //players
  const [players, setPlayers] = useState([]);
  const [searchPlayers, setSearchPlayers] = useState("");
  const [nextUrlPlayers, setNextUrlPlayers] = useState("");
  const [activePlayers, setActivePlayers] = useState();
  const [teamTwoPlayers, setTeamTwoPlayers] = useState([]);
  const [teamOnePlayers, setTeamOnePlayers] = useState([]);

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

  const handleSubmit = () => {
    const dataGame = {
      game_club: [
        {
          club: teamOne?.id,
          number: 1,
          users: teamOnePlayers,
        },

        {
          club: teamTwo?.id,
          number: 2,
          users: teamTwoPlayers,
        },
      ],
      game_time: minutes,
    };
    GetAuthInstance()
      .post("/api/v1/game/", dataGame)
      .then((res) => {})
      .catch((err) => {});
    history("/game");
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
          <AppMAIN style={{ padding: "0 15px" }}>
            <NewGameWrapper>
              <form onSubmit={() => handleSubmit()}>
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
                          }}
                        >
                          <img src={Player1} alt="" />
                          <p>Игрок</p>
                        </div>
                      </div>
                    </div>
                    <div className="div2Main">
                      <div className="div2">
                        <div className="">
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
                        <div className="">
                          <img src={Player1} alt="" />
                          <p>Игрок</p>
                        </div>
                      </div>
                    </div>
                    <div className="div2Main">
                      <div className="div2">
                        <div className="">
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
                        <div className="">
                          <img src={Player1} alt="" />
                          <p>Игрок</p>
                        </div>
                      </div>
                    </div>
                    <div className="div2Main">
                      <div className="div2">
                        <div className="">
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
                        <div className="">
                          <img src={Player1} alt="" />
                          <p>Игрок</p>
                        </div>
                      </div>
                    </div>
                    <div className="div2Main">
                      <div className="div2">
                        <div className="">
                          <img src={Player2} alt="" />
                          <p>Игрок</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </NewGamePositionCard>

                {minutes === 0 ? (
                  <button
                    className="appBtnGray"
                    style={{
                      marginTop: "16px",
                      color: "#BDBDBD",
                      background: "#565656",
                    }}
                  >
                    Начать игру
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="appBtnGreen"
                    style={{ marginTop: "16px" }}
                  >
                    Начать игру
                  </button>
                )}
              </form>
            </NewGameWrapper>
          </AppMAIN>
          <AppFooter2>
            <Navigation />
          </AppFooter2>
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
                  setTeamOnePlayers={setTeamOnePlayers}
                  teamOnePlayers={teamOnePlayers}
                  setTeamTwoPlayers={setTeamTwoPlayers}
                  teamTwoPlayers={teamTwoPlayers}
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
