import {
  AppFooter,
  AppHeader,
  AppHeaderFlex,
  AppMAIN,
} from "../styles/ContainerFluid.styled";
import InGameLogo from "../assets/Img/Ball.png";
import WatchImg from "../assets/Img/Endurance.png";
import WatchImg2 from "../assets/Img/Vector1.png";
import More from "../assets/Img/More.png";
import { useNavigate } from "react-router-dom";
import ArrowRight from "../assets/svg/Arrow - Right.svg";
import { useParams } from "react-router";
import {
  AvatarImgDiv,
  AvatarWrapDiv,
  HomeContainer,
  HomeStyle,
  HomeTimeStyle,
  PlayerAvatarDiv,
} from "../styles/PlayerPage.styled";
import { useEffect, useState } from "react";
import { GetAuthInstance } from "../helpers/httpClient";
import { get } from "lodash";

const PlayersPage = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  const getData = () => {
    GetAuthInstance()
      .get(`/api/v1/get-other-user/?lan=ru&other-user=${params.id}`)
      .then((res) => {
        setData(res.data.data);
        setStatus(res.data.status);
      })
      .catch((err) => {});
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <AppMAIN style={{ padding: "0 15px" }}>
        <HomeStyle>
          <HomeContainer>
            <div className="avatarWrapper">
              <AvatarWrapDiv>
                <AvatarImgDiv>
                  <img className="avatarImg" src={data.avatar} alt="" />
                </AvatarImgDiv>
                <PlayerAvatarDiv>
                  <div className="beOnline">
                    <span></span>
                    {
                      <span>
                        {status === 1
                          ? "Online"
                            ? status === 1
                            : "Offline"
                          : null}
                      </span>
                    }
                  </div>
                  <h2>{data.full_name}</h2>
                  <div className="ageAvatar">
                    <p>{data.age} года</p>
                    <span></span>
                    <p>{data?.city?.name.split(" ", 1)}</p>
                  </div>
                </PlayerAvatarDiv>
              </AvatarWrapDiv>
              <div className="wins">
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
                <div className="leftWin">
                  <p>{data.victory}% </p>
                  <p>Побед</p>
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
              {/* <HomeSwiper />
              <CommentSwiper /> */}
            </div>
          </HomeContainer>
        </HomeStyle>
      </AppMAIN>
      <AppFooter>
        <div className="appBtnGreen">Отправить push-уведомление</div>
      </AppFooter>
    </>
  );
};

export default PlayersPage;
