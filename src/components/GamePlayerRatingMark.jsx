import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppMAIN,
  AppHeader,
  AppHeaderFlex,
  AppFooter,
} from "../styles/ContainerFluid.styled";
import { RatingTextArea } from "../styles/GamePlayerRatingMark.style";
import ArrowRight from "../assets/svg/Arrow - Right.svg";
import commentIcon from "../assets/Img/Profile.png";
import { GetAuthInstance } from "../helpers/httpClient";
import { get } from "lodash";
// import { setToken } from "../helpers/tokenStorage";
const GamePlayerRatingMark = () => {
  const [updatedLists, setUpdatedLists] = useState([]);

  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("game", "3");
    formData.append("game-user", "20");
    formData.append("speed", "5");
    formData.append("dribbling", "5");
    formData.append("pass", "5");
    formData.append("blow-procision", "5");
    formData.append("blow-force", "5");
    formData.append("headbutt", "5");
    formData.append("selection", "5");
    formData.append("content", content);
    GetAuthInstance()
      .post("api/v1/game/review/", formData)
      .then((res) => {
        const status = get(res, "data.status");
        if (status === 1) {
          setUpdatedLists([...updatedLists, res.formData]);
        }
      })
      .catch((err) => {});
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <AppHeader>
        <AppHeaderFlex>
          <div className="">
            <Link to={"/"} className="">
              <img src={ArrowRight} alt="" />
            </Link>
          </div>
          <div className="">
            <span>Карта игроков</span>
          </div>
          <div className=""></div>
        </AppHeaderFlex>
      </AppHeader>
      <AppMAIN>
        <RatingTextArea>
          <textarea
            placeholder={"placeholderForm.feedbackPlayer"}
            className="gamerTextArea"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
          <img src={commentIcon} alt="" className="commentIconImg" />
        </RatingTextArea>
      </AppMAIN>
      <AppFooter>
        <button className="appBtnGreen" type="submit">
          Сохранить
        </button>
      </AppFooter>
    </form>
  );
};

export default GamePlayerRatingMark;
