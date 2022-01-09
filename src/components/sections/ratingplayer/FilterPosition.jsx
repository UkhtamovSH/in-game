// import { find } from "lodash";
import { useEffect, useState } from "react";
import { GetAuthInstance } from "../../../helpers/httpClient";
import { AppMAIN } from "../../../styles/ContainerFluid.styled";
import {
  RadioInputFlex,
  RadioInputFlexTop,
} from "../../../styles/Modal.styled";
const FilterPosition = (props) => {
  const {
    toggleModalFilter,
    setTypingTimeOut,
    getWorldPlayers,
    typingTimeOut,
    filter,
  } = props;

  const [playerPosition, setPlayerPosition] = useState([]);

  const getPosition = () => {
    GetAuthInstance()
      .get(`/api/v1/position/`)
      .then((response) => {
        if (response.status === 200) {
          setPlayerPosition(response.data.results);
        }
      })
      .catch(() => {});
  };

  useEffect(() => {
    getPosition();
  }, []);

  const handleFilterPosition = (id) => {
    let page = 1;
    let next_url = `/api/v1/user-filter-list-mir/?page=${page}&per_page=10`;
    setTypingTimeOut(
      setTimeout(() => {
        getWorldPlayers(page, next_url, { ...filter, pos: id });
      }, 500)
    );

    if (typingTimeOut) {
      clearTimeout(typingTimeOut);
    }
  };
  return (
    <>
      <AppMAIN>
        <RadioInputFlexTop>
          {playerPosition
            ? playerPosition.map((playerPos, index) => {
                const { id, name } = playerPos;
                return (
                  <RadioInputFlex
                    key={index}
                    onClick={() => {
                      handleFilterPosition(id);
                      toggleModalFilter();
                    }}
                  >
                    <div className="" htmlFor={id}>
                      <span>{name}</span>
                    </div>
                    {id === filter.pos ? (
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

export default FilterPosition;
