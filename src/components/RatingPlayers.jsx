import { first, get } from "lodash";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import Filter from "../assets/svg/Filter.svg";
import { GetAuthInstance } from "../helpers/httpClient";
import {
  AppFooter2,
  AppHeader,
  AppHeaderFlex,
  AppMAIN,
} from "../styles/ContainerFluid.styled";
import Navigation from "./sections/Navigation";
import ListRatingPlayer from "./sections/ratingplayer/ListRatingPlayer";

const RatingPlayers = () => {
  const [worldPlayerLists, setWorldPlayerLists] = useState([]);
  const [regPlayerLists, setRegPlayerLists] = useState([]);
  const [nextUrlWPlayers, setNextUrlWPlayers] = useState("");
  const [nextUrlRegPlayers, setNextUrlRegPlayers] = useState("");

  const [countTab, setCountTab] = useState(1);

  const getWorldPlayers = (
    page = 1,
    next_url = `/api/v1/user-filter-list-mir/?page=${page}&per_page=10`
  ) => {
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
      });
  };

  const getRegionPlayers = (
    page = 1,
    next_url = `/api/v1/user-filter-list/?page=${page}&per_page=10`
  ) => {
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
      });
  };

  useEffect(() => {
    getWorldPlayers();
    getRegionPlayers();
  }, []);

  const clickCountTab = (i) => {
    setCountTab(i);
    getRegionPlayers();
    getWorldPlayers();
  };

  return (
    <>
      <AppHeader>
        <AppHeaderFlex>
          <div />
          <div className="">
            <span>Рейтинг игроков</span>
          </div>
          <div className="">
            <Link to="/" className="">
              <img src={Filter} alt="" />
            </Link>
          </div>
        </AppHeaderFlex>
      </AppHeader>
      <AppMAIN style={{ marginLeft: "15px", marginRight: "15px" }}>
        <div
          onClick={() => {
            clickCountTab(1);
          }}
        >
          Мировой
        </div>

        <div
          onClick={() => {
            clickCountTab(2);
          }}
        >
          Региональный
        </div>

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
      </AppMAIN>
      <AppFooter2>
        <Navigation />
      </AppFooter2>
    </>
  );
};

export default RatingPlayers;
