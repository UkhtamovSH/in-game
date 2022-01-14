import {
  AppHeader,
  AppHeaderFlex,
  AppMAIN,
} from "../../../styles/ContainerFluid.styled";
import ArrowRight from "../../../assets/svg/Arrow - Right.svg";
import { map } from "lodash";
import { PlayersRatingMain } from "../../../styles/PlayersRatingStyle";

const TeamOnePlayers = ({ toggleModal, players, findBestPlayerClub1 }) => {
  return (
    <>
      <AppHeader style={{ padding: "12px 0 0 0" }}>
        <AppHeaderFlex>
          <div
            onClick={toggleModal}
            style={{ transform: "translate(17px,0)", cursor: "pointer" }}
          >
            <img src={ArrowRight} alt="" />
          </div>
          <div className="">
            <span>Лучший игрок</span>
          </div>
          <div className="" />
        </AppHeaderFlex>
      </AppHeader>
      <AppMAIN
        style={{
          marginBottom: "0px",
          paddingBottom: "0px",
        }}
      >
        {players.length > 0
          ? map(players, (player, index) => {
              const { img, position, name, ball, user } = player;
              return (
                <PlayersRatingMain
                  key={index}
                  onClick={() => findBestPlayerClub1(user)}
                >
                  <div className="">
                    <div className="playersRatingSubFlex">
                      <div className="userImg">
                        <img src={img} alt="" />
                        {position === 1 ? (
                          <p className="posName">G</p>
                        ) : position === 2 ? (
                          <p className="posName">D</p>
                        ) : position === 4 ? (
                          <p className="posName">F</p>
                        ) : position === 3 ? (
                          <p className="posName">M</p>
                        ) : null}
                      </div>
                      <div className="nameDiv">
                        <p className="text1">
                          {name !== null
                            ? name.length > 21
                              ? name.substr(0, 20) + "..."
                              : name
                            : "Анонимный игрок"}
                        </p>
                        <div className="text22Flex">
                          <p className="text22">Ball: {ball}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </PlayersRatingMain>
              );
            })
          : null}
      </AppMAIN>
    </>
  );
};

export default TeamOnePlayers;
