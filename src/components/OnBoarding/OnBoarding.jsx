import {
  OnBoardingStyle,
  OnBoardingLogoStyle,
} from "../../styles/OnBoarding.Style/OnBoarding.styled";
import InGameLogo from "../../assets/svg/inGameLogo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const OnBoarding = () => {
  const navigate = useNavigate();

  useEffect(() => {
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
