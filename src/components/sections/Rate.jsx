import { get } from "lodash";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import ArrowRight from "../../assets/svg/Arrow - Right.svg";
import { GetAuthInstance } from "../../helpers/httpClient";
import {
  AppFooter,
  AppHeader,
  AppHeaderFlex,
  AppMAIN,
} from "../../styles/ContainerFluid.styled";
import {
  RatingMain,
  Container,
  Radio,
  RateWrapper,
  Rating,
  RatingTextArea,
} from "../../styles/Rate.style";
// import commentIcon from "../../assets/Img/Profile.png";

const Rate = () => {
  const [rate, setRate] = useState(0);
  const [drib, setDrib] = useState(0);
  const [pass, setPass] = useState(0);
  const [hit, setHit] = useState(0);
  const [force, setForce] = useState(0);
  const [headButt, setHeadbutt] = useState(0);
  const [select, setSelect] = useState(0);
  const [content, setContent] = useState("");
  const [updatedLists, setUpdatedLists] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    // formData.append("game", "3");
    // formData.append("game-user", "20");
    formData.append("speed", rate);
    formData.append("dribbling", drib);
    formData.append("pass", pass);
    formData.append("blow-procision", hit);
    formData.append("blow-force", force);
    formData.append("headbutt", headButt);
    formData.append("selection", select);
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
    <AppHeader>
      <AppHeaderFlex>
        <div className="">
          <Link to="/" className="">
            <img src={ArrowRight} alt="" />
          </Link>
        </div>
        <div className="">
          <span>Рейтинг игроков</span>
        </div>
        <div />
      </AppHeaderFlex>
      <form onSubmit={(e) => handleSubmit(e)}>
        <AppMAIN>
          <div>
            <p>Скорость</p>
            <Container>
              {[...Array(5)].map((item, index) => {
                const givenRating = index + 1;
                return (
                  <label>
                    <Radio
                      type="radio"
                      value={givenRating}
                      onClick={() => {
                        setRate(givenRating);
                        console.log(`${givenRating}`);
                      }}
                    />
                    <Rating>
                      <FaStar
                        color={
                          givenRating < rate || givenRating === rate
                            ? "F6CE42"
                            : "#a7a2a2"
                        }
                      />
                    </Rating>
                  </label>
                );
              })}
            </Container>
          </div>
          <div>
            <p>Дриблинг</p>
            <Container>
              {[...Array(5)].map((item, index) => {
                const givenRating = index + 1;
                return (
                  <label>
                    <Radio
                      type="radio"
                      value={givenRating}
                      onClick={() => {
                        setDrib(givenRating);
                        console.log(`${givenRating}`);
                      }}
                    />
                    <Rating>
                      <FaStar
                        color={
                          givenRating < drib || givenRating === drib
                            ? "F6CE42"
                            : "#a7a2a2"
                        }
                      />
                    </Rating>
                  </label>
                );
              })}
            </Container>
          </div>
          <div>
            <p>Пас</p>
            <Container>
              {[...Array(5)].map((item, index) => {
                const givenRating = index + 1;
                return (
                  <label>
                    <Radio
                      type="radio"
                      value={givenRating}
                      onClick={() => {
                        setPass(givenRating);
                        console.log(`${givenRating}`);
                      }}
                    />
                    <Rating>
                      <FaStar
                        color={
                          givenRating < pass || givenRating === pass
                            ? "F6CE42"
                            : "#a7a2a2"
                        }
                      />
                    </Rating>
                  </label>
                );
              })}
            </Container>
          </div>
          <div>
            <p>Точность удара</p>
            <Container>
              {[...Array(5)].map((item, index) => {
                const givenRating = index + 1;
                return (
                  <label>
                    <Radio
                      type="radio"
                      value={givenRating}
                      onClick={() => {
                        setHit(givenRating);
                        console.log(`${givenRating}`);
                      }}
                    />
                    <Rating>
                      <FaStar
                        color={
                          givenRating < hit || givenRating === hit
                            ? "F6CE42"
                            : "#a7a2a2"
                        }
                      />
                    </Rating>
                  </label>
                );
              })}
            </Container>
          </div>
          <div>
            <p>Сила удара</p>
            <Container>
              {[...Array(5)].map((item, index) => {
                const givenRating = index + 1;
                return (
                  <label>
                    <Radio
                      type="radio"
                      value={givenRating}
                      onClick={() => {
                        setForce(givenRating);
                        console.log(`${givenRating}`);
                      }}
                    />
                    <Rating>
                      <FaStar
                        color={
                          givenRating < force || givenRating === force
                            ? "F6CE42"
                            : "#a7a2a2"
                        }
                      />
                    </Rating>
                  </label>
                );
              })}
            </Container>
          </div>
          <div>
            <p>Удар головой</p>
            <Container>
              {[...Array(5)].map((item, index) => {
                const givenRating = index + 1;
                return (
                  <label>
                    <Radio
                      type="radio"
                      value={givenRating}
                      onClick={() => {
                        setHeadbutt(givenRating);
                        console.log(`${givenRating}`);
                      }}
                    />
                    <Rating>
                      <FaStar
                        color={
                          givenRating < headButt || givenRating === headButt
                            ? "F6CE42"
                            : "#a7a2a2"
                        }
                      />
                    </Rating>
                  </label>
                );
              })}
            </Container>
          </div>
          <div>
            <p>Отбор</p>
            <Container>
              {[...Array(5)].map((item, index) => {
                const givenRating = index + 1;
                return (
                  <label>
                    <Radio
                      type="radio"
                      value={givenRating}
                      onClick={() => {
                        setSelect(givenRating);
                        console.log(`${givenRating}`);
                      }}
                    />
                    <Rating>
                      <FaStar
                        color={
                          givenRating < select || givenRating === select
                            ? "F6CE42"
                            : "#a7a2a2"
                        }
                      />
                    </Rating>
                  </label>
                );
              })}
            </Container>
          </div>
          <RatingTextArea>
            <textarea
              placeholder="Отзыв об игроке"
              className="gamerTextArea"
              onChange={(e) => setContent(e.target.value)}
              value={content}
            />
            {/* <img src={commentIcon} alt="" className="commentIconImg" /> */}
          </RatingTextArea>
        </AppMAIN>
        <AppFooter>
          <button className="appBtnGreen" type="submit">
            Сохранить
          </button>
        </AppFooter>
      </form>
    </AppHeader>
  );
};

export default Rate;
