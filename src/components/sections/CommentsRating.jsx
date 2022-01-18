import _, { map } from "lodash";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetAuthInstance } from "../../helpers/httpClient";
import DefaultImg from "../../assets/Img/default.png";
import {
  AppHeader,
  AppHeaderFlex,
  AppMAIN,
} from "../../styles/ContainerFluid.styled";
import ArrowRight from "../../assets/svg/Arrow - Right.svg";
import { HomeSwiperStyle } from "../../styles/HomeSwiperStyle";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const SPitchesContainer = styled.div`
.SPitchesDiv{
    position: relative;
    z-index: 1;
    width: 100%;
    height: 174px;
    border-radius: 16px;
    background-color: #484343;
    overflow: hidden;
    margin: 10px auto;
  }
}
`;

const CommentsRating = () => {
  const [data, setData] = useState([]);
  const [preLoader, setPreLoader] = useState(false);
  const navigate = useNavigate();

  const getData = () => {
    setPreLoader(true);
    GetAuthInstance()
      .get("/api/v1/game/review/")
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => {})
      .finally(() => setPreLoader(false));
  };
  useEffect(() => {
    getData();
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <AppHeader>
        <AppHeaderFlex>
          <div className="">
            <span onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>
              <img src={ArrowRight} alt="" />
            </span>
          </div>
          <div className="">
            <span>{t("allReviewsMain.allReviews")}</span>
          </div>
          <div className=""></div>
        </AppHeaderFlex>
      </AppHeader>
      <AppMAIN
        style={{
          marginLeft: "15px",
          marginRight: "15px",
        }}
      >
        {preLoader ? (
          <SPitchesContainer>
            {map([1, 2, 3, 4, 5, 6, 7, 8], (_, index) => (
              <div key={index} className="SPitchesDiv beforeAnimation33" />
            ))}
          </SPitchesContainer>
        ) : (
          <HomeSwiperStyle>
            {data.map((item, index) => (
              <div
                className="sliderDiv sliderDivv"
                style={{ marginTop: "10px!important" }}
                key={index}
              >
                <div className="sliderDiv3">
                  <div className="sliderDiv3Sub1">
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
                <p className="swiperParagraph3" style={{ marginTop: "20px" }}>
                  {_.get(item, "content")}
                </p>
              </div>
            ))}
          </HomeSwiperStyle>
        )}
      </AppMAIN>
    </>
  );
};

export default CommentsRating;
