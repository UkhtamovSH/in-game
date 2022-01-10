import Slider from "react-slick";
// import sliderImg from "../../assets/Img/Rectangle 1531.png";
import { HomeSwiperStyle } from "../../styles/HomeSwiperStyle";
import strokeIcon from "../../assets/Img/Stroke 1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import _ from "lodash";
import { Link } from "react-router-dom";
// import ImageLoading from "../../assets/Img/default.png";
import DefaultClub from "../../assets/Img/defaultClub.png";

const HomeSwiper = ({ gameEnd, settings }) => {
  return (
    <>
      {gameEnd.length ? (
        <HomeSwiperStyle>
          <div className="lastPlays">
            <label>Прошедшие игры</label>
            <label>
              <Link to="/all-games">
                Все игры <img src={strokeIcon} alt="" />
              </Link>
            </label>
          </div>
          <Slider {...settings}>
            {gameEnd.map((item, index) => (
              <div className="sliderDiv" key={index}>
                <div className="commandResult">
                  <div className="comandaLogo">
                    <img
                      src={
                        _.get(item.GameClub[0], "football_club.image", 0)
                          ? _.get(item.GameClub[0], "football_club.image", 0)
                          : DefaultClub
                      }
                      alt=""
                    />
                    <p>{_.get(item.GameClub[0], "football_club.name", 0)}</p>
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
                        _.get(item.GameClub[1], "football_club.image", 1)
                          ? _.get(item.GameClub[1], "football_club.image", 1)
                          : DefaultClub
                      }
                      alt=""
                    />
                    <p>{_.get(item.GameClub[1], "football_club.name", 1)}</p>
                  </div>
                </div>
                <div className="sliderImg" style={{ marginLeft: "0" }}>
                  {item.Gallery.length ? (
                    <Link to={"/photos/" + item.id}>
                      <img
                        src={
                          item.Gallery.length && _.get(item.Gallery, 0)
                            ? _.get(item.Gallery, 0)
                            : null
                        }
                        className={
                          item.Gallery.length && _.get(item.Gallery, 0)
                            ? ""
                            : "hiddenIMG"
                        }
                        alt=""
                      />
                    </Link>
                  ) : null}
                  {item.Gallery.length ? (
                    <Link to={"/photos/" + item.id}>
                      <img
                        src={
                          item.Gallery.length && _.get(item.Gallery, 1)
                            ? _.get(item.Gallery, 1)
                            : null
                        }
                        className={
                          item.Gallery.length && _.get(item.Gallery, 1)
                            ? ""
                            : "hiddenIMG"
                        }
                        alt=""
                      />
                    </Link>
                  ) : null}
                  {item.Gallery.length ? (
                    <Link to={"/photos/" + item.id}>
                      <img
                        src={
                          item.Gallery.length && _.get(item.Gallery, 2)
                            ? _.get(item.Gallery, 2)
                            : null
                        }
                        className={
                          item.Gallery.length && _.get(item.Gallery, 2)
                            ? ""
                            : "hiddenIMG"
                        }
                        alt=""
                      />
                    </Link>
                  ) : null}
                </div>
                <Link to={`/game-player-reting/${item.id}`}>
                  <p>Оценить игроков</p>
                </Link>
              </div>
            ))}
          </Slider>
        </HomeSwiperStyle>
      ) : null}
    </>
  );
};

export default HomeSwiper;
