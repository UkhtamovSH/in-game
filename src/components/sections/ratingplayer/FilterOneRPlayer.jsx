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

const FilterOneRPlayer = (props) => {
  const {
    getWorldPlayers,
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

  return (
    <>
      {!modal ? (
        <>
          <AppMAIN>
            <InputFormFlex>
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
                          {/* <span onClick={() => backCityItem(id)}>x</span> */}
                        </span>
                      );
                    })
                  : "Город"}
              </span>
            </InputFormFlex>
            <InputFormFlex>
              <span
                onClick={() => {
                  toggleModalCount(3);
                  toggleModalFilter();
                }}
                className="spanInput2"
              >
                {filter.divisionn === 1
                  ? "Elementery"
                  : filter.divisionn === 2
                  ? "Middle"
                  : filter.divisionn === 3
                  ? "Higher"
                  : filter.divisionn === 4
                  ? "Pro"
                  : "Дивизион"}
              </span>
            </InputFormFlex>
            <FilterBall
              setFilterBall={setFilterBall}
              getWorldPlayers={getWorldPlayers}
              filterBall={filterBall}
              setTypingTimeOut={setTypingTimeOut}
              typingTimeOut={typingTimeOut}
              filter={filter}
            />
            <InputFormFlex>
              <span
                onClick={() => {
                  toggleModalCount(4);
                  toggleModalFilter();
                }}
                className="spanInput2"
              >
                {filter.pos === 1
                  ? "Goalkeeper"
                  : filter.pos === 2
                  ? "Defender"
                  : filter.pos === 4
                  ? "Forward"
                  : filter.pos === 3
                  ? "Midfielder"
                  : "Позиция"}
              </span>
            </InputFormFlex>
          </AppMAIN>
          <AppFooter>
            <button onClick={toggleModal} className="appBtnGreen">
              Показать результаты
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
                <FilterCity
                  toggleModalFilter={toggleModalFilter}
                  setTypingTimeOut={setTypingTimeOut}
                  getWorldPlayers={getWorldPlayers}
                  typingTimeOut={typingTimeOut}
                  filter={filter}
                  cities={cities}
                  setCities={setCities}
                  nextUrlCities={nextUrlCities}
                  setNextUrlCities={setNextUrlCities}
                  searchCities={searchCities}
                  setSearchCities={setSearchCities}
                  // handleRemoveItem={handleRemoveItem}
                />
              ) : modalCount === 2 ? (
                ""
              ) : modalCount === 3 ? (
                <FilterDivision
                  toggleModalFilter={toggleModalFilter}
                  setTypingTimeOut={setTypingTimeOut}
                  getWorldPlayers={getWorldPlayers}
                  typingTimeOut={typingTimeOut}
                  filter={filter}
                />
              ) : modalCount === 4 ? (
                <FilterPosition
                  toggleModalFilter={toggleModalFilter}
                  setTypingTimeOut={setTypingTimeOut}
                  getWorldPlayers={getWorldPlayers}
                  typingTimeOut={typingTimeOut}
                  filter={filter}
                />
              ) : null}
            </>
          ) : null}
        </>
      )}
    </>
  );
};

export default FilterOneRPlayer;
