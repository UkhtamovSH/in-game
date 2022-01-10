import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppFooter,
  AppHeader,
  AppHeaderFlex,
  AppMAIN,
} from "../styles/ContainerFluid.styled";
import { LoginSection, LoginSectionSub } from "../styles/LogIn.styled";
import ArrowRight from "../assets/svg/Arrow - Right.svg";
import TitleSubTitle from "./sections/TitleSubTitle";
import { FormUpperDiv, InputFormFlex } from "../styles/Global.styled";
import Hide from "../assets/svg/Hide.svg";
import Lock from "../assets/svg/Lock.svg";
import BgS from "../assets/Img/Bg's.png";
import { GetNotAuthInstance } from "../helpers/httpClient";

const ResetPassword = () => {
  const [lists, setLists] = useState([]);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pswShowHide, setPswShowHide] = useState(false);
  const [error_password, setError_Password] = useState(false);
  const [same_password, setSame_Password] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handlePswShowHide = () => setPswShowHide(!pswShowHide);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    let v_password = false;
    let s_password = false;
    if (password.length < 8 && confirmPassword.length < 8) {
      v_password = true;
    }

    if (password !== confirmPassword) {
      s_password = true;
    }

    if (!s_password && !v_password) {
      const formData = new FormData();
      formData.append("phone", sessionStorage.getItem("phone"));
      formData.append("token", sessionStorage.getItem("token"));
      formData.append("password", password);
      formData.append("confirm_password", confirmPassword);
      GetNotAuthInstance()
        .post("/api/v1/update-password/", formData)
        .then((result) => {
          setLists([...lists, result.formData]);
          setPassword("");
          setConfirmPassword("");
          setLoading(false);
          localStorage.removeItem("token");
          sessionStorage.removeItem("token");
          navigate("/login");
        })
        .catch((err) => {});
    } else if (v_password && s_password) {
      setError_Password(v_password);
      setSame_Password(s_password);
      setLoading(false);
    } else {
      setLoading(false);
      setError_Password(v_password);
      setSame_Password(s_password);
    }
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <AppHeader>
          <AppHeaderFlex>
            <div className="">
              <span onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>
                <img src={ArrowRight} alt="" />
              </span>
            </div>
          </AppHeaderFlex>
        </AppHeader>
        <AppMAIN>
          <LoginSection>
            <img src={BgS} className="bgImgLogin" alt="" />
            <LoginSectionSub>
              <TitleSubTitle title={"Сброс пароля"} />
              <FormUpperDiv>
                <InputFormFlex>
                  <span className="span1">
                    <span>
                      <img src={Lock} alt="" />
                    </span>
                  </span>
                  <input
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError_Password(false);
                    }}
                    value={password}
                    type={!pswShowHide ? "password" : "text"}
                    name="password"
                    placeholder="Пароль"
                  />
                  <span className="span2" onClick={() => handlePswShowHide()}>
                    <span>
                      <img src={Hide} alt="" />
                    </span>
                  </span>
                </InputFormFlex>
                {error_password ? (
                  <span className="inputError">
                    Parolni kiriting. Kamida 8 belgi
                  </span>
                ) : null}
                <InputFormFlex>
                  <span className="span1">
                    <span>
                      <img src={Lock} alt="" />
                    </span>
                  </span>
                  <input
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      setError_Password(false);
                    }}
                    value={confirmPassword}
                    type={!pswShowHide ? "password" : "text"}
                    name="confirm_password"
                    placeholder="Повторите пароль"
                  />
                  <span className="span2" onClick={() => handlePswShowHide()}>
                    <span>
                      <img src={Hide} alt="" />
                    </span>
                  </span>
                </InputFormFlex>
                {error_password ? (
                  <span className="inputError">
                    Parolni kiriting. Kamida 8 belgi
                  </span>
                ) : null}
                {same_password ? (
                  <span className="inputError">Parol bir xil emas</span>
                ) : (
                  ""
                )}
              </FormUpperDiv>
            </LoginSectionSub>
          </LoginSection>
        </AppMAIN>
        <AppFooter>
          {loading ? (
            <div className="" style={{ width: "100%" }}>
              <button
                type="button"
                className="appBtnGreen2"
                style={{ margin: "0" }}
              >
                <div className="AppLoader22Div">
                  <div className="AppLoader22"></div>
                </div>
              </button>
            </div>
          ) : (
            <div className="" style={{ width: "100%" }}>
              <button
                type="submit"
                className="appBtnGreen2"
                style={{ margin: "0" }}
              >
                Сбросить пароль
              </button>
            </div>
          )}
        </AppFooter>
      </form>
    </>
  );
};

export default ResetPassword;
