import { get } from "lodash";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Filter from "../assets/svg/Filter.svg";
import { GetAuthInstance } from "../helpers/httpClient";
import {
  AppFooter,
  AppFooter2,
  AppHeader,
  AppHeaderFlex,
  AppHeaderFlex2PRating,
  AppMAIN,
} from "../styles/ContainerFluid.styled";
import { StylesHidden } from "../styles/Global.styled";
import Navigation from "./sections/Navigation";
import ListRatingPlayer from "./sections/ratingplayer/ListRatingPlayer";
import FilterOneRPlayer from "./sections/ratingplayer/FilterOneRPlayer";
import FilterTwoRPlayer from "./sections/ratingplayer/FilterTwoRPlayer";
import { useParams } from "react-router";

const SRatingPlayerContainer = styled.div`
  padding: 15px 0;
  .sRPayerFlexMain {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-bottom: 15px;
  }
  .sRPayerFlexSub1Flex {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    .Sub1Round {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #484343;
      border-radius: 12px;
      overflow: hidden;
    }
    .Sub1Round2 {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      margin: 0 12px;
      background-color: #484343;
      overflow: hidden;
    }
    .Sub1Round2Right1 {
      width: 120px;
      height: 20px;
      background-color: #484343;
      border-radius: 12px;
      overflow: hidden;
      margin-right: 10px;
      margin-bottom: 8px;
      transform: translate(0, 3px);
    }
    .Sub1Round2Right2 {
      display: inline-block;
      width: 54px;
      height: 17px;
      background-color: #484343;
      border-radius: 12px;
      overflow: hidden;
      margin-right: 10px;
      transform: translate(0, 3px);
    }
  }
  .sRPayerFlexSub2Flex {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    .Sub2 {
      width: 50px;
      height: 20px;
      background-color: #484343;
      border-radius: 12px;
      overflow: hidden;
      &:nth-child(1) {
        margin-bottom: 8px;
      }
    }
    .Sub22Main {
      margin-left: 15px;
    }
  }
`;

const RatingPlayers = () => {
  const [worldPlayerLists, setWorldPlayerLists] = useState([]);
  const [regPlayerLists, setRegPlayerLists] = useState([]);
  const [nextUrlWPlayers, setNextUrlWPlayers] = useState("");
  const [nextUrlRegPlayers, setNextUrlRegPlayers] = useState("");
  const [preLoading, setPreLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [typingTimeOut, setTypingTimeOut] = useState(0);
  const [filter, setFilter] = useState({});
  const [countTab, setCountTab] = useState(1);
  const params = useParams();

  useEffect(() => {
    getWorldPlayers();
    getRegionPlayers();
    window.scrollTo(0, 0);
  }, [params.id]);
  const getWorldPlayers = (
    page = 1,
    next_url = `/api/v1/user-filter-list-mir/?page=${page}&per_page=10` +
      params.id,
    filters = {}
  ) => {
    if (page === 1) {
      setPreLoading(true);
    }

    let c = "";
    let b = "";
    let p = "";
    let d = "";
    if (get(filters, "cityy", []).length) {
      c = "";
      get(filters, "cityy", []).forEach((item) => {
        c += "&city[]=" + item;
      });
    }
    if (filters.ball) {
      b = "&ball=" + filters.ball;
    }
    if (filters.pos) {
      p = "&position=" + filters.pos;
    }
    if (filters.divisionn) {
      d = "&division=" + filters.divisionn;
    }
    setFilter(filters);
    GetAuthInstance()
      .get(next_url + b + p + d + c)
      .then((res) => {
        if (res.status === 200) {
          const result =
            page === 1
              ? res.data.results
              : [...worldPlayerLists, ...res.data.results];
          setWorldPlayerLists(result);
          setNextUrlWPlayers(res.data.next);
        }
      })
      .catch((err) => {
        setWorldPlayerLists([]);
      })
      .finally(() => setPreLoading(false));
  };

  const getRegionPlayers = (
    page = 1,
    next_url = `/api/v1/user-filter-list/?page=${page}&per_page=10`
  ) => {
    if (page === 1) {
      setPreLoading(true);
    }
    GetAuthInstance()
      .get(next_url)
      .then((res) => {
        if (res.status === 200) {
          const result =
            page === 1
              ? res.data.results
              : [...regPlayerLists, ...res.data.results];
          setRegPlayerLists(result);
          setNextUrlRegPlayers(res.data.next);
        }
      })
      .catch((err) => {
        setRegPlayerLists([]);
      })
      .finally(() => setPreLoading(false));
  };

  const clickCountTab = (i) => {
    setCountTab(i);
    getRegionPlayers();
    getWorldPlayers();
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {!modal ? (
        <>
          <AppHeader style={{ paddingBottom: "0" }}>
            <AppHeaderFlex>
              <div />
              <div className="">
                <span>Рейтинг игроков</span>
              </div>
              <div className="">
                {countTab === 1 ? (
                  <span onClick={() => toggleModal()}>
                    <img src={Filter} alt="" />
                  </span>
                ) : countTab === 2 ? (
                  <span onClick={() => toggleModal()}>
                    <img src={Filter} alt="" />
                  </span>
                ) : null}
              </div>
            </AppHeaderFlex>
            <AppHeaderFlex2PRating>
              <div
                className={
                  countTab === 1 ? "countTabActive" : "countTabActiveNot"
                }
                onClick={() => {
                  clickCountTab(1);
                }}
              >
                Мировой
              </div>

              <div
                className={
                  countTab === 2 ? "countTabActive" : "countTabActiveNot"
                }
                onClick={() => {
                  clickCountTab(2);
                }}
              >
                Региональный
              </div>
            </AppHeaderFlex2PRating>
          </AppHeader>
          <AppMAIN
            style={{
              marginTop: "80px",
              marginLeft: "15px",
              marginRight: "15px",
            }}
          >
            {preLoading ? (
              <SRatingPlayerContainer>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => {
                  return (
                    <div className="sRPayerFlexMain" key={index}>
                      <div className="sRPayerFlexSub1">
                        <div className="sRPayerFlexSub1Flex">
                          <div className="Sub1Round beforeAnimation" />
                          <div className="Sub1Round2 beforeAnimation" />
                          <div className="">
                            <div className="Sub1Round2Right1 beforeAnimation" />
                            <div className="Sub1Round2Right2 beforeAnimation" />
                            <div className="Sub1Round2Right2 beforeAnimation" />
                          </div>
                        </div>
                      </div>
                      <div className="sRPayerFlexSub2">
                        <div className="sRPayerFlexSub2Flex">
                          <div className="Sub2Main">
                            <div className="Sub2 beforeAnimation" />
                            <div className="Sub2 beforeAnimation" />
                          </div>
                          <div className="Sub22Main">
                            <div className="Sub2 beforeAnimation" />
                            <div className="Sub2 beforeAnimation" />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <StylesHidden />
              </SRatingPlayerContainer>
            ) : (
              <div>
                {countTab === 1 ? (
                  <InfiniteScroll
                    dataLength={worldPlayerLists.length}
                    next={() => {
                      getWorldPlayers(2, nextUrlWPlayers);
                    }}
                    hasMore={nextUrlWPlayers ? true : false}
                    loader={
                      <p
                        style={{
                          textAlign: "center",
                          transform: "translate(0,10px)",
                        }}
                      >
                        Loading...
                      </p>
                    }
                  >
                    <>
                      {worldPlayerLists
                        ? worldPlayerLists.map((wpList, index) => {
                            let cityN = get(wpList, "city.name", "");
                            return (
                              <ListRatingPlayer
                                position={wpList.position}
                                full_name={wpList.full_name}
                                id={index + 1}
                                user_id={wpList.id}
                                key={index}
                                age={wpList.age}
                                avatar={wpList.avatar}
                                ball={wpList.ball}
                                city={cityN.split(" ")[0]}
                                victory={wpList.victory}
                              />
                            );
                          })
                        : null}
                    </>
                  </InfiniteScroll>
                ) : countTab === 2 ? (
                  <InfiniteScroll
                    dataLength={regPlayerLists.length}
                    next={() => {
                      getRegionPlayers(2, nextUrlRegPlayers);
                    }}
                    hasMore={nextUrlRegPlayers ? true : false}
                    loader={
                      <p
                        style={{
                          textAlign: "center",
                          transform: "translate(0,10px)",
                        }}
                      >
                        Loading...
                      </p>
                    }
                  >
                    <>
                      {regPlayerLists
                        ? regPlayerLists.map((regList, index) => {
                            let cityN = get(regList, "city.name", "");
                            return (
                              <ListRatingPlayer
                                position={regList.position}
                                full_name={regList.full_name}
                                user_id={regList.id}
                                id={index + 1}
                                key={index}
                                age={regList.age}
                                avatar={regList.avatar}
                                ball={regList.ball}
                                city={cityN.split(" ")[0]}
                                victory={regList.victory}
                              />
                            );
                          })
                        : null}
                    </>
                  </InfiniteScroll>
                ) : (
                  ""
                )}
              </div>
            )}
          </AppMAIN>
          <AppFooter2>
            <Navigation />
          </AppFooter2>
        </>
      ) : (
        <>
          {modal ? (
            <>
              <AppHeader>
                <AppHeaderFlex>
                  <span />
                  <div className="">
                    <span>Filter</span>
                  </div>
                  <div className="" />
                </AppHeaderFlex>
              </AppHeader>
              {countTab === 1 ? (
                <FilterOneRPlayer
                  getWorldPlayers={getWorldPlayers}
                  toggleModal={toggleModal}
                  setTypingTimeOut={setTypingTimeOut}
                  typingTimeOut={typingTimeOut}
                  filter={filter}
                />
              ) : countTab === 2 ? (
                <FilterTwoRPlayer />
              ) : null}
            </>
          ) : null}
        </>
      )}
    </>
  );
};

export default RatingPlayers;
