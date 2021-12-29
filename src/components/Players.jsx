import { Link, useParams } from "react-router-dom";
import {
  AppFooter2,
  AppHeader,
  AppHeaderFlex,
  AppHeaderFlex2PRating,
  AppMAIN,
} from "../styles/ContainerFluid.styled";
import { LogRegFooterLinkFlex2 } from "../styles/LogIn.styled";
import Filter from "../assets/svg/Filter.svg";
import Navigation from "../components/sections/Navigation";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ListRatingPlayer from "./sections/ratingplayer/ListRatingPlayer";
import { GetAuthInstance } from "../helpers/httpClient";
import styled from "styled-components";
import { get } from "lodash";
import { StylesHidden } from "../styles/Global.styled";
import PlayerMap from "./PlayerMap";
import { useEffect } from "react";

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

const Players = () => {
  const [worldPlayerLists, setWorldPlayerLists] = useState([]);
  const [nextUrlWPlayers, setNextUrlWPlayers] = useState("");
  const [preLoading, setPreLoading] = useState(false);
  const params = useParams();

  const [countTab, setCountTab] = useState(1);

  const clickCountTab = (i) => {
    setCountTab(i);
  };

  useEffect(() => {
    if (countTab === 2) {
      getWorldPlayers();
    }
  }, [countTab]);

  const getWorldPlayers = (
    page = 1,
    next_url = `/api/v1/user-filter-list-mir/?page=${page}&per_page=10`
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
  return (
    <>
      <AppHeader>
        <AppHeaderFlex>
          <div />
          <div className="">
            <span>Карта игроков</span>
          </div>
          <div className="">
            <Link to="/" className="">
              <img src={Filter} alt="" />
            </Link>
          </div>
        </AppHeaderFlex>
        <AppHeaderFlex2PRating>
          <div
            className={countTab === 1 ? "countTabActive" : "countTabActiveNot"}
            onClick={() => {
              clickCountTab(1);
            }}
          >
            На карте
          </div>

          <div
            className={countTab === 2 ? "countTabActive" : "countTabActiveNot"}
            onClick={() => {
              clickCountTab(2);
            }}
          >
            Списком
          </div>
        </AppHeaderFlex2PRating>
      </AppHeader>
      <AppMAIN
        style={{
          marginTop: "100px",
          padding: "0 15px",
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
              <>
                <PlayerMap />
              </>
            ) : countTab === 2 ? (
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
                            user_id={wpList.id}
                            id={index + 1}
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
  );
};

export default Players;
