import { OnBoardingFirst } from "../../styles/OnBoarding.Style/OnBoardingFirst.styled";
import { OnBoardingSecondStyle } from "../../styles/OnBoarding.Style/OnBoardingSecond.styled";
import { OnBoardingThirdStyle } from "../../styles/OnBoarding.Style/OnBoardingThird.styled";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { issetToken } from "../../helpers/tokenStorage";

const OnBoardingFirstStyle = () => {
  const [count, setCount] = useState(1);

  const handleCount = () => setCount(count + 1);

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
            <h1>Сформируйте свою команду</h1>
            <p>
              Выберите игроков поблизости, расставьте их по оптимальным позициям
            </p>
            <button className="appBtnGreen" onClick={() => handleCount()}>
              Продолжить
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
              <h1>Сформируйте свою команду</h1>
              <p>
                Выберите игроков поблизости, расставьте их по оптимальным
                позициям
              </p>
              <button onClick={() => handleCount()}>
                <span>Продолжить</span>
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
              <h1>Сформируйте свою команду</h1>
              <p>
                Выберите игроков поблизости, расставьте их по оптимальным
                позициям{" "}
              </p>
              <Link to="/log-in">
                <button>
                  <span>Продолжить</span>
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
