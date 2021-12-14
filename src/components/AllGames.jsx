import React from "react";
import { Link } from "react-router-dom";
import { AllGamesContainer, AllGamesMain } from "../styles/AllGames.style";
import { AppHeaderFlex } from "../styles/ContainerFluid.styled";
import ArrowRight from "../assets/svg/Arrow - Right.svg";
import _ from "lodash";
import { useState } from "react";
import { GetAuthInstance } from "../helpers/httpClient";
import { useEffect } from "react";

const AllGames = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    GetAuthInstance()
      .get("/api/v1/game-end/?")
      .then((res) => {
        setData(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AllGamesContainer>
      <AppHeaderFlex>
        <div className="">
          <Link to="/home" className="">
            <img src={ArrowRight} alt="" />
          </Link>
        </div>
        <div className="">
          <span>Прошедшие игры</span>
        </div>
        <div className=""></div>
      </AppHeaderFlex>
      <AllGamesMain>
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
              <Link to={"/photos/" + item.id}>
                <img src={_.get(item.Gallery, 0)} alt="" />{" "}
              </Link>
              <Link to={"/photos/" + item.id}>
                {" "}
                <img src={_.get(item.Gallery, 1)} alt="" />
              </Link>
              <Link to={"/photos/" + item.id}>
                <img src={_.get(item.Gallery, 2)} alt="" />
              </Link>
            </div>
            <Link to={`/game-player-reting/${item.id}`}>
              <p>Оценить игроков</p>
            </Link>
          </div>
        ))}
      </AllGamesMain>
    </AllGamesContainer>
  );
};

export default AllGames;
