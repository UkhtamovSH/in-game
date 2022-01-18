import InfiniteScroll from "react-infinite-scroll-component";
import { InputFormFlex } from "../../../styles/Global.styled";
import {
  RadioInputFlex,
  RadioInputFlexTop,
} from "../../../styles/Modal.styled";
import SearchLine from "../../../assets/svg/SearchLine.svg";
import { map } from "lodash";
import { useTranslation } from "react-i18next";

const SelectProfileRegions = (props) => {
  const {
    regions,
    searchRegions,
    nextUrlRegions,
    setUserProfile,
    userProfile,
    toggleModal,
    region,
    handleSearchRegions,
    getRegions,
  } = props;

  const { t } = useTranslation;

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
          onChange={handleSearchRegions}
          value={searchRegions}
          placeholder={t("placeholderForm.enterRegionName")}
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
            {t("searchText.search")}
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
