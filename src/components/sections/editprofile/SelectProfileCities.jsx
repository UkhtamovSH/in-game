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

const SelectProfileCities = (props) => {
  const {
    setSearchCities,
    setTypingTimeOut,
    typingTimeOut,
    cities,
    setCities,
    setNextUrlCities,
    nextUrlCities,
    searchCities,
    setUserProfile,
    userProfile,
    toggleModal,
    city,
  } = props;

  const ref = useRef(null);

  const handleSearchCities = (e) => {
    setSearchCities(e.target.value);
    let page = 1;
    let next_url = `/api/v1/region/parent/?page=${page}&per_page=20`;
    setTypingTimeOut(
      setTimeout(() => {
        getCities(page, next_url, e.target.value);
      }, 1000)
    );

    if (typingTimeOut) {
      clearTimeout(typingTimeOut);
    }
  };

  const getCities = (
    page = 1,
    next_url = `/api/v1/region/parent/?page=${page}&per_page=20`,
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
              : [...cities, ...response.data.results];
          setCities(result);
          setNextUrlCities(response.data.next);
        }
      })
      .catch((err) => {
        setCities([]);
      });
  };

  useEffect(() => {
    getCities();
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
          type="text"
          ref={ref}
          onChange={handleSearchCities}
          value={searchCities}
          placeholder="Введите название городы"
        />
        <span className="span2"></span>
      </InputFormFlex>
      <InfiniteScroll
        dataLength={cities.length}
        next={() => {
          getCities(2, nextUrlCities);
        }}
        hasMore={nextUrlCities ? true : false}
        loader={<p style={{ textAlign: "center" }}>Loading...</p>}
      >
        <RadioInputFlexTop>
          {cities
            ? cities.map((c, index) => {
                const { id, name } = c;
                return (
                  <RadioInputFlex key={index}>
                    <label className="gg" htmlFor={id}>
                      <span>{name}</span>
                    </label>
                    <input
                      type="radio"
                      id={id}
                      name="city"
                      onChange={() => {
                        setUserProfile({
                          ...userProfile,
                          city: c,
                        });
                        toggleModal();
                      }}
                      checked={id === city?.id ? "checked" : ""}
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

export default SelectProfileCities;
