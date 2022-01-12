import {
  AppFooter,
  AppHeader,
  AppHeaderFlex,
  AppMAIN,
} from "../styles/ContainerFluid.styled";
import {
  HomeContainer,
  HomeStyle,
  HomeTimeStyle,
  SHomeContainer,
} from "../styles/Home.styled";
import ArrowRight from "../assets/svg/Arrow - Right.svg";
import InGameLogo from "../assets/Img/Ball.png";
import WatchImg from "../assets/svg/homeLevel1.svg";
import WatchImg2 from "../assets/svg/homeLevel2.svg";
import More from "../assets/svg/homeLevel3.svg";
import DefaultImg from "../assets/Img/default.png";
import { useEffect, useState } from "react";
import { GetAuthInstance } from "../helpers/httpClient";
import _, { get } from "lodash";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FlexBoxBtn, StylesHidden } from "../styles/Global.styled";
import { HomeSwiperStyle } from "../styles/HomeSwiperStyle";
import Slider from "react-slick";
import DefaultClub from "../assets/Img/defaultClub.png";

const PlayersPage = () => {
  const [data, setData] = useState([]);
  const [gameEnd, setGameEnd] = useState([]);
  const [commentSwiper, setCommentSwiper] = useState([]);
  const [preLoading, setPreLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  const getData = () => {
    setPreLoading(true);
    GetAuthInstance()
      .get(`/api/v1/get-other-user/?lan=ru&other-user=${params.id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {})
      .finally(() => setPreLoading(false));
  };

  const getGameEnd = () => {
    setPreLoading(true);
    GetAuthInstance()
      .get(`api/v1/game-end/?user_id=${params.id}`)
      .then((res) => {
        setGameEnd(res.data.results);
      })
      .catch((err) => {})
      .finally(() => setPreLoading(false));
  };

  const getCommentSwiper = () => {
    setPreLoading(true);
    GetAuthInstance()
      .get(`/api/v1/game/review/?user_id=${params.id}`)
      .then((res) => {
        setCommentSwiper(res.data.results);
      })
      .catch((err) => {})
      .finally(() => setPreLoading(false));
  };

  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "40px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  useEffect(() => {
    getData();
    getGameEnd();
    getCommentSwiper();
    document.body.style.overflow = "visible";
  }, [params.id]);

  return (
    <>
      <AppHeader>
        <AppHeaderFlex>
          <div className="">
            <span onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>
              <img src={ArrowRight} alt="" />
            </span>
          </div>
          <div className="">
            <span>Данные игрока</span>
          </div>
          <div />
        </AppHeaderFlex>
      </AppHeader>
      <AppMAIN style={{ marginBottom: "20px" }}>
        {preLoading ? (
          <SHomeContainer>
            <div className="sHomeHeaderRound2">
              <div className="beforeAnimation22" />
            </div>
            <div className="sHomeMain1Flex">
              <div className="beforeAnimation" />
            </div>
            <div className="sHomeMain2Flex">
              <div className="beforeAnimation" />
            </div>
            <div className="sHomeMain2Flex">
              <div className="beforeAnimation" />
            </div>

            <div className="sHomeMain3Flex">
              <div className="beforeAnimation22" />
            </div>
            <div className="sHomeMain4Flex">
              <div className="beforeAnimation22" />
              <div className="beforeAnimation22" />
              <div className="beforeAnimation22" />
            </div>

            <div className="sHomeMain2Flex">
              <div className="beforeAnimation" />
            </div>

            <div className="sHomeMain5Flex">
              <div className="beforeAnimation22" />
            </div>

            <div className="sHomeMain2Flex">
              <div className="beforeAnimation" />
            </div>

            <div className="sHomeMain5Flex">
              <div className="beforeAnimation22" />
            </div>
            <StylesHidden />
          </SHomeContainer>
        ) : (
          <HomeStyle style={{ marginTop: "130px", marginBottom: "0" }}>
            <HomeContainer>
              <div className="avatarWrap">
                <img
                  className="avatarImg"
                  src={data.avatar ? data.avatar : DefaultImg}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = DefaultImg;
                  }}
                  alt=""
                />
                <div className="beOnline">
                  {data.status === true ? (
                    <>
                      <span style={{ background: "#0EB800" }}></span>
                      <span style={{ color: "#0EB800" }}>Онлайн</span>
                    </>
                  ) : (
                    <>
                      <span style={{ background: "red" }}></span>
                      <span style={{ color: "red" }}>Офлайн</span>
                    </>
                  )}
                </div>
                <h2>{data.full_name}</h2>
                <div className="ageAvatar">
                  <p>
                    {" "}
                    {data.age === 1 ||
                    data.age === 21 ||
                    data.age === 31 ||
                    data.age === 41 ||
                    data.age === 51 ||
                    data.age === 61 ||
                    data.age === 71 ||
                    data.age === 81 ||
                    data.age === 91 ||
                    data.age === 101 ||
                    data.age === 111
                      ? `${data.age} год`
                      : (data.age > 1 && data.age <= 4) ||
                        (data.age > 21 && data.age <= 24) ||
                        (data.age > 31 && data.age <= 34) ||
                        (data.age > 41 && data.age <= 44) ||
                        (data.age > 51 && data.age <= 54) ||
                        (data.age > 61 && data.age <= 64) ||
                        (data.age > 71 && data.age <= 74) ||
                        (data.age > 81 && data.age <= 84) ||
                        (data.age > 91 && data.age <= 94) ||
                        (data.age > 101 && data.age <= 104) ||
                        (data.age > 111 && data.age <= 114)
                      ? `${data.age} года`
                      : (data.age > 4 && data.age <= 20) ||
                        (data.age > 24 && data.age <= 30) ||
                        (data.age > 34 && data.age <= 40) ||
                        (data.age > 44 && data.age <= 50) ||
                        (data.age > 54 && data.age <= 60) ||
                        (data.age > 64 && data.age <= 70) ||
                        (data.age > 74 && data.age <= 80) ||
                        (data.age > 84 && data.age <= 90) ||
                        (data.age > 94 && data.age <= 100) ||
                        (data.age > 104 && data.age <= 110) ||
                        (data.age > 114 && data.age <= 120)
                      ? `${data.age} лет`
                      : data.age === 0
                      ? ""
                      : ""}
                  </p>
                  <span></span>
                  <p>{data?.city?.name.split(" ", 1)}</p>
                </div>
                <div className="wins">
                  <div className="leftWin">
                    <p>{data.victory}% </p>
                    <p>Побед</p>
                  </div>
                  <div className="rightWinWrapper">
                    <div className="rightWin">
                      <div className="topWinContain">
                        <img src={InGameLogo} alt="" />
                        <div className="topWin">
                          <p>{get(data, "positions.Goalkeeper")}% </p>
                          <p>Вратарь</p>
                        </div>
                      </div>
                      <div className="topWinContain">
                        <img src={InGameLogo} alt="" />
                        <div className="topWin">
                          <p>{get(data, "positions.Forward")}% </p>
                          <p>Нападающий</p>
                        </div>
                      </div>
                    </div>
                    <div className="rightWin">
                      <div className="topWinContain">
                        <img src={InGameLogo} alt="" />
                        <div className="topWin">
                          <p>{get(data, "positions.Midfielder")}% </p>
                          <p>Полузащитник</p>
                        </div>
                      </div>
                      <div className="topWinContain">
                        <img src={InGameLogo} alt="" />
                        <div className="topWin">
                          <p>{get(data, "positions.Defender")}% </p>
                          <p>Защитник</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <HomeTimeStyle>
                  <div className="firstTime">
                    <div className="firstTimeSub">
                      <img src={WatchImg} alt="" />
                    </div>
                    <div className="watchTitle">
                      <h1>{data.game_time}.m</h1>
                      <span>время в игре</span>
                    </div>
                  </div>
                  <div className="firstTime">
                    <div className="firstTimeSub">
                      <img src={More} alt="" />
                    </div>
                    <div className="watchTitle">
                      <h1>{data.ball ? data.ball : "Нет очков"}</h1>
                      <span>очков</span>
                    </div>
                  </div>
                  <div className="firstTime">
                    <div className="firstTimeSub">
                      <img src={WatchImg2} alt="" />
                    </div>

                    <div className="watchTitle">
                      <h1>{data.division ? data.division : "Нет дивизион"}</h1>
                      <span>дивизион</span>
                    </div>
                  </div>
                </HomeTimeStyle>
                <>
                  {gameEnd.length ? (
                    <HomeSwiperStyle>
                      <div className="lastPlays">
                        <label>Прошедшие игры</label>
                      </div>
                      <Slider {...settings}>
                        {gameEnd.map((item, index) => (
                          <div className="sliderDiv" key={index}>
                            <div className="commandResult">
                              <div className="comandaLogo">
                                <img
                                  src={
                                    _.get(
                                      item.GameClub[0],
                                      "football_club.image",
                                      0
                                    )
                                      ? _.get(
                                          item.GameClub[0],
                                          "football_club.image",
                                          0
                                        )
                                      : DefaultClub
                                  }
                                  alt=""
                                />
                                <p>
                                  {_.get(
                                    item.GameClub[0],
                                    "football_club.name",
                                    0
                                  )}
                                </p>
                              </div>
                              <div className="comandaLogo">
                                <h3>
                                  {_.get(item, "GameClub[0].goal")} :{" "}
                                  {_.get(item, "GameClub[1].goal")}
                                </h3>
                                <span>{item.date}</span>
                              </div>
                              <div className="comandaLogo">
                                <img
                                  src={
                                    _.get(
                                      item.GameClub[1],
                                      "football_club.image",
                                      1
                                    )
                                      ? _.get(
                                          item.GameClub[1],
                                          "football_club.image",
                                          1
                                        )
                                      : DefaultClub
                                  }
                                  alt=""
                                />
                                <p>
                                  {_.get(
                                    item.GameClub[1],
                                    "football_club.name",
                                    1
                                  )}
                                </p>
                              </div>
                            </div>
                            <div
                              className="sliderImg"
                              style={{ marginLeft: "0" }}
                            >
                              {item.Gallery.length ? (
                                <img
                                  src={
                                    item.Gallery.length &&
                                    _.get(item.Gallery, 0)
                                      ? _.get(item.Gallery, 0)
                                      : null
                                  }
                                  className={
                                    item.Gallery.length &&
                                    _.get(item.Gallery, 0)
                                      ? ""
                                      : "hiddenIMG"
                                  }
                                  alt=""
                                />
                              ) : null}
                              {item.Gallery.length ? (
                                <img
                                  src={
                                    item.Gallery.length &&
                                    _.get(item.Gallery, 1)
                                      ? _.get(item.Gallery, 1)
                                      : null
                                  }
                                  className={
                                    item.Gallery.length &&
                                    _.get(item.Gallery, 1)
                                      ? ""
                                      : "hiddenIMG"
                                  }
                                  alt=""
                                />
                              ) : null}
                              {item.Gallery.length ? (
                                <img
                                  src={
                                    item.Gallery.length &&
                                    _.get(item.Gallery, 2)
                                      ? _.get(item.Gallery, 2)
                                      : null
                                  }
                                  className={
                                    item.Gallery.length &&
                                    _.get(item.Gallery, 2)
                                      ? ""
                                      : "hiddenIMG"
                                  }
                                  alt=""
                                />
                              ) : null}
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </HomeSwiperStyle>
                  ) : null}
                </>
                <>
                  {commentSwiper.length ? (
                    <HomeSwiperStyle>
                      <div className="lastPlays">
                        <label>Отзывы о вас</label>
                      </div>
                      <Slider {...settings}>
                        {commentSwiper.map((item, index) => (
                          <div className="" key={index}>
                            <div className="sliderDiv2">
                              <div className="sliderDiv2Sub1">
                                <img
                                  src={
                                    item.user.avatar
                                      ? item.user.avatar
                                      : DefaultImg
                                  }
                                  onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = DefaultImg;
                                  }}
                                  alt=""
                                />
                                {item.user.position === 1 ? (
                                  <p className="posName">G</p>
                                ) : item.user.position === 2 ? (
                                  <p className="posName">D</p>
                                ) : item.user.position === 4 ? (
                                  <p className="posName">F</p>
                                ) : item.user.position === 3 ? (
                                  <p className="posName">M</p>
                                ) : null}
                              </div>
                              <div className="commenterNameTop">
                                <div className="commenterName">
                                  <h5>
                                    {item.user.full_name.length > 21
                                      ? item.user.full_name.substr(0, 20) +
                                        "..."
                                      : item.user.full_name}
                                  </h5>
                                  <div className="text22Flexx">
                                    <p className="text22">
                                      {item.user.age === 1 ||
                                      item.user.age === 21 ||
                                      item.user.age === 31 ||
                                      item.user.age === 41 ||
                                      item.user.age === 51 ||
                                      item.user.age === 61 ||
                                      item.user.age === 71 ||
                                      item.user.age === 81 ||
                                      item.user.age === 91 ||
                                      item.user.age === 101 ||
                                      item.user.age === 111
                                        ? `${item.user.age}год`
                                        : (item.user.age > 1 &&
                                            item.user.age <= 4) ||
                                          (item.user.age > 21 &&
                                            item.user.age <= 24) ||
                                          (item.user.age > 31 &&
                                            item.user.age <= 34) ||
                                          (item.user.age > 41 &&
                                            item.user.age <= 44) ||
                                          (item.user.age > 51 &&
                                            item.user.age <= 54) ||
                                          (item.user.age > 61 &&
                                            item.user.age <= 64) ||
                                          (item.user.age > 71 &&
                                            item.user.age <= 74) ||
                                          (item.user.age > 81 &&
                                            item.user.age <= 84) ||
                                          (item.user.age > 91 &&
                                            item.user.age <= 94) ||
                                          (item.user.age > 101 &&
                                            item.user.age <= 104) ||
                                          (item.user.age > 111 &&
                                            item.user.age <= 114)
                                        ? `${item.user.age}года`
                                        : (item.user.age > 4 &&
                                            item.user.age <= 20) ||
                                          (item.user.age > 24 &&
                                            item.user.age <= 30) ||
                                          (item.user.age > 34 &&
                                            item.user.age <= 40) ||
                                          (item.user.age > 44 &&
                                            item.user.age <= 50) ||
                                          (item.user.age > 54 &&
                                            item.user.age <= 60) ||
                                          (item.user.age > 64 &&
                                            item.user.age <= 70) ||
                                          (item.user.age > 74 &&
                                            item.user.age <= 80) ||
                                          (item.user.age > 84 &&
                                            item.user.age <= 90) ||
                                          (item.user.age > 94 &&
                                            item.user.age <= 100) ||
                                          (item.user.age > 104 &&
                                            item.user.age <= 110) ||
                                          (item.user.age > 114 &&
                                            item.user.age <= 120)
                                        ? `${item.user.age} лет`
                                        : item.user.age === 0
                                        ? ""
                                        : ""}
                                    </p>

                                    {item.user.age === 0 ? (
                                      ""
                                    ) : (
                                      <span className="dot" />
                                    )}
                                    <p className="text22">
                                      {item.user.city.split(" ", 1)}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p
                              className="swiperParagraph2"
                              style={{ marginTop: "20px" }}
                            >
                              {_.get(item, "content")}
                            </p>
                          </div>
                        ))}
                      </Slider>
                    </HomeSwiperStyle>
                  ) : null}
                </>
              </div>
            </HomeContainer>
          </HomeStyle>
        )}
      </AppMAIN>
      <AppFooter>
        <FlexBoxBtn style={{ padding: "0" }}>
          <button type="submit" className="appBtnGreen2">
            Отправить push-уведомление
          </button>
        </FlexBoxBtn>
      </AppFooter>
    </>
  );
};

export default PlayersPage;
