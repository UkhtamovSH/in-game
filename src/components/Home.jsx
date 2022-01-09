import { AppFooter2, AppMAIN2 } from "../styles/ContainerFluid.styled";
import Navigation from "../components/sections/Navigation";
import {
  HomeContainer,
  HomeStyle,
  HomeTimeStyle,
  SHomeContainer,
} from "../styles/Home.styled";
import settingImg from "../assets/Img/Setting.png";
import editImg from "../assets/Img/Edit.png";
import InGameLogo from "../assets/Img/Ball.png";
import WatchImg from "../assets/Img/Endurance.png";
import WatchImg2 from "../assets/Img/Vector1.png";
import More from "../assets/Img/More.png";
import HomeSwiper from "../components/sections/HomeSwiper";
import CommentSwiper from "../components/sections/CommentSwiper";
import DefaultImg from "../assets/Img/default.png";
import { useEffect, useState } from "react";
import { GetAuthInstance } from "../helpers/httpClient";
import { get } from "lodash";
import { Link } from "react-router-dom";
import { StylesHidden } from "../styles/Global.styled";

const Home = () => {
  const [data, setData] = useState([]);
  const [gameEnd, setGameEnd] = useState([]);
  const [commentSwiper, setCommentSwiper] = useState([]);
  const [status, setStatus] = useState();
  const [preLoading, setPreLoading] = useState(false);

  const getData = () => {
    setPreLoading(true);
    GetAuthInstance()
      .get("/api/v1/get-user/?lan=en")
      .then((res) => {
        const status = get(res, "data.status");
        if (status === 1) {
          setData(res.data.data);
          setStatus(res.data.status);
        }
      })
      .catch((err) => {})
      .finally(() => setPreLoading(false));
  };

  const getGameEnd = () => {
    setPreLoading(true);
    GetAuthInstance()
      .get("/api/v1/game-end/")
      .then((res) => {
        setGameEnd(res.data.results);
      })
      .catch((err) => {})
      .finally(() => setPreLoading(false));
  };

  const getCommentSwiper = () => {
    setPreLoading(true);
    GetAuthInstance()
      .get("/api/v1/game/review/")
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
    speed: 2000,
    autoplaySpeed: 5000,
  };

  useEffect(() => {
    getData();
    getGameEnd();
    getCommentSwiper();
    document.body.style.overflow = "visible";
  }, []);

  return (
    <>
      {preLoading ? (
        <SHomeContainer>
          <div className="sHomeHeader beforeAnimation22" />
          <div className="sHomeHeaderRound">
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
        <AppMAIN2 style={{ marginBottom: "24px" }}>
          <HomeStyle>
            <div className="topSetting">
              <div>
                <Link to="/profile-edit">
                  <img src={editImg} alt="" />
                </Link>
              </div>
              <div>
                <Link to="/setting">
                  <img src={settingImg} alt="" />
                </Link>
              </div>
            </div>
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
                  {status === 1 ? (
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
                    <div className="watch">
                      <img src={WatchImg} alt="" />
                    </div>
                    <div className="watchTitle">
                      <h1>{data.game_time}.m</h1>
                      <span>время в игре</span>
                    </div>
                  </div>
                  <div className="firstTime">
                    <div className="watch">
                      <img src={More} alt="" />
                    </div>
                    <div className="watchTitle">
                      <h1>{data.ball ? data.ball : "Нет очков"}</h1>
                      <span>очков</span>
                    </div>
                  </div>
                  <div className="firstTime">
                    <div className="watch">
                      <img src={WatchImg2} alt="" />
                    </div>

                    <div className="watchTitle">
                      <h1>{data.division ? data.division : "Нет дивизион"}</h1>
                      <span>дивизион</span>
                    </div>
                  </div>
                </HomeTimeStyle>
                <HomeSwiper gameEnd={gameEnd} settings={settings} />
                <CommentSwiper
                  commentSwiper={commentSwiper}
                  settings={settings}
                />
              </div>
            </HomeContainer>
          </HomeStyle>
        </AppMAIN2>
      )}
      <AppFooter2>
        <Navigation />
      </AppFooter2>
    </>
  );
};

export default Home;
