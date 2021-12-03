import { set } from "lodash";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { GetAuthInstance } from "../helpers/httpClient";
import {
  AppMAIN,
  AppHeader,
  AppHeaderFlex,
} from "../styles/ContainerFluid.styled";
import {
  GamePlayerRatingMarkWrapp,
  GamerAppBtn,
  RatingMarks,
  RatingTextArea,
} from "../styles/GamePlayerRatingMark.style";
import ArrowRight from "../assets/svg/Arrow - Right.svg";
import commentIcon from "../assets/Img/Profile.png"
const GamePlayerRatingMark = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [lists, setLists] = useState([])

  const handleSubmit  = (e) => {
    
    e.preventDefault();

    const postData =  {
      text:comment,
    }

      GetAuthInstance()
      .post(`/api/v1/game-user/?game=${params.id}`,postData)
      .then((res) => {
        setData(res);
        setComment("")
        setLists([lists,res.postData])
        console.log(res.data);
      })
      .catch((err) => {});
    };
  return (
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
      <AppMAIN>
        <div className="star-rating">
          <p>Скорость</p>
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <>
                <button
                  type="button"
                  key={index}
                  className={index <= rating ? "on" : "off"}
                  onClick={() => setRating(index)}
                >
                  <span className="star">&#9733;</span>
                </button>
              </>
            );
          })}
        </div>
      </AppMAIN>
      <RatingTextArea>
      <form action="">
      <textarea
          placeholder="Отзыв об игроке"
          className="gamerTextArea"
        ></textarea>
      </form>
        <img src={commentIcon} alt="" className="commentIconImg"/>
      </RatingTextArea>
      <GamerAppBtn>
        <div className="appBtnGreen">Сохранить</div>
      </GamerAppBtn>
    </AppHeader>
  );
};

export default GamePlayerRatingMark;
