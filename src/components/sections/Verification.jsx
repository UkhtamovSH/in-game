import { Link, useNavigate } from "react-router-dom";
import ArrowRight from "../assets/svg/Arrow - Right.svg";
import BgS from "../assets/Img/Bg's.png";
import {
  LoginSection,
  LoginSectionSub,
  LogRegFooterLinkFlex,
} from "../styles/LogIn.styled";
import TitleSubTitle from "./sections/TitleSubTitle";
import {
  AppFooter,
  AppHeader,
  AppHeaderFlex,
  AppMAIN,
} from "../styles/ContainerFluid.styled";
import { useEffect, useState } from "react";
import { issetToken } from "../helpers/tokenStorage";
import { FormUpperDiv, FormUpperDivSub } from "../styles/Global.styled";
import VerificationInput from "react-verification-input";
import Timer from "react-compound-timer/build";

const Verification = () => {
  const [setResetSms] = useState(false);

  const history = useNavigate();

  useEffect(() => {
    if (issetToken()) {
      history("/home");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const timer = (
    <Timer
      initialTime={90000}
      direction="backward"
      checkpoints={[
        {
          time: 0,
          callback: () => setResetSms(true),
        },
      ]}
    >
      {() => (
        <>
          <Timer.Minutes /> : <Timer.Seconds />
        </>
      )}
    </Timer>
  );

  return (
    <>
      <AppHeader>
        <AppHeaderFlex>
          <div className="">
            <Link to="/" className="">
              <img src={ArrowRight} alt="" />
            </Link>
          </div>
        </AppHeaderFlex>
      </AppHeader>
      <AppMAIN>
        <LoginSection>
          <img src={BgS} className="bgImgLogin" alt="" />
          <LoginSectionSub>
            <TitleSubTitle
              title={"Введите 4-значный Код верификации"}
              subtitle={
                <>
                  Код отправлен на номер +99893****09 Срок действия кода
                  истекает через {timer}
                </>
              }
            />

            <FormUpperDiv>
              <FormUpperDivSub>
                <VerificationInput
                  removeDefaultStyles
                  length={4}
                  classNames={{
                    container: "containerValidation",
                    character: "character",
                    characterInactive: "character--inactive",
                    characterSelected: "character--selected",
                  }}
                />
              </FormUpperDivSub>
            </FormUpperDiv>
          </LoginSectionSub>
        </LoginSection>
      </AppMAIN>
      <AppFooter>
        <LogRegFooterLinkFlex>
          <div className="">
            <span>Не получили код? </span>
            <Link to="/verification" className="">
              Отправить повторно
            </Link>
          </div>
        </LogRegFooterLinkFlex>
      </AppFooter>
    </>
  );
};

export default Verification;
