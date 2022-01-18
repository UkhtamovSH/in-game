import React from "react";
import { Link } from "react-router-dom";
import { AllGamesContainer, AllGamesMain } from "../styles/AllGames.style";
import { AppHeaderFlex } from "../styles/ContainerFluid.styled";
import ArrowRight from "../assets/svg/Arrow - Right.svg";
import _, { map } from "lodash";
import { useState } from "react";
import { GetAuthInstance } from "../helpers/httpClient";
import { useEffect } from "react";
import DefaultClub from "../assets/Img/defaultClub.png";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const SPitchesContainer = styled.div`
.SPitchesDiv{
    position: relative;
    z-index: 1;
    width: 100%;
    height: 194px;
    border-radius: 16px;
    background-color: #484343;
    overflow: hidden;
    margin: 10px auto;
  }
}
`;

const AllGames = () => {
  const [data, setData] = useState([]);
  const [preLoader, setPreLoader] = useState(false);

  const getData = () => {
    setPreLoader(true);
    GetAuthInstance()
      .get("/api/v1/game-end/?")
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
    <AllGamesContainer>
      <AppHeaderFlex>
        <div className="">
          <Link to="/home" className="">
            <img src={ArrowRight} alt="" />
          </Link>
        </div>
        <div className="">
          <span>{t("commentSwiper.pastGames")}</span>
        </div>
        <div className=""></div>
      </AppHeaderFlex>
      <AllGamesMain>
        {preLoader ? (
          <SPitchesContainer>
            {map([1, 2, 3, 4, 5, 6, 7, 8], (_, index) => (
              <div key={index} className="SPitchesDiv beforeAnimation33" />
            ))}
          </SPitchesContainer>
        ) : (
          <>
            {" "}
            {data.map((item, index) => (
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
                <div className="sliderImg">
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
                  <p className="ratePlayerText">
                    {t("commentSwiper.ratePlayers")}
                  </p>
                </Link>
              </div>
            ))}
          </>
        )}
      </AllGamesMain>
    </AllGamesContainer>
  );
};

export default AllGames;
