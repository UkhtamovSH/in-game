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

  const [oneUsers, setOneUsers] = useState([]);
  const [twoUsers, setTwoUsers] = useState([]);
  const [activeType, setActiveType] = useState(0);
  const [activeTarget, setActiveTarget] = useState(0);
  const [totalPrice, setTotalPrice] = useState([]);
  const [totalPrice2, setTotalPrice2] = useState([]);

  //possible error modal :)
  const [possibleModal, setPossibleModal] = useState(false);
  const [possibleModal2, setPossibleModal2] = useState(false);
  const [possibleModal3, setPossibleModal3] = useState(false);
  const [possibleModal4, setPossibleModal4] = useState(false);
  const [possibleModal5, setPossibleModal5] = useState(false);
  const togglePossibleModal = () => setPossibleModal(!possibleModal);
  const togglePossibleModal2 = () => setPossibleModal2(!possibleModal2);
  const togglePossibleModal3 = () => setPossibleModal3(!possibleModal3);
  const togglePossibleModal4 = () => setPossibleModal4(!possibleModal4);
  const togglePossibleModal5 = () => setPossibleModal5(!possibleModal5);

  const addUsers = (target, type, user, name, img, ball) => {
    getPlayers(2, nextUrlPlayers);

    if (target === 1) {
      if (type === 1) {
        let l = oneUsers.filter((o) => {
          return o.position !== 1;
        });
        l.push({
          position: type,
          user: user,
          name: name,
          img: img,
          ball: ball,
        });
        setOneUsers(l);
      } else
        setOneUsers([
          ...oneUsers,
          { position: type, user: user, name: name, img: img, ball: ball },
        ]);
    } else if (target === 2) {
      if (type === 1) {
        let lt = twoUsers.filter((o) => {
          return o.position !== 1;
        });
        lt.push({
          position: type,
          user: user,
          name: name,
          img: img,
          ball: ball,
        });
        setTwoUsers(lt);
      } else
        setTwoUsers([
          ...twoUsers,
          { position: type, user: user, name: name, img: img, ball: ball },
        ]);
    }
  };

  const findPossiblePlayerPos = (target = 1, type = 0, user) => {
    setActiveTarget(target);
    setActiveType(type);
    if (target === 1) {
      if (teamOne?.id === undefined) {
        setPossibleModal(true);
        setModal(false);
      }
      if (type === 2) {
        if (user) {
          console.log(`target1 2chi type tanlandi => id si ${user} `);
        }
      } else if (type === 3) {
        if (user) {
          console.log(`target1 3chi type tanlandi => id si ${user} `);
        }
      } else if (type === 4) {
        if (user) {
          console.log(`target1 4chi type tanlandi => id si ${user} `);
        }
      }
    } else if (target === 2) {
      if (teamTwo?.id === undefined) {
        setPossibleModal(true);
        setModal(false);
      }

      if (type === 2) {
        if (user) {
          console.log(`target2 2chi type tanlandi => id si ${user} `);
        }
      } else if (type === 3) {
        if (user) {
          console.log(`target2 3chi type tanlandi => id si ${user} `);
        }
      } else if (type === 4) {
        if (user) {
          console.log(`target2 4chi type tanlandi => id si ${user} `);
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

  let ballAddOneUser = oneUsers.map((user) => user.ball);
  let ballAddTwoUser = twoUsers.map((user) => user.ball);

  let onUsersPos1 = oneUsers.filter((p) => p.position === 1);
  let onUsersPos2 = oneUsers.filter((p) => p.position === 2);
  let onUsersPos3 = oneUsers.filter((p) => p.position === 3);
  let onUsersPos4 = oneUsers.filter((p) => p.position === 4);

  let twoUsersPos1 = twoUsers.filter((p) => p.position === 1);
  let twoUsersPos2 = twoUsers.filter((p) => p.position === 2);
  let twoUsersPos3 = twoUsers.filter((p) => p.position === 3);
  let twoUsersPos4 = twoUsers.filter((p) => p.position === 4);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataGame = {
      game_club: [
        {
          club: teamOne?.id,
          number: 1,
          users: oneUsers,
        },

        {
          club: teamTwo?.id,
          number: 2,
          users: twoUsers,
        },
      ],
      game_time: minutes,
    };
    if (minutes === 0) {
      setPossibleModal4(true);
    } else if (oneUsers.length === 0 || twoUsers.length === 0) {
      setPossibleModal3(true);
    } else if (
      onUsersPos1.length === 0 ||
      onUsersPos2.length === 0 ||
      onUsersPos3.length === 0 ||
      onUsersPos4.length === 0
    ) {
      setPossibleModal3(true);
    } else if (
      twoUsersPos1.length === 0 ||
      twoUsersPos2.length === 0 ||
      twoUsersPos3.length === 0 ||
      twoUsersPos4.length === 0
    ) {
      setPossibleModal3(true);
    } else {
      setPossibleModal3(false);
      GetAuthInstance()
        .post("/api/v1/game/", dataGame)
        .then(async (res) => {
          const status = get(res, "data.status");
          const date = get(res, "data.game.date");
          const id = get(res, "data.game.id");
          const referee = get(res, "data.game.referee");
          console.log({ ...dataGame, date, id, referee }, res);
          if (status === 1) {
            await window.sessionStorage.setItem(
              "datagame",
              JSON.stringify({ ...dataGame, date, id, referee })
            );
            history(`/game/${id}`);
            setPossibleModal2(false);
          } else {
            setPossibleModal2(true);
          }
        })
        .catch((err) => {});
    }
  };

  const getPlayers = (
    page = 1,
    next_url = `/api/v1/user-filter-list-mir/?page=${page}&per_page=10`,
    search = ""
  ) => {
    if (next_url) {
      if (page === 1) {
        setPreLoading(true);
      }
      let s = "";
      if (search) {
        s = "&search=" + search;
      }
      GetAuthInstance()
        .get(next_url + s)
        .then((res) => {
          if (res.status === 200) {
            const result =
              page === 1 ? res.data.results : [...players, ...res.data.results];
            setPlayers(result);
            setNextUrlPlayers(res.data.next);
          }
        })
        .catch(() => {
          setPlayers([]);
        })
        .finally(() => setPreLoading(false));
    }
  };

  const handleSearch = (e) => {
    setSearchPlayers(e.target.value);
    let page = 1;
    let next_url = `/api/v1/user-filter-list-mir/?page=${page}&per_page=10`;
    setTypingTimeOut(
      setTimeout(() => {
        getPlayers(page, next_url, e.target.value);
      }, 1000)
    );

    if (typingTimeOut) {
      clearTimeout(typingTimeOut);
    }
  };

  useEffect(() => {
    setSearchClubs("");
    window.scrollTo(0, 0);
  }, [modal]);

  useEffect(() => {
    let ballSum = 0;
    oneUsers.map((i) => {
      ballSum += i.ball;
      setTotalPrice(ballSum);
    });

    let ballSum2 = 0;
    twoUsers.map((i) => {
      ballSum2 += i.ball;
      setTotalPrice2(ballSum2);
    });
  });
  useEffect(() => {
    getPlayers();
  }, []);

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
                    <p>
                      {get(teamOne, "id") ? (
                        <span style={{ color: "#1787E7" }}>
                          {ballAddOneUser.length ? totalPrice : 0} очков
                        </span>
                      ) : (
                        "Кол-во очков"
                      )}
                    </p>
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
                    <p>
                      {get(teamTwo, "id") ? (
                        <span style={{ color: "#0EB800" }}>
                          {ballAddTwoUser.length ? totalPrice2 : 0} очков
                        </span>
                      ) : (
                        "Кол-во очков"
                      )}
                    </p>
                  </div>
                </NewGameHeaderFlex>
                <p className="newGame__Title">Вратари</p>
                <NewGamePositionCard>
                  <div className="NewGamePositionFlex">
                    <div className="div1Main">
                      <div className="div1">
                        {onUsersPos1.length ? (
                          onUsersPos1.map((oUser, index) => {
                            const { name, img } = oUser;
                            return (
                              <div
                                className=""
                                key={index}
                                onClick={() => {
                                  toggleCountModal(4);
                                  toggleModal();
                                  findPossiblePlayerPos(1, 1);
                                }}
                              >
                                <img src={img} className="divIMG" alt="" />
                                <p>{name.split(" ")[0]}</p>
                              </div>
                            );
                          })
                        ) : (
                          <div
                            className=""
                            onClick={() => {
                              toggleCountModal(4);
                              toggleModal();
                              findPossiblePlayerPos(1, 1);
                            }}
                          >
                            <img src={Player1} className="divIMG" alt="" />
                            <p>Игрок</p>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="div2Main">
                      <div className="div2">
                        {twoUsersPos1.length ? (
                          twoUsersPos1.map((oUser, index) => {
                            const { name, img } = oUser;
                            return (
                              <div
                                className=""
                                key={index}
                                onClick={() => {
                                  toggleCountModal(4);
                                  toggleModal();
                                  findPossiblePlayerPos(2, 1);
                                }}
                              >
                                <img src={img} className="divIMG" alt="" />
                                <p>{name.split(" ")[0]}</p>
                              </div>
                            );
                          })
                        ) : (
                          <div
                            className=""
                            onClick={() => {
                              toggleCountModal(4);
                              toggleModal();
                              findPossiblePlayerPos(2, 1);
                            }}
                          >
                            <img src={Player2} className="divIMG" alt="" />
                            <p>Игрок</p>
                          </div>
                        )}
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
                          <img src={Player1} className="divIMG" alt="" />
                          <p>Игрок</p>
                        </div>
                        {onUsersPos2.length
                          ? onUsersPos2.map((oUser, index) => {
                              const { name, img, user } = oUser;
                              return (
                                <div
                                  className=""
                                  key={index}
                                  onClick={() => {
                                    togglePossibleModal5();
                                    findPossiblePlayerPos(1, 2, user);
                                  }}
                                >
                                  <img src={img} className="divIMG" alt="" />
                                  <p>{name.split(" ")[0]}</p>
                                </div>
                              );
                            })
                          : null}
                      </div>
                    </div>
                    <div className="div2Main">
                      <div className="div2">
                        {twoUsersPos2.length
                          ? twoUsersPos2.map((oUser, index) => {
                              const { name, img, user } = oUser;
                              return (
                                <div
                                  className=""
                                  key={index}
                                  onClick={() => {
                                    togglePossibleModal5();
                                    findPossiblePlayerPos(2, 2, user);
                                  }}
                                >
                                  <img src={img} className="divIMG" alt="" />
                                  <p>{name.split(" ")[0]}</p>
                                </div>
                              );
                            })
                          : null}
                        <div
                          className=""
                          onClick={() => {
                            toggleCountModal(4);
                            toggleModal();
                            findPossiblePlayerPos(2, 2);
                          }}
                        >
                          <img src={Player2} className="divIMG" alt="" />
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
                          <img src={Player1} className="divIMG" alt="" />
                          <p>Игрок</p>
                        </div>
                        {onUsersPos3.length
                          ? onUsersPos3.map((oUser, index) => {
                              const { name, img, user } = oUser;
                              return (
                                <div
                                  className=""
                                  key={index}
                                  onClick={() => {
                                    togglePossibleModal5();
                                    findPossiblePlayerPos(1, 3, user);
                                  }}
                                >
                                  <img src={img} className="divIMG" alt="" />
                                  <p>{name.split(" ")[0]}</p>
                                </div>
                              );
                            })
                          : null}
                      </div>
                    </div>
                    <div className="div2Main">
                      <div className="div2">
                        {twoUsersPos3.length
                          ? twoUsersPos3.map((oUser, index) => {
                              const { name, img, user } = oUser;
                              return (
                                <div
                                  className=""
                                  key={index}
                                  onClick={() => {
                                    togglePossibleModal5();
                                    findPossiblePlayerPos(2, 3, user);
                                  }}
                                >
                                  <img src={img} className="divIMG" alt="" />
                                  <p>{name.split(" ")[0]}</p>
                                </div>
                              );
                            })
                          : null}
                        <div
                          className=""
                          onClick={() => {
                            toggleCountModal(4);
                            toggleModal();
                            findPossiblePlayerPos(2, 3);
                          }}
                        >
                          <img src={Player2} className="divIMG" alt="" />
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
                          <img src={Player1} className="divIMG" alt="" />
                          <p>Игрок</p>
                        </div>
                        {onUsersPos4.length
                          ? onUsersPos4.map((oUser, index) => {
                              const { name, img, user } = oUser;
                              return (
                                <div
                                  className=""
                                  key={index}
                                  onClick={() => {
                                    togglePossibleModal5();
                                    findPossiblePlayerPos(1, 4, user);
                                  }}
                                >
                                  <img src={img} className="divIMG" alt="" />
                                  <p>{name.split(" ")[0]}</p>
                                </div>
                              );
                            })
                          : null}
                      </div>
                    </div>
                    <div className="div2Main">
                      <div className="div2">
                        {twoUsersPos4.length
                          ? twoUsersPos4.map((oUser, index) => {
                              const { name, img, user } = oUser;
                              return (
                                <div
                                  className=""
                                  key={index}
                                  onClick={() => {
                                    togglePossibleModal5();
                                    findPossiblePlayerPos(2, 4, user);
                                  }}
                                >
                                  <img src={img} className="divIMG" alt="" />
                                  <p>{name.split(" ")[0]}</p>
                                </div>
                              );
                            })
                          : null}
                        <div
                          className=""
                          onClick={() => {
                            toggleCountModal(4);
                            toggleModal();
                            findPossiblePlayerPos(2, 4);
                          }}
                        >
                          <img src={Player2} className="divIMG" alt="" />
                          <p>Игрок</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </NewGamePositionCard>

                {oneUsers.length === 0 ||
                twoUsers.length === 0 ||
                onUsersPos1.length === 0 ||
                onUsersPos2.length === 0 ||
                onUsersPos3.length === 0 ||
                onUsersPos4.length === 0 ||
                twoUsersPos1.length === 0 ||
                twoUsersPos2.length === 0 ||
                twoUsersPos3.length === 0 ||
                twoUsersPos4.length === 0 ||
                minutes === 0 ? (
                  <button
                    type="submit"
                    className="appBtnGray"
                    style={{ marginTop: "16px" }}
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

          {possibleModal2 ? (
            <PossibleModal>
              <div className="">
                <div className="possibleModalSub">
                  <div className="sub1">
                    <p>Ошибка</p>
                    <p>Игра не создавалась. Пожалуйста, попробуйте еще раз!</p>
                  </div>
                  <div className="sub2" onClick={togglePossibleModal2}>
                    OK
                  </div>
                </div>
              </div>
              <StylesHidden />
            </PossibleModal>
          ) : null}

          {possibleModal3 ? (
            <PossibleModal>
              <div className="">
                <div className="possibleModalSub">
                  <div className="sub1">
                    <p>Ошибка</p>
                    <p>Дабавить играков</p>
                  </div>
                  <div className="sub2" onClick={togglePossibleModal3}>
                    OK
                  </div>
                </div>
              </div>
              <StylesHidden />
            </PossibleModal>
          ) : null}

          {possibleModal4 ? (
            <PossibleModal>
              <div className="">
                <div className="possibleModalSub">
                  <div className="sub1">
                    <p>Ошибка</p>
                    <p>Выберите время</p>
                  </div>
                  <div className="sub2" onClick={togglePossibleModal4}>
                    OK
                  </div>
                </div>
              </div>
              <StylesHidden />
            </PossibleModal>
          ) : null}

          {possibleModal5 ? (
            <PossibleModal>
              <div className="">
                <div className="possibleModalSub">
                  <div className="sub1">
                    <p>Что делать?</p>
                  </div>
                  <div className="sub3">
                    <div className="sub2BtnGroup">
                      <div
                        onClick={() => {
                          toggleCountModal(4);
                          toggleModal();
                        }}
                      >
                        Изменить
                      </div>
                      <div>Удалить</div>
                      <div onClick={togglePossibleModal5}>Отменить</div>
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
                  addUsers={(target, type, user, name, img, ball) =>
                    addUsers(target, type, user, name, img, ball)
                  }
                  oneUsers={oneUsers}
                  twoUsers={twoUsers}
                  activeTarget={activeTarget}
                  activeType={activeType}
                  toggleModal={toggleModal}
                  typingTimeOut={typingTimeOut}
                  setTypingTimeOut={setTypingTimeOut}
                  setPreLoading={setPreLoading}
                  preLoading={preLoading}
                  nextUrlPlayers={nextUrlPlayers}
                  setNextUrlPlayers={setNextUrlPlayers}
                  setPlayers={setPlayers}
                  players={players}
                  setSearchPlayers={setSearchPlayers}
                  searchPlayers={searchPlayers}
                  modalCount={modalCount}
                  getPlayers={getPlayers}
                  handleSearch={handleSearch}
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
