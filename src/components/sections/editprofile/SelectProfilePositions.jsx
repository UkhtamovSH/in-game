import { GetAuthInstance } from "../../../helpers/httpClient";
import {
  RadioInputFlex,
  RadioInputFlexTop,
} from "../../../styles/Modal.styled";
import { useEffect } from "react";
import { map } from "lodash";

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
        {playerPosition.length > 0
          ? map(playerPosition, (playerPos, index) => {
              const { id, name } = playerPos;
              return (
                <RadioInputFlex
                  key={index}
                  onClick={() => {
                    setUserProfile({
                      ...userProfile,
                      position: id,
                    });
                    toggleModal();
                  }}
                >
                  <div className="" htmlFor={id}>
                    <div>{name}</div>
                  </div>

                  {id === position ? (
                    <div className="divRadioInput2" />
                  ) : (
                    <div className="divRadioInput" />
                  )}
                </RadioInputFlex>
              );
            })
          : null}
      </RadioInputFlexTop>
    </>
  );
};

export default SelectProfilePositions;
