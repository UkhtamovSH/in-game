import Slider from "react-slick";
import strokeIcon from "../../assets/Img/Stroke 1.png";
import commentImg from "../../assets/Img/Ellipse 158.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HomeSwiperStyle } from "./HomeSwiperStyle";

const CommentSwiper = () => {
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
          Все отзывы <img src={strokeIcon} alt="" />{" "}
        </label>
      </div>
      <Slider {...settings}>
        <div className="sliderDiv">
          <div className="commenterImg">
            <img src={commentImg} alt="" />
            <div className="commenterName">
              <h5>Шахзод Камаров</h5>
              <div className="ageAvatar2">
                <p>23 лет</p>
                <span></span>
                <p>Ташкент</p>
              </div>
            </div>
          </div>
              <p className="swiperParagraph">
                По своей сути рыбатекст является альтернативой традиционному
                lorem ipsum, который вызывает у некторых людей недоумение при
                попытках прочитать рыбу текст.
              </p>
        </div>
        <div className="sliderDiv">
          <div className="commenterImg">
            <img src={commentImg} alt="" />
            <div className="commenterName">
              <h5>Шахзод Камаров</h5>
              <div className="ageAvatar2">
                <p>23 лет</p>
                <span></span>
                <p>Ташкент</p>
              </div>
            </div>
          </div>
              <p className="swiperParagraph">
                По своей сути рыбатекст является альтернативой традиционному
                lorem ipsum, который вызывает у некторых людей недоумение при
                попытках прочитать рыбу текст.
              </p>
        </div>
      </Slider>
    </HomeSwiperStyle>
  );
};

export default CommentSwiper;
