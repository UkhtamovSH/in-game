import {
  AppHeader,
  AppHeaderFlex,
  AppHeaderFlex2PRating,
  AppMAIN,
} from "../../../styles/ContainerFluid.styled";
import ArrowRight from "../../../assets/svg/Arrow - Right.svg";
import { InputFormFlex, StylesHidden } from "../../../styles/Global.styled";
import SearchLine from "../../../assets/svg/SearchLine.svg";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";
import { get } from "lodash";
import PlayersNameListSub from "./PlayersNameListSub";
import { useTranslation } from "react-i18next";

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
    // typingTimeOut,
    // setTypingTimeOut,
    // setPreLoading,
    preLoading,
    nextUrlPlayers,
    // setNextUrlPlayers,
    // setPlayers,
    players,
    // setSearchPlayers,
    searchPlayers,
    addUsers,
    activeType,
    activeTarget,
    oneUsers,
    twoUsers,
    getPlayers,
    handleSearch,
  } = props;

  // const addNewPLAYERS = () => {
  //   setPlayers([...players, { name: searchPlayers }]);
  // };

  const { t } = useTranslation();

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
            <span>{t("placeholderForm.enterTeamName")}</span>
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
              placeholder={t("placeholderForm.enterPlayerName")}
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
                  {t("searchText.search")}
                </p>
              }
            >
              <>
                {players
                  ? players.map((wpList, index) => {
                      let cityN = get(wpList, "city.name", "");
                      if (
                        [...oneUsers, ...twoUsers].filter((o) => {
                          return o.user === wpList.id;
                        }).length === 0
                      ) {
                        return (
                          <PlayersNameListSub
                            addUsers={() =>
                              addUsers(
                                activeTarget,
                                activeType,
                                wpList.id,
                                wpList.full_name,
                                wpList.avatar,
                                wpList.ball
                              )
                            }
                            position={wpList.position}
                            full_name={wpList.full_name}
                            id={index + 1}
                            key={index}
                            age={wpList.age}
                            avatar={wpList.avatar}
                            ball={wpList.ball}
                            city={cityN.split(" ")[0]}
                            victory={wpList.victory}
                            toggleModal={toggleModal}
                          />
                        );
                      } else {
                        return "";
                      }
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
