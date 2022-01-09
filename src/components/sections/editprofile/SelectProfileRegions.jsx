import InfiniteScroll from "react-infinite-scroll-component";
import { InputFormFlex } from "../../../styles/Global.styled";
import { GetAuthInstance } from "../../../helpers/httpClient";
import {
  RadioInputFlex,
  RadioInputFlexTop,
} from "../../../styles/Modal.styled";
import SearchLine from "../../../assets/svg/SearchLine.svg";
import { useRef } from "react";
import { useEffect } from "react";
import { map } from "lodash";

const SelectProfileRegions = (props) => {
  const {
    city,
    setSearchRegions,
    setTypingTimeOut,
    regions,
    setRegions,
    setNextUrlRegions,
    typingTimeOut,
    searchRegions,
    nextUrlRegions,
    setUserProfile,
    userProfile,
    toggleModal,
    region,
  } = props;

  const ref = useRef(null);

  const getRegions = (
    page = 1,
    next_url = `/api/v1/region?page=${page}&per_page=20&city=${city?.id}`,
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
              : [...regions, ...response.data.results];
          setRegions(result);
          setNextUrlRegions(response.data.next);
        }
      })
      .catch((err) => {
        setRegions([]);
      });
  };

  const handleSearchRegions = (e) => {
    setSearchRegions(e.target.value);
    let page = 1;
    let next_url = `api/v1/region?page=${page}&per_page=20&city=${city?.id}`;
    setTypingTimeOut(
      setTimeout(() => {
        getRegions(page, next_url, e.target.value);
      }, 1000)
    );

    if (typingTimeOut) {
      clearTimeout(typingTimeOut);
    }
  };

  useEffect(() => {
    getRegions();
  }, [city]);

  return (
    <>
      <InputFormFlex>
        <span className="span1">
          <span>
            <img src={SearchLine} alt="" />
          </span>
        </span>
        <input
          type="text"
          ref={ref}
          onChange={handleSearchRegions}
          value={searchRegions}
          placeholder="Введите название регионы"
        />
        <span className="span2"></span>
      </InputFormFlex>
      <InfiniteScroll
        dataLength={regions.length}
        next={() => {
          getRegions(2, nextUrlRegions);
        }}
        hasMore={nextUrlRegions ? true : false}
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
          {regions.length > 0
            ? map(regions, (r, index) => {
                const { id, name } = r;
                return (
                  <RadioInputFlex
                    key={index}
                    onClick={() => {
                      setUserProfile({
                        ...userProfile,
                        region: r,
                      });
                      toggleModal();
                    }}
                  >
                    <div className="" htmlFor={id}>
                      <div>{name}</div>
                    </div>

                    {id === region?.id ? (
                      <div className="divRadioInput2" />
                    ) : (
                      <div className="divRadioInput" />
                    )}
                  </RadioInputFlex>
                );
              })
            : null}
        </RadioInputFlexTop>
      </InfiniteScroll>
    </>
  );
};

export default SelectProfileRegions;
