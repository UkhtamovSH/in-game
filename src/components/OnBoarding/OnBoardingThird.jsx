import { OnBoardingThirdStyle } from "../../styles/OnBoarding.Style/OnBoardingThird.styled";

const OnBoardingThird = () => {
  const title = "Сформируйте свою команду";
  const subtitle =
    "Выберите игроков поблизости, расставьте их по оптимальным позициям";
  const button = "Продолжить";
  return (
    <OnBoardingThirdStyle>
      <div className="boardingFirstWrap">

        <h1>{title}</h1>
        <p>{subtitle}</p>
          <button>
            <span> {button} </span>
          </button>
      </div>
    </OnBoardingThirdStyle>
  );
};

export default OnBoardingThird;
