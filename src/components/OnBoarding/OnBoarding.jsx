import {
  OnBoardingStyle,
  OnBoardingLogoStyle,
} from "../../styles/OnBoarding.styled";
import InGameLogo from "../../assets/svg/inGameLogo.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { issetToken } from "../../helpers/tokenStorage";

const OnBoarding = () => {
  const navigate = useNavigate();

  const history = useNavigate();

  useEffect(() => {
    if (issetToken()) {
      history("/home");
    }
    const timer = setTimeout(() => {
      navigate("/onBoardingFirst");
    }, 2000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <OnBoardingStyle>
      <OnBoardingLogoStyle>
        <div className={"appLogo"}>
          <div>
            <img src={InGameLogo} alt="" />
          </div>
          <p>InGame</p>
        </div>
      </OnBoardingLogoStyle>
    </OnBoardingStyle>
  );
};

export default OnBoarding;
