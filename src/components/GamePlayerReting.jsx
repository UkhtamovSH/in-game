import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import ArrowRight from "../assets/svg/Arrow - Right.svg";
import ArrowRight2 from "../assets/Img/Arrow - Right 2.png";
import {
  AppHeader,
  AppHeaderFlex,
  AppMAIN,
} from "../styles/ContainerFluid.styled";
import { GetAuthInstance } from "../helpers/httpClient";
import { GamePlayerRating } from "../styles/GamePlayerRating";
import _, { get } from "lodash";
import InfiniteScroll from "react-infinite-scroll-component";
import { PlayersRatingMain } from "../styles/PlayersRatingStyle";
import DefaultImg from "../assets/Img/default.png";

const GamePlayerReting = () => {
  const [data, setData] = useState([]);
  const [goal, setGoal] = useState([]);
  const params = useParams();
  const [nextUrl, setNextUrl] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

  useEffect(() => {
    getData();
    getGoal();
  }, [params.id]);

  return (
    <>
      <AppHeader>
        <AppHeaderFlex>
          <div className="">
            <span onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>
              <img src={ArrowRight} alt="" />
            </span>
          </div>
          <div>
            {goal.map((item, index) => (
              <div key={index}>
                {params.id == item.id ? (
                  <>
                    {_.get(item.GameClub[0], "football_club.name", 0)}{" "}
                    {_.get(item.GameClub[0], "goal")}:
                    {_.get(item.GameClub[1], "goal")}{" "}
                    {_.get(item.GameClub[1], "football_club.name", 1)}
                  </>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
          <div />
        </AppHeaderFlex>
      </AppHeader>
      <AppMAIN style={{ padding: "0 15px" }}>
        <GamePlayerRating>
          <p>Выберите игрока которого хотите оценить</p>
        </GamePlayerRating>
        {loading ? (
          <h3>Loading......</h3>
        ) : (
          <InfiniteScroll
            dataLength={data.length}
            next={() => {
              getData(2, nextUrl);
            }}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
          >
            {data.map((item, index) => (
              <Link
                to={`/rating/${params.id}/${get(item, "user.id")}`}
                key={index}
                style={{
                  textDecoration: "none",
                }}
              >
                <PlayersRatingMain>
                  <div className="">
                    <div className="playersRatingSubFlex">
                      <div className="userImg">
                        <img
                          src={
                            _.get(item, "user.avatar")
                              ? _.get(item, "user.avatar")
                              : DefaultImg
                          }
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = DefaultImg;
                          }}
                          alt=""
                        />
                        {item.position === 1 ? (
                          <p className="posName">G</p>
                        ) : item.position === 2 ? (
                          <p className="posName">D</p>
                        ) : item.position === 4 ? (
                          <p className="posName">F</p>
                        ) : item.position === 3 ? (
                          <p className="posName">M</p>
                        ) : null}
                      </div>
                      <div className="nameDiv">
                        <p className="text1">
                          {_.get(item, "user.full_name") !== null
                            ? _.get(item, "user.full_name")
                            : "Анонимный игрок"}
                        </p>
                        <div className="text22Flex">
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
                                (item.user.age > 101 && item.user.age <= 104) ||
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
                                (item.user.age > 94 && item.user.age <= 100) ||
                                (item.user.age > 104 && item.user.age <= 110) ||
                                (item.user.age > 114 && item.user.age <= 120)
                              ? `${item.user.age} лет`
                              : item.user.age === 0
                              ? ""
                              : ""}
                          </p>
                          {item.user.age === 0 ||
                          _.get(item, "user.city") === "" ? (
                            ""
                          ) : (
                            <span className="dot" />
                          )}
                          <p className="text22">{_.get(item, "user.city")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="countFlex">
                      <div className="">
                        <img src={ArrowRight2} alt="" />
                      </div>
                    </div>
                  </div>
                </PlayersRatingMain>
              </Link>
            ))}
          </InfiniteScroll>
        )}
      </AppMAIN>
    </>
  );
};

export default GamePlayerReting;
