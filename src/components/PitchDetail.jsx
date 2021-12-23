import { StadionPage } from "../styles/PitchesDtail.style";
import arrowRight from "../assets/Img/Arrow - Right.png";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import priceStar from "../assets/Img/Vector.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { useState } from "react";
import { GetAuthInstance } from "../helpers/httpClient";
import _ from "lodash";
const PitchDetail = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  const getData = () => {
    GetAuthInstance()
      .get("api/v1/pitch/" + params.id)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, [params.id]);

  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "80px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <StadionPage>
      <div className="backIcon">
        <Link to="/pitches">
          <img src={arrowRight} alt="" />
        </Link>
        <h3>Поле для мини Футбола</h3>
      </div>
      <div>
        <div className="swiper">
          <Slider {...settings} className="slider">
            {_.get(data, "Image", []).map((item, index) => (
              <img src={item} key={index} alt="" />
            ))}
          </Slider>
        </div>
        <div className="aboutStadion">
          <div className="polyaNumber">
            <div className="btnPozvonit">
              <div className="appBtnGreen"><a href="tel: +998 71 267 00 67">Позвонить</a></div>
            </div>
            <h3>Контактные данные</h3>
            {_.get(data, "Contact", []).map((item, index) => (
              <p>{item.phone}</p>
            ))}
            <p className="polyaGmail">{data.email}</p>
          </div>
          <div className="polyaPrice">
            <h3>Прайслист</h3>
            {_.get(data, "Price", []).map((item, index) => (
              <p key={index}>
                {item.hour} час - {item.price} сум
              </p>
            ))}
          </div>
          <div className="polyaMark">
            <h3>Средняя оценка поля</h3>
            <div className="priceMark">
              <div className="priceStar">
                <img src={priceStar} alt="" />
                <img src={priceStar} alt="" />
                <img src={priceStar} alt="" />
                <img src={priceStar} alt="" />
                <img src={priceStar} alt="" />
              </div>
              <p>(4.6)</p>
            </div>
          </div>
          <div className="polyaMap">
            <h3>Адрес поля</h3>
            <p>{_.get(data, "region", []).name}</p>
            <div className="polyaInMap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.8953998465963!2d69.27740401526155!3d41.31113907927126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2931f41f23%3A0x81095e06b654b845!2z0KHQutCy0LXRgCDQuNC8LiDQkNC80LjRgNCwINCi0LjQvNGD0YDQsA!5e0!3m2!1sru!2s!4v1637925377925!5m2!1sru!2s"
                width="90%"
                height="343"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </StadionPage>
  );
};

export default PitchDetail;
