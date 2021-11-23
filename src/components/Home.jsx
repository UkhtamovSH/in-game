import { Link, NavLink } from "react-router-dom";
import { AppFooter2, AppMAIN2 } from "../styles/ContainerFluid.styled";
import Navigation from "../components/sections/Navigation";
import {
  HomeContainer,
  HomeStyle,
  HomeTimeStyle,
} from "../styles/HomeStyle/Home.styled";
import settingImg from "../assets/Img/Setting.png";
import editImg from "../assets/Img/Edit.png";
import homeAvatar from "../assets/Img/AvatarImg.png";
import InGameLogo from "../assets/Img/Ball.png";
import WatchImg from "../assets/Img/Endurance.png";
import WatchImg2 from "../assets/Img/Vector.png";
import More from "../assets/Img/More.png";

const Home = () => {
  return (
    <>
      <AppMAIN2>
        <HomeStyle>
          <div className="topSetting">
            <div>
              <img src={editImg} alt="" />
            </div>
            <div>
              <img src={settingImg} alt="" />
            </div>
          </div>
          <HomeContainer>
            <div className="avatarWrap">
              <img src={homeAvatar} alt="" />
              <div className="beOnline">
                <span></span>
                <span>онлайн</span>
              </div>
              <h2>Аслан Муйдинов</h2>
              <div className="ageAvatar">
                <p>23 года</p>
                <span></span>
                <p>Ташкент</p>
              </div>
              <div className="wins">
                <div className="leftWin">
                  <p>52% </p>
                  <p>Побед</p>
                </div>
                <div className="rightWinWrapper">
                  <div className="rightWin">
                    <div className="topWinContain">
                      <img src={InGameLogo} alt="" />
                      <div className="topWin">
                        <p>52% </p>
                        <p>Вратарем</p>
                      </div>
                    </div>
                    <div className="topWinContain">
                      <img src={InGameLogo} alt="" />
                      <div className="topWin">
                        <p>52% </p>
                        <p>Вратарем</p>
                      </div>
                    </div>
                  </div>
                  <div className="rightWin">
                    <div className="topWinContain">
                      <img src={InGameLogo} alt="" />
                      <div className="topWin">
                        <p>52% </p>
                        <p>Вратарем</p>
                      </div>
                    </div>
                    <div className="topWinContain">
                      <img src={InGameLogo} alt="" />
                      <div className="topWin">
                        <p>52% </p>
                        <p>Вратарем</p>
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
                    <h1>32ч.20м.</h1>
                    <span>время в игре</span>
                  </div>
                </div>
                <div className="firstTime">
                  <div className="watch">
                    <img src={More} alt="" />
                  </div>

                  <div className="watchTitle">
                    <h1>Средний</h1>
                    <span>дивизион</span>
                  </div>
                </div>
                <div className="firstTime">
                  <div className="watch">
                    <img src={WatchImg2} alt="" />
                  </div>
                  <div className="watchTitle">
                    <h1>1250</h1>
                    <span>очков</span>
                  </div>
                </div>
              </HomeTimeStyle>
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
