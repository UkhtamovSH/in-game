import { get } from "lodash";
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import ArrowRight from "../../assets/svg/Arrow - Right.svg";
import { GetAuthInstance } from "../../helpers/httpClient";
import { useTranslation } from "react-i18next";

import {
  AppFooter,
  AppHeader,
  AppHeaderFlex,
  AppMAIN,
} from "../../styles/ContainerFluid.styled";
import {
  Container,
  Radio,
  Rating,
  RatingTextArea,
  StarDiv,
} from "../../styles/Rate.style";

const Rate = (props) => {
  const params = useParams();

  const [updatedLists, setUpdatedLists] = useState([]);
  const navigate = useNavigate();
  const [rate, setRate] = useState(0);
  const [drib, setDrib] = useState(0);
  const [pass, setPass] = useState(0);
  const [hit, setHit] = useState(0);
  const [force, setForce] = useState(0);
  const [headButt, setHeadbutt] = useState(0);
  const [select, setSelect] = useState(0);
  const [content, setContent] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("game", params.id);
    formData.append("game-user", params.user_id);
    formData.append("speed", rate);
    formData.append("dribbling", drib);
    formData.append("pass", pass);
    formData.append("blow-precision", hit);
    formData.append("blow-force", force);
    formData.append("headbutt", headButt);
    formData.append("selection", select);
    formData.append("content", content);
    GetAuthInstance()
      .post(`api/v1/game/review/`, formData)
      .then((res) => {
        navigate(-1);
        const status = get(res, "data.status");
        if (status === 1) {
          setUpdatedLists([...updatedLists, res.formData]);
        }
      })
      .catch((err) => {});
  };

  const getDataRate = () => {
    GetAuthInstance()
      .get(`/api/v1/game-user/?game=${params.id}`)
      .then((res) => {
        let findIDForRate = {};
        res.data.results.forEach((item) => {
          if (item.user.id == params.user_id) {
            findIDForRate = { ...item.review };
          }
        });
        setRate(findIDForRate.speed);
        setDrib(findIDForRate.dribbling);
        setPass(findIDForRate.pas);
        setHit(findIDForRate.blow_precision);
        setForce(findIDForRate.blow_force);
        setHeadbutt(findIDForRate.headbutt);
        setSelect(findIDForRate.selection);
        setContent(findIDForRate.content);
      });
  };

  useEffect(() => {
    getDataRate();
  }, [params.id]);

  const { t } = useTranslation();

  return (
    <>
      <AppHeader>
        <AppHeaderFlex>
          <div className="">
            <span onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>
              <img src={ArrowRight} alt="" />
            </span>
          </div>
          <div className="">
            <span>{t("rateSection.ratePlayer")}</span>
          </div>
          <div />
        </AppHeaderFlex>
      </AppHeader>
      <form onSubmit={(e) => handleSubmit(e)}>
        <AppMAIN>
          <div style={{ padding: "0 15px" }}>
            <StarDiv style={{ margin: "10px 0" }}>
              <div className="StarDivBorder">
                <p>{t("rateSection.speed")}</p>
                <Container>
                  {[...Array(5)].map((_, index) => {
                    const givenRating = index + 1;
                    return (
                      <label key={index}>
                        <Radio
                          type="radio"
                          value={givenRating}
                          onClick={() => {
                            setRate(givenRating);
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
              <div className="StarDivBorder">
                <p>{t("rateSection.drib")}</p>
                <Container>
                  {[...Array(5)].map((_, index) => {
                    const givenRating = index + 1;
                    return (
                      <label key={index}>
                        <Radio
                          type="radio"
                          value={givenRating}
                          onClick={() => {
                            setDrib(givenRating);
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
              <div className="StarDivBorder">
                <p>{t("rateSection.pass")}</p>
                <Container>
                  {[...Array(5)].map((_, index) => {
                    const givenRating = index + 1;
                    return (
                      <label key={index}>
                        <Radio
                          type="radio"
                          value={givenRating}
                          onClick={() => {
                            setPass(givenRating);
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
              <div className="StarDivBorder">
                <p>{t("rateSection.hit")}</p>
                <Container>
                  {[...Array(5)].map((_, index) => {
                    const givenRating = index + 1;
                    return (
                      <label key={index}>
                        <Radio
                          type="radio"
                          value={givenRating}
                          onClick={() => {
                            setHit(givenRating);
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
              <div className="StarDivBorder">
                <p>{t("rateSection.hitimpact")}</p>
                <Container>
                  {[...Array(5)].map((_, index) => {
                    const givenRating = index + 1;
                    return (
                      <label key={index}>
                        <Radio
                          type="radio"
                          value={givenRating}
                          onClick={() => {
                            setForce(givenRating);
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
              <div className="StarDivBorder">
                <p>{t("rateSection.headbutt")}</p>
                <Container>
                  {[...Array(5)].map((_, index) => {
                    const givenRating = index + 1;
                    return (
                      <label key={index}>
                        <Radio
                          type="radio"
                          value={givenRating}
                          onClick={() => {
                            setHeadbutt(givenRating);
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
              <div className="StarDivBorder">
                <p>{t("rateSection.selection")}</p>
                <Container>
                  {[...Array(5)].map((_, index) => {
                    const givenRating = index + 1;
                    return (
                      <label key={index}>
                        <Radio
                          type="radio"
                          value={givenRating}
                          onClick={() => {
                            setSelect(givenRating);
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
            </StarDiv>
            <RatingTextArea>
              <textarea
                placeholder={t("placeholderForm.feedbackPlayer")}
                className="gamerTextArea"
                onChange={(e) => setContent(e.target.value)}
                value={content}
              />
              {/* <img src={commentIcon} alt="" className="commentIconImg" /> */}
            </RatingTextArea>
          </div>
        </AppMAIN>
        <AppFooter>
          <button className="appBtnGreen" type="submit">
            {t("rateSection.save")}
          </button>
        </AppFooter>
      </form>
    </>
  );
};

export default Rate;
