import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ArrowRight from "../assets/svg/Arrow - Right.svg";
import ArrowRight2 from "../assets/Img/Arrow - Right 2.png";
import {
  AppHeader,
  AppHeaderFlex,
  AppMAIN,
} from "../styles/ContainerFluid.styled";
import { GetAuthInstance } from "../helpers/httpClient";
import {
  GamePlayer,
  GamePlayerCont,
  GamePlayerIcon,
  GamePlayerImg,
  GamePlayerName,
  GamePlayerRating,
  GamePlayerRegion,
} from "../styles/GamePlayerRating";
import _, { get } from "lodash";
import InfiniteScroll from "react-infinite-scroll-component";

const GamePlayerReting = () => {
  const [data, setData] = useState([]);
  const [goal, setGoal] = useState([]);
  const params = useParams();
  const [nextUrl, setNextUrl] = useState("");

  useEffect(() => {
    getData();
    getGoal();
  }, [params.id]);

  const getData = () => {
    const next_url = `/api/v1/game-user/?game=${params.id}`;
    GetAuthInstance()
      .get(next_url)
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => {});
  };

  const getGoal = () => {
    GetAuthInstance()
      .get(`api/v1/game-end/?game=${params.id}`)
      .then((res) => {
        setGoal(res.data.results);
      })
      .catch((err) => {});
  };

  const goalID = _.find(goal, "id");

  return (
    <>
      <AppHeader>
        <AppHeaderFlex>
          <div className="">
            <Link to="/" className="">
              <img src={ArrowRight} alt="" />
            </Link>
          </div>
          {goal.map((item, index) => (
            <>
              {params.id == item.id ? (
                <div className="" key={index}>
                  <span>
                    {_.get(item.GameClub[0], "football_club.name", 0)}{" "}
                    {_.get(item.GameClub[0], "goal")}:
                    {_.get(item.GameClub[1], "goal")}{" "}
                    {_.get(item.GameClub[1], "football_club.name", 1)}
                  </span>
                </div>
              ) : (
                ""
              )}
            </>
          ))}
          <div />
        </AppHeaderFlex>
        <AppMAIN>
          <GamePlayerRating>
            <p>Выберите игрока которого хотите оценить</p>
          </GamePlayerRating>
          <InfiniteScroll
            dataLength={data.length} //This is important field to render the next data
            next={() => {
              getData(2, nextUrl);
            }}
            hasMore={nextUrl ? true : false}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>You have seen it all</b>
              </p>
            }
          >
            {data.map((item, index) => (
              <Link to={`/game-player-reting-mark/${item.id}`} key={index}>
                <GamePlayer>
                  <GamePlayerCont>
                    <GamePlayerImg>
                      <img src={_.get(item, "user.avatar")} alt="" />
                      <p>{item.position}</p>
                    </GamePlayerImg>
                    <GamePlayerName>
                      <h3>{_.get(item, "user.full_name")}</h3>
                      <GamePlayerRegion>
                        <p>{_.get(item, "user.age")} года</p>
                        <span></span>
                        <p>{_.get(item, "user.city")}</p>
                      </GamePlayerRegion>
                    </GamePlayerName>
                  </GamePlayerCont>
                  <GamePlayerIcon>
                    <img src={ArrowRight2} alt="" />
                  </GamePlayerIcon>
                </GamePlayer>
              </Link>
            ))}
          </InfiniteScroll>
        </AppMAIN>
      </AppHeader>
    </>
  );
};

export default GamePlayerReting;
