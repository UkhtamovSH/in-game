import { get } from "lodash";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GetAuthInstance } from "../helpers/httpClient";
import {
  AppFooter,
  AppHeader,
  AppHeaderFlex,
  AppMAIN,
} from "../styles/ContainerFluid.styled";
import ClubImg1 from "../assets/svg/clubImg1.svg";
import ClubImg2 from "../assets/svg/clubImg2.svg";
import ImgDownloaderFile from "../assets/svg/imgDownloaderFile.svg";
import { PlayersRatingMain } from "../styles/PlayersRatingStyle";
import ChoosenPlayersTwo from "./sections/newgame/ChoosenPlayersTwo";
import Player1 from "../assets/svg/player1.svg";
import Player2 from "../assets/svg/player2.svg";
import { NewGamePositionCard } from "../styles/NewGame.styled";
import TeamOnePlayers from "./sections/newgame/TeamOnePlayers";
import TeamTwoPlayers from "./sections/newgame/TeamTwoPlayers";

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

const PhotoMatch = styled.div`
  background: #333333;
  font-family: "Manrope-Medium", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
  padding: 16px;
  border-radius: 16px;
  margin-top: 24px;

  .title {
    font-family: "Manrope-Bold", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: #ffffff;
  }
`;

const GameOver = () => {
  // states start
  const [listImages, setListImages] = useState({
    gallery: [],
  });
  const [clubs, setClubs] = useState([]);
  const [modalCount, setModalCount] = useState(null);
  const [modal, setModal] = useState(false);

  const [countPlayersOver, setCountPlayersOver] = useState([]);

  const [teamOneMatchPlayer, setTeamOneMatchPlayer] = useState({});
  const [teamTwoMatchPlayer, setTeamTwoMatchPlayer] = useState({});

  //////////////////////////////////////////////
  const getFinishGame = JSON.parse(sessionStorage.getItem("finishGame"));

  const game_club1 = get(getFinishGame?.game_club1, "game-club");
  const fClub1 = clubs.filter((item) => item.id === game_club1);
  const getFclub1 = get(fClub1, "0", []);

  const game_club2 = get(getFinishGame?.game_club2, "game-club");
  const fClub2 = clubs.filter((item) => item.id === game_club2);
  const getFclub2 = get(fClub2, "0", []);
  //////////////////////////////////////////////

  const [shotClub1, setShotClub1] = useState(
    get(getFinishGame?.game_club1, "score")
  );
  const [shotClub2, setShotClub2] = useState(
    get(getFinishGame?.game_club2, "score")
  );
  // states end

  // functions start
  const toggleModalCount = (i) => setModalCount(i);
  const toggleModal = () => setModal(!modal);

  const countClubsShot = (user) => {
    const getClub1 = get(getFinishGame?.game_club1, "users");

    const game_club11 = get(getFinishGame?.game_club1, "game-club");
    const fClub1 = clubs.filter((item) => item.id === game_club11);
    const getFclub1 = get(fClub1, "0", []);

    let findIDFilter1 = {};
    getClub1.forEach((item) => {
      if (item.user === user) {
        findIDFilter1 = {
          ...item,
          club: getFclub1.name,
        };
      }
    });
    let findID1 = get(findIDFilter1, "user", 0);

    const getClub2 = get(getFinishGame?.game_club2, "users");

    const game_club22 = get(getFinishGame?.game_club2, "game-club");
    const fClub2 = clubs.filter((item) => item.id === game_club22);
    const getFclub2 = get(fClub2, "0", []);

    let findIDFilter2 = {};
    getClub2.forEach((item) => {
      if (item.user === user) {
        findIDFilter2 = {
          ...item,
          club: getFclub2.name,
        };
      }
    });
    let findID2 = get(findIDFilter2, "user", 0);

    if (findID1 === user) {
      setShotClub1(shotClub1 + 1);
      setCountPlayersOver([...countPlayersOver, findIDFilter1]);
      toggleModal();
    } else if (findID2 === user) {
      setShotClub2(shotClub2 + 1);
      setCountPlayersOver([...countPlayersOver, findIDFilter2]);
      toggleModal();
    }
  };

  //###############best players functions start##################
  const findBestPlayerClub1 = (user) => {
    const bPlayerGet = get(getFinishGame?.game_club1, "users");

    let fBestPlayer = {};
    bPlayerGet.forEach((item) => {
      if (item.user === user) {
        fBestPlayer = {
          ...item,
        };
      }
    });

    const fBestPlayerUID = get(fBestPlayer, "user", 0);

    if (fBestPlayerUID === user) {
      setTeamOneMatchPlayer({ ...teamOneMatchPlayer, fBestPlayer });
    }
    toggleModal();
  };
  const findBestPlayerClub2 = (user) => {
    const bPlayerGet = get(getFinishGame?.game_club2, "users");

    let fBestPlayer = {};
    bPlayerGet.forEach((item) => {
      if (item.user === user) {
        fBestPlayer = {
          ...item,
        };
      }
    });
    const fBestPlayerUID = get(fBestPlayer, "user", 0);

    if (fBestPlayerUID === user) {
      setTeamTwoMatchPlayer({ ...teamTwoMatchPlayer, fBestPlayer });
    }
    toggleModal();
  };
  //###############best players functions start##################

  //###############get clubs function start##################
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
  //###############get clubs function end##################

  //###############Post fucntion start##################
  const handleSelectImg = (e) => {
    setListImages({ ...listImages, gallery: e.target.files[0] });
    var formData = new FormData();
    formData.append("gallery[]", listImages.gallery);
    formData.append("game", getFinishGame.game);
    console.log(formData, "formData");
    GetAuthInstance()
      .post("/api/v1/gallery/", formData)
      .then((res) => {
        setListImages({ ...listImages, formData });
      })
      .catch((err) => {});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  //###############Post fucntion end##################

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
                <span>Матч завершен</span>
              </div>
              <div />
            </AppHeaderFlex>
          </AppHeader>
          <form onSubmit={(e) => handleSubmit(e)}>
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
                  <p className="dateText">{getFinishGame?.date}</p>
                </div>
                <div className="">
                  <img
                    src={getFclub2?.image ? getFclub2?.image : ClubImg2}
                    alt=""
                  />
                  <p>{getFclub2?.name ? getFclub2?.name : "Club name"}</p>
                </div>
              </GameHeader>

              {getFinishGame?.countPlayers.length > 0
                ? getFinishGame?.countPlayers.map((countPlayer, index) => {
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
                              <p className="text1">{name}</p>
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

              {countPlayersOver.length > 0
                ? countPlayersOver.map((countPlayer, index) => {
                    const { img, position, name, club } = countPlayer;
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
                              <p className="text1">{name}</p>
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
                              <p className="text2">-- : --</p>
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
                Добавить Гол!
              </button>

              <PhotoMatch>
                <p className="title">Фотоотчет матча</p>
                <>
                  <label htmlFor="files" className="ImgDownloaderFileBtn">
                    {" "}
                    <img
                      src={ImgDownloaderFile}
                      style={{ marginRight: "18px" }}
                      alt=""
                    />{" "}
                    Загрузить еще изображения
                  </label>
                  <input
                    id="files"
                    style={{ visibility: "hidden" }}
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    onChange={(e) => handleSelectImg(e)}
                  />
                </>
              </PhotoMatch>

              <p className="newGame__Title">Лучшие игроки матча</p>
              <NewGamePositionCard>
                <div className="NewGamePositionFlex">
                  <div className="div1Main">
                    <div className="div1">
                      {teamOneMatchPlayer.fBestPlayer !== undefined ? (
                        <>
                          <div
                            className=""
                            onClick={() => {
                              toggleModalCount(2);
                              toggleModal();
                            }}
                          >
                            <img
                              src={teamOneMatchPlayer.fBestPlayer.img}
                              className="divIMG"
                              alt=""
                            />
                            <p>
                              {
                                teamOneMatchPlayer.fBestPlayer.name.split(
                                  " "
                                )[0]
                              }
                            </p>
                          </div>
                        </>
                      ) : (
                        <div
                          className=""
                          onClick={() => {
                            toggleModalCount(2);
                            toggleModal();
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
                      {teamTwoMatchPlayer.fBestPlayer !== undefined ? (
                        <>
                          <div
                            className=""
                            onClick={() => {
                              toggleModalCount(3);
                              toggleModal();
                            }}
                          >
                            <img
                              src={teamTwoMatchPlayer.fBestPlayer.img}
                              className="divIMG"
                              alt=""
                            />
                            <p>
                              {
                                teamTwoMatchPlayer.fBestPlayer.name.split(
                                  " "
                                )[0]
                              }
                            </p>
                          </div>
                        </>
                      ) : (
                        <div
                          className=""
                          onClick={() => {
                            toggleModalCount(3);
                            toggleModal();
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
            </AppMAIN>
            <AppFooter>
              <button className="appBtnGreen" type="submit">
                Сохранить
              </button>
            </AppFooter>
          </form>
        </>
      ) : (
        <>
          {modal ? (
            <>
              {modalCount === 1 ? (
                <ChoosenPlayersTwo
                  toggleModal={toggleModal}
                  game_club1User={get(getFinishGame?.game_club1, "users")}
                  game_club2User={get(getFinishGame?.game_club2, "users")}
                  countClubsShot={countClubsShot}
                />
              ) : modalCount === 2 ? (
                <TeamOnePlayers
                  toggleModal={toggleModal}
                  findBestPlayerClub1={findBestPlayerClub1}
                  players={get(getFinishGame?.game_club1, "users")}
                />
              ) : modalCount === 3 ? (
                <TeamTwoPlayers
                  toggleModal={toggleModal}
                  findBestPlayerClub2={findBestPlayerClub2}
                  players={get(getFinishGame?.game_club2, "users")}
                />
              ) : null}
            </>
          ) : null}
        </>
      )}
    </>
  );
};

export default GameOver;