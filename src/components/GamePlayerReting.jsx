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
  GamePlayerContain,
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
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
    getGoal();
  }, [params.id]);

  const getData = () => {
    if (page === 1) {
      setLoading(true);
    }
    GetAuthInstance()
      .get(`/api/v1/game-user/?per_page=10&game=${params.id}&page=${page}`)
      .then((res) => {
        setData([...data, ...res.data.results]);
        setNextUrl(res.data.next);
        setPage(page + 1);
        setLoading(false);
        console.log(res);
        if (res.data.next) {
          setHasMore(true);
        } else {
          setHasMore(false);
        }
      })
      .catch((err) => {
        setHasMore(false);
      });
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
            <div key={index}>
              {params.id == item.id ? (
                <div className="">
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
            </div>
          ))}
          <div />
        </AppHeaderFlex>
        <AppMAIN>
          <GamePlayerRating>
            <p>Выберите игрока которого хотите оценить</p>
          </GamePlayerRating>
          {loading ? (
            <h3>Loading......</h3>
          ) : (
            <InfiniteScroll
              dataLength={data.length} //This is important field to render the next data
              next={getData}
              hasMore={hasMore}
              loader={<h4>Loading...</h4>}
            >
              {data.map((item, index) => (
                <GamePlayerContain key={index}>
                  <Link to={`/game-player-reting-mark/${item.id}`}>
                    <GamePlayer>
                      <GamePlayerCont>
                        <GamePlayerImg>
                          <img src={_.get(item, "user.avatar")} alt="" />
                          <p>
                            {item.position === 1
                              ? "a"
                              : item.position === 2
                              ? "b"
                              : item.position === 3
                              ? "c"
                              : item.position === 4
                              ? "d"
                              : ""}
                          </p>
                        </GamePlayerImg>
                        <GamePlayerName>
                          <h3>{_.get(item, "user.full_name")}</h3>
                          <GamePlayerRegion>
                            <p>
                              {" "}
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
                                ? `${item.user.age} год`
                                : (item.user.age > 1 && item.user.age <= 4) ||
                                  (item.user.age > 21 && item.user.age <= 24) ||
                                  (item.user.age > 31 && item.user.age <= 34) ||
                                  (item.user.age > 41 && item.user.age <= 44) ||
                                  (item.user.age > 51 && item.user.age <= 54) ||
                                  (item.user.age > 61 && item.user.age <= 64) ||
                                  (item.user.age > 71 && item.user.age <= 74) ||
                                  (item.user.age > 81 && item.user.age <= 84) ||
                                  (item.user.age > 91 && item.user.age <= 94) ||
                                  (item.user.age > 101 &&
                                    item.user.age <= 104) ||
                                  (item.user.age > 111 && item.user.age <= 114)
                                ? `${item.user.age} года`
                                : (item.user.age > 4 && item.user.age <= 20) ||
                                  (item.user.age > 24 && item.user.age <= 30) ||
                                  (item.user.age > 34 && item.user.age <= 40) ||
                                  (item.user.age > 44 && item.user.age <= 50) ||
                                  (item.user.age > 54 && item.user.age <= 60) ||
                                  (item.user.age > 64 && item.user.age <= 70) ||
                                  (item.user.age > 74 && item.user.age <= 80) ||
                                  (item.user.age > 84 && item.user.age <= 90) ||
                                  (item.user.age > 94 &&
                                    item.user.age <= 100) ||
                                  (item.user.age > 104 &&
                                    item.user.age <= 110) ||
                                  (item.user.age > 114 && item.user.age <= 120)
                                ? `${item.user.age} лет`
                                : item.user.age === 0
                                ? ""
                                : ""}
                            </p>
                            {/* <span></span> */}
                            <p>{_.get(item, "user.city")}</p>
                          </GamePlayerRegion>
                        </GamePlayerName>
                      </GamePlayerCont>
                      <GamePlayerIcon>
                        <img src={ArrowRight2} alt="" />
                      </GamePlayerIcon>
                    </GamePlayer>
                  </Link>
                </GamePlayerContain>
              ))}
            </InfiniteScroll>
          )}
        </AppMAIN>
      </AppHeader>
    </>
  );
};

export default GamePlayerReting;
