import { useEffect, useState } from "react";
import { GetAuthInstance } from "../../../helpers/httpClient";
import { AppFooter, AppMAIN } from "../../../styles/ContainerFluid.styled";
import { InputFormFlex } from "../../../styles/Global.styled";
import {
  RadioInputFlex,
  RadioInputFlexTop,
} from "../../../styles/Modal.styled";
import SearchLine from "../../../assets/svg/SearchLine.svg";
import InfiniteScroll from "react-infinite-scroll-component";
import _ from "lodash";
import { useTranslation } from "react-i18next";

const FilterCity = (props) => {
  const {
    getWorldPlayers,
    typingTimeOut,
    setTypingTimeOut,
    filter,
    toggleModalFilter,
    cities,
    setCities,
    nextUrlCities,
    setNextUrlCities,
    searchCities,
    setSearchCities,
    countTab,
    getRegionPlayers,
    // handleRemoveItem,
  } = props;

  const [selectedItems, setSelectedItems] = useState([]);
  const [setActive] = useState();

  const handleClick = (id) => {
    if (selectedItems.includes(id)) {
      let s = [];
      selectedItems.forEach((item) => {
        if (item !== id) s.push(item);
      });
      setSelectedItems(s);
    } else {
      setActive(id);
      setSelectedItems([...selectedItems, id]);
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

  const handleFilterCity = (id) => {
    let page = 1;
    let next_url = `/api/v1/user-filter-list-mir/?page=${page}&per_page=10`;
    getWorldPlayers(page, next_url, {
      ...filter,
      cityy: [..._.get(filter, "cityy", selectedItems), id],
    });
  };

  const handleFilterCity2 = (id) => {
    let page = 1;
    let next_url = `/api/v1/user-filter-list/?page=${page}&per_page=10`;
    getRegionPlayers(page, next_url, {
      ...filter,
      cityy: [..._.get(filter, "cityy", selectedItems), id],
    });
  };

  useEffect(() => {
    getCities();
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <AppMAIN>
        <InputFormFlex>
          <span className="span1">
            <span>
              <img src={SearchLine} alt="" />
            </span>
          </span>
          <input
            type="text"
            onChange={handleSearchCities}
            value={searchCities}
            placeholder={t("placeholderForm.enterCityName")}
          />
          <span className="span2"></span>
        </InputFormFlex>
        <InfiniteScroll
          dataLength={cities.length}
          next={() => {
            getCities(2, nextUrlCities);
          }}
          hasMore={nextUrlCities ? true : false}
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
          <RadioInputFlexTop>
            {cities
              ? cities.map((c, index) => {
                  const { id, name } = c;
                  return (
                    <RadioInputFlex
                      key={index}
                      onClick={() => {
                        // handleRemoveItem(id);
                        handleClick(id);
                      }}
                    >
                      <div htmlFor={id}>
                        <span>{name}</span>
                      </div>
                      {selectedItems.includes(id) ? (
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
      </AppMAIN>
      <AppFooter>
        <button
          onClick={() => {
            countTab === 1
              ? handleFilterCity()
              : countTab === 2
              ? handleFilterCity2()
              : handleFilterCity();
            toggleModalFilter();
          }}
          className="appBtnGreen"
        >
          {t("showResultBtn.showResult")}
        </button>
      </AppFooter>
    </>
  );
};

export default FilterCity;
