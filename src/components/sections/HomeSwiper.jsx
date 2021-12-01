import Slider from "react-slick";
import sliderImg from "../../assets/Img/Rectangle 1531.png";
import { HomeSwiperStyle } from "../../styles/HomeSwiperStyle";
import strokeIcon from "../../assets/Img/Stroke 1.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GetAuthInstance } from "../../helpers/httpClient";
import { useState, useEffect } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";

const HomeSwiper = () => {

  // const params =useParams  
  

  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "40px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };

  const [data, setData] = useState([]);
  const getData = () => {
    GetAuthInstance()
      .get("/api/v1/game-end/?")
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => {
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <HomeSwiperStyle>
      <div className="lastPlays">
        <label>Прошедшие игры</label>
        <label>
          Все игры <img src={strokeIcon} alt="" />{" "}
        </label>
      </div>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div className="sliderDiv" key={index}>
            <div className="commandResult">
              <div className="comandaLogo">
                <img
                  src={_.get(item.GameClub[0], "football_club.image", 0)}
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
                  src={_.get(item.GameClub[1], "football_club.image", 1)}
                  alt=""
                />
                <p>{_.get(item.GameClub[1], "football_club.name", 1)}</p>
              </div>
            </div>
            <div className="sliderImg">
              <img src={sliderImg} alt="" />
              <img src={sliderImg} alt="" />
              <img src={sliderImg} alt="" />
            </div>
            <Link to={`/game-player-reting/${item.id}`}>
              <p>Оценить игроков</p>
            </Link>
          </div>
        ))}
      </Slider>
    </HomeSwiperStyle>
  );
};

export default HomeSwiper;
