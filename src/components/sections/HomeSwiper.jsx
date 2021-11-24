import Slider from "react-slick";
import PaxtaKorLogo from "../../assets/Img/image 20.png";
import BunyodkorLogo from "../../assets/Img/image 21.png";
import sliderImg from "../../assets/Img/Rectangle 1531.png";
import { HomeSwiperStyle } from "../../styles/HomeSwiper/HomeSwiperStyle";
import strokeIcon from "../../assets/Img/Stroke 1.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSwiper = () => {
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
              <label>Прошедшие игры</label>
              <label>Все игры <img src={strokeIcon} alt="" /> </label>
            </div>
      <Slider {...settings}>
        <div className="sliderDiv">
          <div className="commandResult">
                <div className="comandaLogo">
                  <img src={PaxtaKorLogo} alt="" />
                  <p>Paxtakor</p>
                </div>
                <div className="comandaLogo">
                  <h3>4 : 3</h3>
                  <span>17.09.2021</span>
                </div>
                <div className="comandaLogo">
                  <img src={BunyodkorLogo} alt="" />
                  <p>Paxtakor</p>
                </div>
              </div>
              <div className="sliderImg">
                <img src={sliderImg} alt="" />
                <img src={sliderImg} alt="" />
                <img src={sliderImg} alt="" />
              </div>
              <p>Оценить игроков</p>
            </div>
       
        <div className="sliderDiv">
          <div className="commandResult">
                <div className="comandaLogo">
                  <img src={PaxtaKorLogo} alt="" />
                  <p>Paxtakor</p>
                </div>
                <div className="comandaLogo">
                  <h3>4 : 3</h3>
                  <span>17.09.2021</span>
                </div>
                <div className="comandaLogo">
                  <img src={BunyodkorLogo} alt="" />
                  <p>Paxtakor</p>
                </div>
              </div>
              <div className="sliderImg">
                <img src={sliderImg} alt="" />
                <img src={sliderImg} alt="" />
                <img src={sliderImg} alt="" />
              </div>
              <p>Оценить игроков</p>
            </div>
       
      </Slider>
    </HomeSwiperStyle>
  );
};

export default HomeSwiper;
