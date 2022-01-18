import {
  AppFooter,
  AppHeader,
  AppHeaderFlex,
  AppMAIN,
} from "../../../styles/ContainerFluid.styled";
import { InputFormFlex } from "../../../styles/Global.styled";
import FilterBall from "./FilterBall";
import { useState } from "react";
import FilterDivision from "./FilterDivision";
import FilterPosition from "./FilterPosition";
import FilterCity from "./FilterCity";
import { useTranslation } from "react-i18next";

const FilterTwoRPlayer = (props) => {
  const {
    getRegionPlayers,
    countTab,
    toggleModal,
    typingTimeOut,
    setTypingTimeOut,
    setFilterBall,
    filterBall,
    filter,
  } = props;

  const [cities, setCities] = useState([]);
  const [citiesAnother] = useState([]);
  const [nextUrlCities, setNextUrlCities] = useState("");
  const [searchCities, setSearchCities] = useState("");

  const [modal, setModal] = useState(false);
  const [modalCount, setModalCount] = useState(null);
  const toggleModalCount = (i) => setModalCount(i);
  const toggleModalFilter = () => setModal(!modal);

  // const handleRemoveItem = (id) => {
  //   let fL = cities.filter((item) => item.id !== id);
  //   let tL = cities.filter((item) => item.id === id);
  //   setCities(fL);

  //   setCitiesAnother([...citiesAnother, ...tL]);
  // };

  // const backCityItem = (id) => {
  //   let fL = citiesAnother.filter((item) => item.id !== id);
  //   let tL = citiesAnother.filter((item) => item.id === id);
  //   setCitiesAnother(fL);

  //   setCities([...cities, ...tL]);
  // };

  const { t } = useTranslation();

  return (
    <>
      {!modal ? (
        <>
          <AppMAIN>
            {/* <InputFormFlex>
              <span
                onClick={() => {
                  toggleModalCount(1);
                  toggleModalFilter();
                }}
                className="spanInput2"
              >
                {citiesAnother.length > 0
                  ? citiesAnother.map((cA, index) => {
                      const { name } = cA;
                      return (
                        <span key={index}>
                          <span style={{ marginRight: "10px" }}>{name}</span>
                        </span>
                      );
                    })
                  : "Город"}
              </span>
            </InputFormFlex> */}
            <InputFormFlex>
              <span
                onClick={() => {
                  toggleModalCount(3);
                  toggleModalFilter();
                }}
                className="spanInput2"
              >
                {filter.divisionn === 1 ? (
                  <>{t("divisionnSection.elementery")}</>
                ) : filter.divisionn === 2 ? (
                  <>{t("divisionnSection.middle")}</>
                ) : filter.divisionn === 3 ? (
                  <>{t("divisionnSection.higher")}</>
                ) : filter.divisionn === 4 ? (
                  <>{t("divisionnSection.pro")}</>
                ) : (
                  <>{t("divisionnSection.division")}</>
                )}
              </span>
            </InputFormFlex>
            <FilterBall
              setFilterBall={setFilterBall}
              getRegionPlayers={getRegionPlayers}
              filterBall={filterBall}
              setTypingTimeOut={setTypingTimeOut}
              typingTimeOut={typingTimeOut}
              filter={filter}
              countTab={countTab}
            />
            <InputFormFlex>
              <span
                onClick={() => {
                  toggleModalCount(4);
                  toggleModalFilter();
                }}
                className="spanInput2"
              >
                {filter.pos === 1 ? (
                  <>{t("divisionnPosSection.goalkeeper")}</>
                ) : filter.pos === 2 ? (
                  <>{t("divisionnPosSection.defender")}</>
                ) : filter.pos === 4 ? (
                  <>{t("divisionnPosSection.forward")}</>
                ) : filter.pos === 3 ? (
                  <>{t("divisionnPosSection.midfielder")}</>
                ) : (
                  <>{t("divisionnPosSection.position")}</>
                )}
              </span>
            </InputFormFlex>
          </AppMAIN>
          <AppFooter>
            <button onClick={toggleModal} className="appBtnGreen">
              {t("showResultBtn.showResult")}
            </button>
          </AppFooter>
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
              {modalCount === 1 ? (
                <>
                  {
                    // <FilterCity
                    //   toggleModalFilter={toggleModalFilter}
                    //   setTypingTimeOut={setTypingTimeOut}
                    //   getRegionPlayers={getRegionPlayers}
                    //   typingTimeOut={typingTimeOut}
                    //   filter={filter}
                    //   cities={cities}
                    //   setCities={setCities}
                    //   nextUrlCities={nextUrlCities}
                    //   setNextUrlCities={setNextUrlCities}
                    //   searchCities={searchCities}
                    //   setSearchCities={setSearchCities}
                    //   countTab={countTab}
                    //   // handleRemoveItem={handleRemoveItem}
                    // />
                  }
                </>
              ) : modalCount === 2 ? (
                ""
              ) : modalCount === 3 ? (
                <FilterDivision
                  toggleModalFilter={toggleModalFilter}
                  setTypingTimeOut={setTypingTimeOut}
                  getRegionPlayers={getRegionPlayers}
                  typingTimeOut={typingTimeOut}
                  filter={filter}
                  countTab={countTab}
                />
              ) : modalCount === 4 ? (
                <FilterPosition
                  toggleModalFilter={toggleModalFilter}
                  setTypingTimeOut={setTypingTimeOut}
                  getRegionPlayers={getRegionPlayers}
                  typingTimeOut={typingTimeOut}
                  filter={filter}
                  countTab={countTab}
                />
              ) : null}
            </>
          ) : null}
        </>
      )}
    </>
  );
};

export default FilterTwoRPlayer;
