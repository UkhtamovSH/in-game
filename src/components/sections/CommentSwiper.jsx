import Slider from "react-slick";
import strokeIcon from "../../assets/Img/Stroke 1.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HomeSwiperStyle } from "../../styles/HomeSwiperStyle";
import _ from "lodash";
import { Link } from "react-router-dom";
import DefaultImg from "../../assets/Img/default.png";
import { useTranslation } from "react-i18next";

const CommentSwiper = ({ settings, commentSwiper }) => {
  const { t } = useTranslation();

  return (
    <>
      {commentSwiper.length ? (
        <HomeSwiperStyle>
          <div className="lastPlays">
            <label>{t("reviewsAboutYou.reviewsAbout")}</label>
            <label>
              {
                <Link to="/comments-rating">
                  {t("allReviewsMain.allReviews")}{" "}
                  <img src={strokeIcon} alt="" />
                </Link>
              }
            </label>
          </div>
          <Slider {...settings}>
            {commentSwiper.map((item, index) => (
              <div className="" key={index}>
                <div className="sliderDiv2">
                  <div className="sliderDiv2Sub1">
                    <img
                      src={item.user.avatar ? item.user.avatar : DefaultImg}
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
                          ? item.user.full_name.substr(0, 20) + "..."
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
                            : ""}
                        </p>

                        {item.user.age === 0 ? "" : <span className="dot" />}
                        <p className="text22">{item.user.city.split(" ", 1)}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="swiperParagraph2" style={{ marginTop: "20px" }}>
                  {_.get(item, "content")}
                </p>
              </div>
            ))}
          </Slider>
        </HomeSwiperStyle>
      ) : null}
    </>
  );
};

export default CommentSwiper;
