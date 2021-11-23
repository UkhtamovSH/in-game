import {
  OnBoardingStyle,
  OnBoardingLogoStyle,
} from "../../styles/OnBoarding.Style/OnBoarding.styled";
import InGameLogo from "../../assets/svg/inGameLogo.svg";
import { Link, useNavigate } from "react-router-dom";
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
