import { Link, useNavigate } from "react-router-dom";
import {
  AppLogo,
  FlexBottom,
  LogRegEntranceStyle,
} from "../styles/LogRegEntrance.styled";
import InGameLogo from "../assets/svg/inGameLogo.svg";
import { issetToken } from "../helpers/tokenStorage";
import { useEffect } from "react";

const LogRegEntrance = () => {
  const history = useNavigate();
  useEffect(() => {
    if (issetToken()) {
      history("/home");
    }
  }, []);
  return (
    <>
      <LogRegEntranceStyle>
        <AppLogo>
          <div className="">
            <div>
              <img src={InGameLogo} alt="" />
            </div>
            <p>InGame</p>
          </div>
        </AppLogo>
        <FlexBottom>
          <div className="">
            <Link
              to="/login"
              className="appBtnGreen"
              style={{ padding: "16px 0", marginBottom: "15px" }}
            >
              Войти
            </Link>
            <Link
              to="/register"
              className="appBtnTransparent"
              style={{ padding: "16px 0" }}
            >
              Быстрая регистрация
            </Link>
          </div>
        </FlexBottom>
      </LogRegEntranceStyle>
    </>
  );
};

export default LogRegEntrance;
