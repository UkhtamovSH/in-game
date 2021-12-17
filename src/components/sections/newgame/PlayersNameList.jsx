import {
  AppFooter,
  AppHeader,
  AppHeaderFlex,
  AppHeaderFlex2PRating,
  AppMAIN,
} from "../../../styles/ContainerFluid.styled";
import ArrowRight from "../../../assets/svg/Arrow - Right.svg";
import { InputFormFlex, StylesHidden } from "../../../styles/Global.styled";
import SearchLine from "../../../assets/svg/SearchLine.svg";
import { GetAuthInstance } from "../../../helpers/httpClient";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import DefaultClub from "../../../assets/Img/defaultClub.png";
import {
  RadioInputFlexTop,
  RadioInputFlex,
} from "../../../styles/Modal.styled";
import styled from "styled-components";
import { get } from "lodash";
import PlayersNameListSub from "./PlayersNameListSub";

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

const PlayersNameList = (props) => {
  const {
    toggleModal,
    typingTimeOut,
    setTypingTimeOut,
    setPreLoading,
    preLoading,
    setTeamOnePlayers,
    teamOnePlayers,
    setTeamTwoPlayers,
    teamTwoPlayers,
    activePlayers,
    setActivePlayers,
    nextUrlPlayers,
    setNextUrlPlayers,
    setPlayers,
    players,
    setSearchPlayers,
    searchPlayers,
    modalCount,
  } = props;

  // let newClubs = [];
  // if (modalCount === 2) {
  //   newClubs = clubs.filter((club) => {
  //     if (club?.id !== teamTwo?.id) {
  //       return club;
  //     }
  //   });
  // } else if (modalCount === 3) {
  //   newClubs = clubs.filter((club) => {
  //     if (club?.id !== teamOne?.id) {
  //       return club;
  //     }
  //   });
  // }
  const getPlayers = (
    page = 1,
    next_url = `/api/v1/user-filter-list-mir/?page=${page}&per_page=10`,
    search = ""
  ) => {
    if (page === 1) {
      setPreLoading(true);
    }
    let s = "";
    if (search) {
      s = "&search=" + search;
    }
    GetAuthInstance()
      .get(next_url + s)
      .then((res) => {
        if (res.status === 200) {
          const result =
            page === 1 ? res.data.results : [...players, ...res.data.results];
          setPlayers(result);
          setNextUrlPlayers(res.data.next);
        }
      })
      .catch(() => {
        setPlayers([]);
      })
      .finally(() => setPreLoading(false));
  };

  const handleSearch = (e) => {
    setSearchPlayers(e.target.value);
    let page = 1;
    let next_url = `/api/v1/user-filter-list-mir/?page=${page}&per_page=10`;
    setTypingTimeOut(
      setTimeout(() => {
        getPlayers(page, next_url, e.target.value);
      }, 1000)
    );

    if (typingTimeOut) {
      clearTimeout(typingTimeOut);
    }
  };

  const addNewPLAYERS = () => {
    setPlayers([...players, { name: searchPlayers }]);
  };

  // const handleSelect = (id) => {
  //   if (modalCount === 2) {
  //     setActive(id);
  //   }
  //   if (modalCount === 3) {
  //     setActive2(id);
  //   }
  // };

  // const HandleGetTeamOne = () => {
  //   let removeFrom = clubs.filter((item) => item.id !== active);
  //   let findFrom = clubs.filter((item) => item.id === active);
  //   setClubs(removeFrom);
  //   setTeamOne(get(findFrom, "0", {}));
  // };

  // const HandleGetTeamTwo = () => {
  //   let removeFrom = clubs.filter((item) => item.id !== active2);
  //   let findFrom = clubs.filter((item) => item.id === active2);
  //   setClubs(removeFrom);
  //   setTeamTwo(get(findFrom, "0", {}));
  // };

  useEffect(() => {
    getPlayers();
  }, []);

  return (
    <>
      <AppHeader style={{ padding: "12px 0 0 0" }}>
        <AppHeaderFlex>
          <div
            onClick={toggleModal}
            style={{ transform: "translate(17px, 0)", cursor: "pointer" }}
          >
            <img src={ArrowRight} alt="" />
          </div>
          <div className="">
            <span>Введите название команды</span>
          </div>
          <div />
        </AppHeaderFlex>
        <AppHeaderFlex2PRating>
          <InputFormFlex
            style={{ marginBottom: "5px!important", height: "20px" }}
          >
            <span className="span1">
              <span>
                <img src={SearchLine} alt="" />
              </span>
            </span>
            <input
              type="text"
              onChange={handleSearch}
              value={searchPlayers}
              placeholder="Введите имя игрока"
            />
            <span className="span2"></span>
          </InputFormFlex>
        </AppHeaderFlex2PRating>
      </AppHeader>
      <form>
        <AppMAIN
          style={{
            marginTop: "110px",
            padding: "0 15px",
            marginBottom: "30px",
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
            <InfiniteScroll
              dataLength={players.length}
              next={() => {
                getPlayers(2, nextUrlPlayers);
              }}
              hasMore={nextUrlPlayers ? true : false}
              loader={
                <p
                  style={{
                    textAlign: "center",
                    transform: "translate(0,16px)",
                  }}
                >
                  Loading...
                </p>
              }
            >
              <>
                {players
                  ? players.map((wpList, index) => {
                      let cityN = get(wpList, "city.name", "");
                      return (
                        <PlayersNameListSub
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
          )}
        </AppMAIN>
      </form>
    </>
  );
};

export default PlayersNameList;
