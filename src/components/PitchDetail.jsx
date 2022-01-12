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
import styled from "styled-components";
import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps";

const SliderPitch = styled.div`
  .slick-slide > div {
    margin: auto 10px;
  }
`;
const SPitchesContainer = styled.div`
  .SPitchesDiv {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 154px;
    border-radius: 16px;
    background-color: #484343;
    overflow: hidden;
    margin: 10px auto;
  }
  .SPitchesDiv2 {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 30px;
    border-radius: 16px;
    background-color: #484343;
    overflow: hidden;
    margin: 10px auto;
  }
  .SPitchesDiv3 {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 30px;
    border-radius: 16px;
    background-color: #484343;
    overflow: hidden;
    margin: 10px auto;
  }

  .SPitchesDiv ,
  .SPitchesDiv2,
  .SPitchesDiv3{
      position: relative;
      z-index: 1;
      width: 100%;
      border-radius: 16px;
      background-color: #484343;
      overflow: hidden;
      margin: 10px auto;
  }
  .SPitchesDiv {
    height: 154px;
  }
  .SPitchesDiv2 {
    height: 30px;
  }
  .SPitchesDiv3 {
    height: 60px;
  }
  }
`;

const PitchDetail = () => {
  const [data, setData] = useState([]);
  const [preLoading, setPreLoading] = useState(false);
  const params = useParams();
  const getData = () => {
    setPreLoading(true);
    GetAuthInstance()
      .get("api/v1/pitch/" + params.id)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {})
      .finally(() => setPreLoading(false));
  };

  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "80px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  const tel = _.get(data.Contact, "0", {});
  const lat = _.get(data, "latitude") ? _.get(data, "latitude") : null;
  const lon = _.get(data, "longitude") ? _.get(data, "longitude") : null;

  return (
    <>
      {preLoading ? (
        <SPitchesContainer style={{ margin: "auto 15px" }}>
          <div className="SPitchesDiv beforeAnimation33" />
          <div className="SPitchesDiv2 beforeAnimation" />
          <div className="SPitchesDiv2 beforeAnimation" />
          <div className="SPitchesDiv2 beforeAnimation" />
          <div className="SPitchesDiv2 beforeAnimation" />
          <div className="SPitchesDiv2 beforeAnimation" />
          <div className="SPitchesDiv2 beforeAnimation" />
          <div className="SPitchesDiv2 beforeAnimation" />
          <div className="SPitchesDiv2 beforeAnimation" />
          <div className="SPitchesDiv3 beforeAnimation" />
          <div className="SPitchesDiv beforeAnimation33" />
        </SPitchesContainer>
      ) : (
        <StadionPage>
          <div className="backIcon">
            <Link to="/pitches">
              <img src={arrowRight} alt="" />
            </Link>
            <h3>Поле для мини Футбола</h3>
          </div>
          <div>
            <div className="swiper">
              <SliderPitch>
                <Slider {...settings} className="slider">
                  {_.get(data, "Image", []).map((item, index) => (
                    <img src={item} key={index} alt="" />
                  ))}
                </Slider>
              </SliderPitch>
            </div>
            <div className="aboutStadion">
              <div className="polyaNumber">
                <div className="btnPozvonit">
                  <a href={`tel: ${tel.phone}`} className="appBtnGreen">
                    Позвонить
                  </a>
                </div>
                <h3>Контактные данные</h3>
                {_.get(data, "Contact", []).map((item, index) => (
                  <p key={index}>{item.phone}</p>
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
              {data.review_avg === 0 ? null : (
                <div className="polyaMark">
                  <h3>Средняя оценка поля</h3>
                  <div className="priceMark">
                    <div className="priceStar">
                      {data.review_avg === 5 ? (
                        <>
                          <img src={priceStar} alt="" />
                          <img src={priceStar} alt="" />
                          <img src={priceStar} alt="" />
                          <img src={priceStar} alt="" />
                          <img src={priceStar} alt="" />
                        </>
                      ) : data.review_avg === 4 ? (
                        <>
                          <img src={priceStar} alt="" />
                          <img src={priceStar} alt="" />
                          <img src={priceStar} alt="" />
                          <img src={priceStar} alt="" />
                        </>
                      ) : data.review_avg === 3 ? (
                        <>
                          <img src={priceStar} alt="" />
                          <img src={priceStar} alt="" />
                          <img src={priceStar} alt="" />
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                    <p style={{ transform: "translate(0,-11px)" }}>
                      ({data.review_avg})
                    </p>
                  </div>
                </div>
              )}

              <div className="polyaMap">
                <h3>Адрес поля</h3>
                <p>{_.get(data, "region", []).name}</p>
                <div
                  style={{
                    marginTop: "16px",
                  }}
                >
                  <YMaps className="Ymaps">
                    <Map
                      defaultState={{
                        center: [lat, lon],
                        zoom: 9,
                      }}
                      style={{
                        width: "100% !important",
                        height: "300px",
                      }}
                    >
                      <Placemark
                        geometry={[lat, lon]}
                        options={{
                          iconLayout: "default#image",
                        }}
                      />
                      <ZoomControl />
                    </Map>
                  </YMaps>
                </div>
              </div>
            </div>
          </div>
        </StadionPage>
      )}
    </>
  );
};

export default PitchDetail;
