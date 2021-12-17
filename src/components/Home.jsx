import { AppFooter2, AppMAIN2 } from "../styles/ContainerFluid.styled";
import Navigation from "../components/sections/Navigation";
import { HomeContainer, HomeStyle, HomeTimeStyle } from "../styles/Home.styled";
import settingImg from "../assets/Img/Setting.png";
import editImg from "../assets/Img/Edit.png";
import InGameLogo from "../assets/Img/Ball.png";
import WatchImg from "../assets/Img/Endurance.png";
import WatchImg2 from "../assets/Img/Vector1.png";
import More from "../assets/Img/More.png";
import HomeSwiper from "../components/sections/HomeSwiper";
import CommentSwiper from "../components/sections/CommentSwiper";
import { useEffect, useState } from "react";
import { GetAuthInstance } from "../helpers/httpClient";
import { get } from "lodash";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Home = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState([]);

  const getData = () => {
    GetAuthInstance()
      .get("/api/v1/get-user/?lan=en")
      .then((res) => {
        setData(res.data.data);
        setStatus(res.data.status);
      })
      .catch((err) => {});
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <AppMAIN2>
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
              <img className="avatarImg" src={data.avatar} alt="" />
              <div className="beOnline">
                <span></span>
                {<span>{status === 1 ? "Online" : "Offline"}</span>}
              </div>
              <h2>{data.full_name}</h2>
              <div className="ageAvatar">
                <p>{data.age} года</p>
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
                        <p>Goalkeeper</p>
                      </div>
                    </div>
                    <div className="topWinContain">
                      <img src={InGameLogo} alt="" />
                      <div className="topWin">
                        <p>{get(data, "positions.Forward")}% </p>
                        <p>Forward</p>
                      </div>
                    </div>
                  </div>
                  <div className="rightWin">
                    <div className="topWinContain">
                      <img src={InGameLogo} alt="" />
                      <div className="topWin">
                        <p>{get(data, "positions.Midfielder")}% </p>
                        <p>Midfielder</p>
                      </div>
                    </div>
                    <div className="topWinContain">
                      <img src={InGameLogo} alt="" />
                      <div className="topWin">
                        <p>{get(data, "positions.Defender")}% </p>
                        <p>Defender</p>
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
                    <h1>{data.ball}</h1>
                    <span>очков</span>
                  </div>
                </div>
                <div className="firstTime">
                  <div className="watch">
                    <img src={WatchImg2} alt="" />
                  </div>

                  <div className="watchTitle">
                    <h1>{data.division}</h1>
                    <span>дивизион</span>
                  </div>
                </div>
              </HomeTimeStyle>
              <HomeSwiper />
              <CommentSwiper />
            </div>
          </HomeContainer>
        </HomeStyle>
      </AppMAIN2>
      <AppFooter2>
        <Navigation />
      </AppFooter2>
    </>
  );
};

export default Home;
