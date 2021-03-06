import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FlexcheckBox,
  LoginSection,
  LoginSectionSub,
  LogRegFooterLinkFlex,
} from "../styles/LogIn.styled";
import TitleSubTitle from "../components/sections/TitleSubTitle";
import {
  FlexBoxBtn,
  FormUpperDiv,
  InputFormFlex,
} from "../styles/Global.styled";
import { get, isFunction } from "lodash";
import PhoneInput from "react-phone-input-2";
import Call from "../assets/svg/Call.svg";
import Hide from "../assets/svg/Hide.svg";
import ShowHide from "../assets/svg/Show.svg";
import Lock from "../assets/svg/Lock.svg";
import ArrowRight from "../assets/svg/Arrow - Right.svg";
import BgS from "../assets/Img/Bg's.png";
import {
  AppFooter,
  AppHeader,
  AppHeaderFlex,
  AppMAIN,
} from "../styles/ContainerFluid.styled";
import { GetNotAuthInstance } from "../helpers/httpClient";
import { issetToken, setToken } from "../helpers/tokenStorage";
import { useTranslation } from "react-i18next";

const Login = () => {
  const [lists, setLists] = useState([]);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [pswShowHide, setPswShowHide] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    phone_error: false,
    password_error: false,
    login_error: false,
    registerError: false,
    networkError: false,
  });
  const {
    phone_error,
    password_error,
    login_error,
    registerError,
    // networkError,
  } = errors;
  const onFocus = (name) => setErrors({ ...errors, [name]: false });
  const handlePswShowHide = () => setPswShowHide(!pswShowHide);

  let history = useNavigate();

  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (phone.length === 12 && password.length >= 8) {
      const formData = new FormData();
      formData.append("phone", phone);
      formData.append("password", password);
      GetNotAuthInstance()
        .post("/api/v1/login/", formData)
        .then((result) => {
          const status = get(result, "data.status");
          if (status === 1) {
            const token = get(result, "data.token");
            setToken(token, remember);
            setLists([...lists, result.formData]);
            setPhone("");
            setPassword("");
            setLoading(false);
            history("/home");
          } else {
            setErrors({
              ...errors,
              login_error: true,
            });
            setLoading(false);
          }
        })
        .catch((err) => {
          const toJSON = get(err, "toJSON");
          if (isFunction(toJSON)) {
            const status = get(err?.toJSON(), "status");
            const message = get(err?.toJSON(), "message");
            if (status === 403) {
              setErrors({ ...errors, registerError: true });
            } else if (message === "Network Error") {
              setErrors({ ...errors, networkError: true });
            } else {
              setErrors({ ...errors, login_error: true });
            }
          } else {
            setErrors({ ...errors, login_error: true });
          }
        })
        .finally(() => setLoading(false));
    } else if (phone.length !== 12 && password.length < 8) {
      setErrors({
        ...errors,
        phone_error: true,
        password_error: true,
      });
      setLoading(false);
    } else if (phone.length !== 12) {
      setErrors({
        ...errors,
        phone_error: true,
      });
      setLoading(false);
    } else if (password.length < 8) {
      setErrors({
        ...errors,
        password_error: true,
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    if (issetToken()) {
      history("/home");
    }
  }, []);

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
            <TitleSubTitle title={"???????? ?? ??????????????"} />
            <FormUpperDiv>
              <form onSubmit={(e) => handleSubmit(e)}>
                <InputFormFlex>
                  <span className="span1">
                    <span>
                      <img src={Call} alt="" />
                    </span>
                  </span>
                  <PhoneInput
                    onChange={(e) => setPhone(e)}
                    onFocus={() => onFocus("phone_error")}
                    value={phone}
                    inputExtraProps={{
                      required: true,
                      autoFocus: true,
                    }}
                    country={"uz"}
                    onlyCountries={["uz"]}
                    masks={{ uz: "(..) ...-..-.." }}
                    placeholder={"+998 () ___--__"}
                    areaCodes={{ uz: ["998"] }}
                    autocomplete="off"
                  />
                  <span className="span2"></span>
                </InputFormFlex>
                {phone_error ? (
                  <span className="inputError">
                    {t("loginRegisterSection.telError")}
                  </span>
                ) : null}
                <InputFormFlex>
                  <span className="span1">
                    <span>
                      <img src={Lock} alt="" />
                    </span>
                  </span>
                  <input
                    type={!pswShowHide ? "password" : "text"}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => onFocus("password_error")}
                    value={password}
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
                <FlexcheckBox>
                  <div className="form-group">
                    <input
                      type="checkbox"
                      id="remember"
                      checked={remember}
                      onChange={(e) => {
                        setRemember(e.target.checked);
                      }}
                    />
                    <label htmlFor="remember">?????????????????? ????????</label>
                  </div>
                  <div>
                    <Link to="/forgot-accept">???????????? ?????????????</Link>
                  </div>
                </FlexcheckBox>
                {login_error ? (
                  <div className="inputError" style={{ textAlign: "center" }}>
                    {t("loginRegisterSection.loginError")}
                  </div>
                ) : null}
                {registerError ? (
                  <div className="inputError" style={{ textAlign: "center" }}>
                    {t("loginRegisterSection.phonePasswordError")}
                  </div>
                ) : null}

                {phone.length !== 12 && password.length < 8 ? (
                  <FlexBoxBtn>
                    <button
                      type="submit"
                      className="appBtnGreen2"
                      style={{ marginTop: "15px" }}
                    >
                      ??????????
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
                          ??????????
                        </button>
                      </FlexBoxBtn>
                    )}
                  </>
                )}
              </form>
            </FormUpperDiv>
          </LoginSectionSub>
        </LoginSection>
      </AppMAIN>
      <AppFooter>
        <LogRegFooterLinkFlex>
          <div className="">
            <span>?????? ????????????????? </span>
            <Link to="/register" className="">
              ????????????????????????????????????
            </Link>
          </div>
        </LogRegFooterLinkFlex>
      </AppFooter>
    </>
  );
};

export default Login;
