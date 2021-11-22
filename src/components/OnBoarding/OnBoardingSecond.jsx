import { OnBoardingSecondStyle } from "../../styles/OnBoarding.Style/OnBoardingSecond.styled";
import { Link } from "react-router-dom";

const OnBoardingSecond = () => {
  const title = "Сформируйте свою команду";
  const subtitle =
    "Выберите игроков поблизости, расставьте их по оптимальным позициям";
  const button = "Продолжить";

  return (
    <OnBoardingSecondStyle>
      <div className="boardingFirstWrap">
      
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <Link to="/OnBoardingThird">
          <button>
            <span> {button} </span>
          </button>
        </Link>
      </div>
    </OnBoardingSecondStyle>
  );
};

export default OnBoardingSecond;
