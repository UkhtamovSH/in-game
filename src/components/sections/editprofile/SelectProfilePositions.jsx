import { GetAuthInstance } from "../../../helpers/httpClient";
import {
  RadioInputFlex,
  RadioInputFlexTop,
} from "../../../styles/Modal.styled";
import { useEffect } from "react";

const SelectProfilePositions = (props) => {
  const {
    playerPosition,
    setUserProfile,
    userProfile,
    toggleModal,
    position,
    setPlayerPosition,
  } = props;

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

  return (
    <>
      <RadioInputFlexTop>
        {playerPosition
          ? playerPosition.map((playerPos, index) => {
              const { id, name } = playerPos;
              return (
                <RadioInputFlex key={index}>
                  <label className="gg" htmlFor={id}>
                    <span>{name}</span>
                  </label>
                  <input
                    type="radio"
                    id={id}
                    name="position"
                    onChange={() => {
                      setUserProfile({
                        ...userProfile,
                        position: id,
                      });
                      toggleModal();
                    }}
                    checked={id === position ? "checked" : ""}
                  />
                </RadioInputFlex>
              );
            })
          : null}
      </RadioInputFlexTop>
    </>
  );
};

export default SelectProfilePositions;
