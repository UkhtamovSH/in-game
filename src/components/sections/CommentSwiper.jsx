import Slider from "react-slick";
import strokeIcon from "../../assets/Img/Stroke 1.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HomeSwiperStyle } from "../../styles/HomeSwiperStyle";
import { useState } from "react";
import { GetAuthInstance } from "../../helpers/httpClient";
import { useEffect } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";

const CommentSwiper = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    GetAuthInstance()
      .get("/api/v1/game/review/")
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => {
      });
  };
  useEffect(() => {
    getData();
  }, []);

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

  return (
    <HomeSwiperStyle>
      <div className="lastPlays">
        <label>Отзывы о вас</label>
        <label>
          <Link to="/comments-rating">
            Все отзывы <img src={strokeIcon} alt="" />{" "}
          </Link>
        </label>
      </div>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div className="sliderDiv" key={index}>
            <div className="commenterImg">
              <img src={item.user.avatar} alt="" />
              <div className="commenterName">
                <h5>{item.user.full_name}</h5>
                <div className="ageAvatar2">
                  <p>{item.user.age} лет</p>
                  <span></span>
                  <p>{item.user.city}</p>
                </div>
              </div>
            </div>
            <p className="swiperParagraph">{_.get(item, "content")}</p>
          </div>
        ))}
      </Slider>
    </HomeSwiperStyle>
  );
};

export default CommentSwiper;
