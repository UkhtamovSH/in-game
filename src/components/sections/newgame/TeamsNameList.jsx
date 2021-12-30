import {
  AppFooter,
  AppHeader,
  AppHeaderFlex,
  AppHeaderFlex2PRating,
  AppMAIN,
} from "../../../styles/ContainerFluid.styled";
import ArrowRight from "../../../assets/svg/Arrow - Right.svg";
import { InputFormFlex } from "../../../styles/Global.styled";
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

const ModalDataContanier = styled.div`
  padding: 0 15px;
  .modalDivAnimation {
    width: 100%;
    height: 60px;
    background-color: #484343;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 8px;
  }
`;

const TeamsNameList = (props) => {
  const {
    toggleModal,
    clubs,
    setClubs,
    nextUrlClubs,
    setNextUrlClubs,
    typingTimeOut,
    setTypingTimeOut,
    searchClubs,
    setSearchClubs,
    setPreLoading,
    preLoading,
    teamOne,
    setTeamOne,
    teamTwo,
    setTeamTwo,
    active,
    setActive,
    active2,
    setActive2,
    modalCount,
  } = props;

  let newClubs = [];
  if (modalCount === 2) {
    // eslint-disable-next-line array-callback-return
    newClubs = clubs.filter((club) => {
      if (club?.id !== teamTwo?.id) {
        return club;
      }
    });
  } else if (modalCount === 3) {
    // eslint-disable-next-line array-callback-return
    newClubs = clubs.filter((club) => {
      if (club?.id !== teamOne?.id) {
        return club;
      }
    });
  }
  const getClubs = (
    page = 1,
    next_url = `/api/v1/football-club/?page=${page}&per_page=20`,
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
            page === 1 ? res.data.results : [...clubs, ...res.data.results];
          setClubs(result);
          setNextUrlClubs(res.data.next);
        }
      })
      .catch(() => {
        setClubs([]);
      })
      .finally(() => setPreLoading(false));
  };

  const handleSearch = (e) => {
    setSearchClubs(e.target.value);
    let page = 1;
    let next_url = `/api/v1/football-club/?page=${page}&per_page=20`;
    setTypingTimeOut(
      setTimeout(() => {
        getClubs(page, next_url, e.target.value);
      }, 1000)
    );

    if (typingTimeOut) {
      clearTimeout(typingTimeOut);
    }
  };

  const addNewCLUB = () => {
    setClubs([...clubs, { name: searchClubs }]);
  };

  const handleSelect = (id) => {
    if (modalCount === 2) {
      setActive(id);
    }
    if (modalCount === 3) {
      setActive2(id);
    }
  };

  const HandleGetTeamOne = () => {
    let removeFrom = clubs.filter((item) => item.id !== active);
    let findFrom = clubs.filter((item) => item.id === active);
    setClubs(removeFrom);
    setTeamOne(get(findFrom, "0", {}));
  };

  const HandleGetTeamTwo = () => {
    let removeFrom = clubs.filter((item) => item.id !== active2);
    let findFrom = clubs.filter((item) => item.id === active2);
    setClubs(removeFrom);
    setTeamTwo(get(findFrom, "0", {}));
  };

  useEffect(() => {
    getClubs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              value={searchClubs}
              placeholder="Введите название команды"
            />
            <span className="span2"></span>
          </InputFormFlex>
        </AppHeaderFlex2PRating>
      </AppHeader>
      <form>
        <AppMAIN style={{ marginTop: "120px" }}>
          {preLoading ? (
            <ModalDataContanier>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((index) => {
                return (
                  <div
                    key={index}
                    className="modalDivAnimation beforeAnimation"
                  ></div>
                );
              })}
            </ModalDataContanier>
          ) : (
            <InfiniteScroll
              dataLength={clubs.length}
              next={() => {
                getClubs(2, nextUrlClubs);
              }}
              hasMore={nextUrlClubs ? true : false}
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
              <RadioInputFlexTop>
                {newClubs.length > 0 ? (
                  newClubs.map((club, index) => {
                    const { id, name, image } = club;
                    return (
                      <RadioInputFlex
                        key={index}
                        onClick={() => {
                          handleSelect(
                            modalCount === 2 ? id : modalCount === 3 ? id : id
                          );
                        }}
                      >
                        <div className="gg" htmlFor={id}>
                          <img
                            src={
                              image
                                ? image
                                : image === null
                                ? DefaultClub
                                : DefaultClub
                            }
                            style={{
                              width: "32px",
                              height: "32px",
                            }}
                            alt=""
                          />
                          <div
                            style={{
                              marginLeft: "8px",
                              transform: "translate(0,-10px)",
                              display: "inline-block",
                            }}
                          >
                            {name}
                          </div>
                        </div>
                        {id === active || id === active2 ? (
                          <div className="divRadioInput2" />
                        ) : (
                          <div className="divRadioInput" />
                        )}
                      </RadioInputFlex>
                    );
                  })
                ) : (
                  <p className="newNameGamer" onClick={addNewCLUB}>
                    Продолжить с новым названием
                  </p>
                )}
              </RadioInputFlexTop>
            </InfiniteScroll>
          )}
        </AppMAIN>
        <AppFooter>
          {modalCount === 2 ? (
            <button
              type="button"
              className="appBtnGreen"
              onClick={() => {
                HandleGetTeamOne();
                toggleModal();
              }}
            >
              Выбрать
            </button>
          ) : modalCount === 3 ? (
            <button
              type="button"
              className="appBtnGreen"
              onClick={() => {
                HandleGetTeamTwo();
                toggleModal();
              }}
            >
              Выбрать
            </button>
          ) : null}
        </AppFooter>
      </form>
    </>
  );
};

export default TeamsNameList;
