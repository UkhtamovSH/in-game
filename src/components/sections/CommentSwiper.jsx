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
        // setData(res.data.results.slice(1,9))
      })
      .catch((err) => {});
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
                  <p>
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
                      : (item.user.age > 1 && item.user.age <= 4) ||
                        (item.user.age > 21 && item.user.age <= 24) ||
                        (item.user.age > 31 && item.user.age <= 34) ||
                        (item.user.age > 41 && item.user.age <= 44) ||
                        (item.user.age > 51 && item.user.age <= 54) ||
                        (item.user.age > 61 && item.user.age <= 64) ||
                        (item.user.age > 71 && item.user.age <= 74) ||
                        (item.user.age > 81 && item.user.age <= 84) ||
                        (item.user.age > 91 && item.user.age <= 94) ||
                        (item.user.age > 101 && item.user.age <= 104) ||
                        (item.user.age > 111 && item.user.age <= 114)
                      ? `${item.user.age}года`
                      : (item.user.age > 4 && item.user.age <= 20) ||
                        (item.user.age > 24 && item.user.age <= 30) ||
                        (item.user.age > 34 && item.user.age <= 40) ||
                        (item.user.age > 44 && item.user.age <= 50) ||
                        (item.user.age > 54 && item.user.age <= 60) ||
                        (item.user.age > 64 && item.user.age <= 70) ||
                        (item.user.age > 74 && item.user.age <= 80) ||
                        (item.user.age > 84 && item.user.age <= 90) ||
                        (item.user.age > 94 && item.user.age <= 100) ||
                        (item.user.age > 104 && item.user.age <= 110) ||
                        (item.user.age > 114 && item.user.age <= 120)
                        ? `${item.user.age} лет`
                        : item.user.age === 0
                        ? ""
                        : "" }
                  </p>
                  <div className="text22Flex">
                   <p className="text22">{item.user.city.split(" ", 1)}</p>
                  </div>
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
