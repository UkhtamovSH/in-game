import { OnBoardingFirst } from "../../styles/OnBoardingFirst.styled";
import { OnBoardingSecondStyle } from "../../styles/OnBoardingSecond.styled";
import { OnBoardingThirdStyle } from "../../styles/OnBoardingThird.styled";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { issetToken } from "../../helpers/tokenStorage";
import { useTranslation } from "react-i18next";

const OnBoardingFirstStyle = () => {
  const [count, setCount] = useState(1);

  const handleCount = () => setCount(count + 1);

  const { t } = useTranslation();
  const history = useNavigate();

  useEffect(() => {
    if (issetToken()) {
      history("/home");
    }
  }, []);

  return (
    <>
      {count === 1 ? (
        <OnBoardingFirst>
          <div className="boardingFirstWrap">
            <div className="dots">
              <div className="firstDot"></div>
              <div className="secondDot"></div>
              <div className="thirdDot"></div>
            </div>
            <h1>{t("OnBoardingFirst.buildteam")}</h1>
            <p>{t("OnBoardingFirst.selectPlayer")}</p>
            <button className="appBtnGreen" onClick={() => handleCount()}>
              {t("btnContinue.btn")}
            </button>
          </div>
        </OnBoardingFirst>
      ) : count === 2 ? (
        <>
          <OnBoardingSecondStyle>
            <div className="boardingFirstWrap">
              <div className="dots">
                <div className="secondDot"></div>
                <div className="firstDot"></div>
                <div className="thirdDot"></div>
              </div>
              <h1>{t("OnBoardingFirst.buildteam")}</h1>
              <p>{t("OnBoardingFirst.selectPlayer")}</p>
              <button onClick={() => handleCount()}>
                <span>{t("btnContinue.btn")}</span>
              </button>
            </div>
          </OnBoardingSecondStyle>
        </>
      ) : count === 3 ? (
        <>
          <OnBoardingThirdStyle>
            <div className="boardingFirstWrap">
              <div className="dots">
                <div className="secondDot"></div>
                <div className="thirdDot"></div>
                <div className="firstDot"></div>
              </div>
              <h1>{t("OnBoardingFirst.buildteam")}</h1>
              <p>{t("OnBoardingFirst.selectPlayer")}</p>
              <Link to="/log-in">
                <button>
                  <span>{t("btnContinue.btn")}</span>
                </button>
              </Link>
            </div>
          </OnBoardingThirdStyle>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default OnBoardingFirstStyle;
