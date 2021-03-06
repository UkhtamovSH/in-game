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
import {
  FlexBoxBtn,
  FormUpperDiv,
  InputFormFlex,
} from "../styles/Global.styled";
import Hide from "../assets/svg/Hide.svg";
import ShowHide from "../assets/svg/Show.svg";
import Lock from "../assets/svg/Lock.svg";
import BgS from "../assets/Img/Bg's.png";
import { GetNotAuthInstance } from "../helpers/httpClient";
import { get } from "lodash";
import { useTranslation } from "react-i18next";

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

  const [errors, setErrors] = useState({
    password_error: false,
    confirmPassword_error: false,
    samePassword_error: false,
  });
  const { password_error, confirmPassword_error, samePassword_error } = errors;
  const onFocus = (name) => setErrors({ ...errors, [name]: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (password.length >= 8 && confirmPassword.length >= 8) {
      if (password !== confirmPassword) {
        setErrors({
          ...errors,
          samePassword_error: true,
        });
        setLoading(false);
      } else {
        const formData = new FormData();
        formData.append("phone", sessionStorage.getItem("phone"));
        formData.append("token", sessionStorage.getItem("token"));
        formData.append("password", password);
        formData.append("confirm_password", confirmPassword);
        GetNotAuthInstance()
          .post("/api/v1/update-password/", formData)
          .then((result) => {
            const status = get(result, "data.status");
            if (status === 1) {
              setLists([...lists, result.formData]);
              setPassword("");
              setConfirmPassword("");
              setLoading(false);
              localStorage.removeItem("token");
              sessionStorage.removeItem("token");
              sessionStorage.removeItem("phone");
              navigate("/login");
            } else {
              setErrors({
                ...errors,
                samePassword_error: false,
              });
              setLoading(false);
            }
          })
          .catch((err) => {});
      }
    } else if (password.length < 8) {
      setErrors({
        ...errors,
        password_error: true,
      });
      setLoading(false);
    } else if (confirmPassword.length < 8) {
      setErrors({
        ...errors,
        confirmPassword_error: true,
      });
      setLoading(false);
    }
  };

  const { t } = useTranslation();

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <AppHeader>
          <AppHeaderFlex>
            <div className="">
              <span />
            </div>
          </AppHeaderFlex>
        </AppHeader>
        <AppMAIN>
          <LoginSection>
            <img src={BgS} className="bgImgLogin" alt="" />
            <LoginSectionSub>
              <TitleSubTitle title={"?????????? ????????????"} />
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
                    }}
                    onFocus={() => onFocus("password_error")}
                    value={password}
                    type={!pswShowHide ? "password" : "text"}
                    name="password"
                    placeholder={t("placeholderForm.password")}
                  />
                  <span className="span2" onClick={() => handlePswShowHide()}>
                    <span>
                      <img
                        src={!pswShowHide ? Hide : ShowHide}
                        className="cursorApp"
                        alt=""
                      />
                    </span>
                  </span>
                </InputFormFlex>
                {password_error ? (
                  <span className="inputError">
                    {t("loginRegisterSection.passwordError")}
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
                    }}
                    onFocus={() => onFocus("confirmPassword_error")}
                    value={confirmPassword}
                    type={!pswShowHide ? "password" : "text"}
                    name="confirm_password"
                    placeholder={t("placeholderForm.repeatpassword")}
                  />
                  <span className="span2" onClick={() => handlePswShowHide()}>
                    <span>
                      <img
                        src={!pswShowHide ? Hide : ShowHide}
                        className="cursorApp"
                        alt=""
                      />
                    </span>
                  </span>
                </InputFormFlex>
                {confirmPassword_error ? (
                  <span className="inputError">
                    {t("loginRegisterSection.passwordError")}
                  </span>
                ) : null}
                {samePassword_error ? (
                  <span className="inputError">Parol bir xil emas</span>
                ) : null}
              </FormUpperDiv>
            </LoginSectionSub>
          </LoginSection>
        </AppMAIN>
        <AppFooter>
          {loading ? (
            <button type="button" className="appBtnGreen">
              <div className="AppLoader22Div">
                <div className="AppLoader22"></div>
              </div>
            </button>
          ) : (
            <button type="submit" className="appBtnGreen">
              ???????????????? ????????????
            </button>
          )}

          {password.length < 8 && confirmPassword.length < 8 ? (
            <FlexBoxBtn>
              <button
                type="submit"
                className="appBtnGreen2"
                style={{ marginTop: "15px" }}
              >
                ???????????????? ????????????
              </button>
            </FlexBoxBtn>
          ) : (
            <>
              {loading ? (
                <FlexBoxBtn>
                  <button
                    type="button"
                    className="appBtnGreen2"
                    style={{ marginTop: "15px" }}
                  >
                    <div className="AppLoader22Div">
                      <div className="AppLoader22"></div>
                    </div>
                  </button>
                </FlexBoxBtn>
              ) : (
                <FlexBoxBtn>
                  <button
                    type="submit"
                    className="appBtnGreen2"
                    style={{ marginTop: "15px" }}
                  >
                    ???????????????? ????????????
                  </button>
                </FlexBoxBtn>
              )}
            </>
          )}
        </AppFooter>
      </form>
    </>
  );
};

export default ResetPassword;
