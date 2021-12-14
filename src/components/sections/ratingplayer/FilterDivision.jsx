import { useEffect, useState } from "react";
import { GetAuthInstance } from "../../../helpers/httpClient";
import { AppMAIN } from "../../../styles/ContainerFluid.styled";
import {
  RadioInputFlex,
  RadioInputFlexTop,
} from "../../../styles/Modal.styled";
const FilterDivision = (props) => {
  const {
    toggleModalFilter,
    filter,
    typingTimeOut,
    setTypingTimeOut,
    getWorldPlayers,
  } = props;

  const [divisions, setDivisions] = useState([]);

  const getDivision = () => {
    GetAuthInstance()
      .get("/api/v1/division/")
      .then((res) => {
        if (res.status === 200) {
          setDivisions(res.data);
        }
      })
      .catch((err) => {});
  };

  const handleFilterDivision = (id) => {
    let page = 1;
    let next_url = `/api/v1/user-filter-list-mir/?page=${page}&per_page=10`;
    setTypingTimeOut(
      setTimeout(() => {
        getWorldPlayers(page, next_url, { ...filter, divisionn: id });
      }, 500)
    );

    if (typingTimeOut) {
      clearTimeout(typingTimeOut);
    }
  };

  useEffect(() => {
    getDivision();
  }, []);

  return (
    <>
      <AppMAIN>
        <RadioInputFlexTop>
          {divisions
            ? divisions.map((division, index) => {
                const { id, name } = division;
                return (
                  <RadioInputFlex
                    key={index}
                    onClick={() => {
                      handleFilterDivision(id);
                      toggleModalFilter();
                    }}
                  >
                    <div className="gg" htmlFor={id}>
                      <span>{name}</span>
                    </div>
                    {id === filter.divisionn ? (
                      <div className="divRadioInput2" />
                    ) : (
                      <div className="divRadioInput" />
                    )}
                  </RadioInputFlex>
                );
              })
            : null}
        </RadioInputFlexTop>
      </AppMAIN>
    </>
  );
};

export default FilterDivision;
