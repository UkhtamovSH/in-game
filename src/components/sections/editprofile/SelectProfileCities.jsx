import InfiniteScroll from "react-infinite-scroll-component";
import { InputFormFlex } from "../../../styles/Global.styled";
import {
  RadioInputFlex,
  RadioInputFlexTop,
} from "../../../styles/Modal.styled";
import SearchLine from "../../../assets/svg/SearchLine.svg";
import { map } from "lodash";
import { useTranslation } from "react-i18next";

const SelectProfileCities = (props) => {
  const {
    cities,
    nextUrlCities,
    searchCities,
    setUserProfile,
    userProfile,
    toggleModal,
    city,
    handleSearchCities,
    getCities,
  } = props;

  const { t } = useTranslation();

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
            Loading...
          </p>
        }
      >
        <RadioInputFlexTop>
          {cities.length > 0
            ? map(cities, (c, index) => {
                const { id, name } = c;
                return (
                  <RadioInputFlex
                    key={index}
                    onClick={() => {
                      setUserProfile({
                        ...userProfile,
                        city: c,
                      });
                      toggleModal();
                    }}
                  >
                    <div className="" htmlFor={id}>
                      <div>{name}</div>
                    </div>

                    {id === city?.id ? (
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

export default SelectProfileCities;
