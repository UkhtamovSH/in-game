import InfiniteScroll from "react-infinite-scroll-component";
import { InputFormFlex } from "../../../styles/Global.styled";
import { GetAuthInstance } from "../../../helpers/httpClient";
import {
  RadioInputFlex,
  RadioInputFlexTop,
} from "../../../styles/Modal.styled";
import SearchLine from "../../../assets/svg/SearchLine.svg";
import DefaultClub from "../../../assets/Img/defaultClub.png";
import { useRef } from "react";
import { useEffect } from "react";

const SelectProfileClubs = (props) => {
  const {
    clubs,
    setClubs,
    setNextUrlClubs,
    nextUrlClubs,
    setSearchClubs,
    searchClubs,
    setTypingTimeOut,
    typingTimeOut,
    setUserProfile,
    userProfile,
    toggleModal,
    football_club,
  } = props;

  const ref = useRef(null);

  const getClubs = (
    page = 1,
    next_url = `/api/v1/football-club/?page=${page}&per_page=20`,
    search = ""
  ) => {
    let s = "";
    if (search) {
      s = "&search=" + search;
    }
    GetAuthInstance()
      .get(next_url + s)
      .then((response) => {
        if (response.status === 200) {
          const result =
            page === 1
              ? response.data.results
              : [...clubs, ...response.data.results];
          setClubs(result);
          setNextUrlClubs(response.data.next);
        }
      })
      .catch((error) => {
        setClubs([]);
      });
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

  useEffect(() => {
    getClubs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <InputFormFlex>
        <span className="span1">
          <span>
            <img src={SearchLine} alt="" />
          </span>
        </span>
        <input
          ref={ref}
          type="text"
          onChange={handleSearch}
          value={searchClubs}
          placeholder="Введите название команды"
        />
        <span className="span2"></span>
      </InputFormFlex>

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
          {clubs
            ? clubs.map((club, index) => {
                const { id, name, image } = club;
                return (
                  <RadioInputFlex key={index}>
                    <label className="gg" htmlFor={id}>
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
                      <span
                        style={{
                          marginLeft: "8px",
                        }}
                      >
                        {name}
                      </span>
                    </label>
                    <input
                      type="radio"
                      id={id}
                      name="football_club"
                      onChange={() => {
                        setUserProfile({
                          ...userProfile,
                          football_club: club,
                        });
                        toggleModal();
                      }}
                      checked={id === football_club?.id ? "checked" : ""}
                    />
                  </RadioInputFlex>
                );
              })
            : null}
        </RadioInputFlexTop>
      </InfiniteScroll>
    </>
  );
};

export default SelectProfileClubs;
