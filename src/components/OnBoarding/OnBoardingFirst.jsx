import { OnBoardingFirst } from "../../styles/OnBoardingFirst.styled";
import { OnBoardingSecondStyle } from "../../styles/OnBoardingSecond.styled";
import { OnBoardingThirdStyle } from "../../styles/OnBoardingThird.styled";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
