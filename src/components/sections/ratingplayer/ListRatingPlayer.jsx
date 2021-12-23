import { PlayersRatingMain } from "../../../styles/PlayersRatingStyle";
import DefaultImg from "../../../assets/Img/default.png";
import { Link } from "react-router-dom";

const ListRatingPlayer = (props) => {
  const { id, user_id, age, avatar, ball, city, victory, position, full_name } =
    props;
  return (
    <>
      <PlayersRatingMain>
        <div className="">
          <div className="playersRatingSubFlex">
            <p
              className={
                id === 1
                  ? "listID1"
                  : id === 2
                  ? "listID2"
                  : id === 3
                  ? "listID3"
                  : "listID4"
              }
            >
              {id}
            </p>
            <div className="userImg">
              <img src={avatar} alt="" />
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
              <Link
                to={"/player-page/" + user_id}
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                <p className="text1">{full_name}</p>
                <div className="text22Flex">
                  <p className="text22">
                    {age === 1 ||
                    age === 21 ||
                    age === 31 ||
                    age === 41 ||
                    age === 51 ||
                    age === 61 ||
                    age === 71 ||
                    age === 81 ||
                    age === 91 ||
                    age === 101 ||
                    age === 111
                      ? `${age} год`
                      : (age > 1 && age <= 4) ||
                        (age > 21 && age <= 24) ||
                        (age > 31 && age <= 34) ||
                        (age > 41 && age <= 44) ||
                        (age > 51 && age <= 54) ||
                        (age > 61 && age <= 64) ||
                        (age > 71 && age <= 74) ||
                        (age > 81 && age <= 84) ||
                        (age > 91 && age <= 94) ||
                        (age > 101 && age <= 104) ||
                        (age > 111 && age <= 114)
                      ? `${age} года`
                      : (age > 4 && age <= 20) ||
                        (age > 24 && age <= 30) ||
                        (age > 34 && age <= 40) ||
                        (age > 44 && age <= 50) ||
                        (age > 54 && age <= 60) ||
                        (age > 64 && age <= 70) ||
                        (age > 74 && age <= 80) ||
                        (age > 84 && age <= 90) ||
                        (age > 94 && age <= 100) ||
                        (age > 104 && age <= 110) ||
                        (age > 114 && age <= 120)
                      ? `${age} лет`
                      : age === 0
                      ? ""
                      : ""}
                  </p>
                  {age === 0 ? "" : <span className="dot" />}
                  <p className="text22">{city}</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <div className="countFlex">
            <div className="">
              <p className="text1">{victory}%</p>
              <p className="text2">Побед</p>
            </div>
            <div className="">
              <p className="text1">{ball}</p>
              <p className="text2">Очков</p>
            </div>
          </div>
        </div>
      </PlayersRatingMain>
    </>
  );
};

export default ListRatingPlayer;
