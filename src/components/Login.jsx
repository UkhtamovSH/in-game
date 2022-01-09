import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FlexcheckBox,
  LoginSection,
  LoginSectionSub,
  LogRegFooterLinkFlex,
} from "../styles/LogIn.styled";
import TitleSubTitle from "../components/sections/TitleSubTitle";
import { FormUpperDiv, InputFormFlex } from "../styles/Global.styled";
import { get, isFunction } from "lodash";
import PhoneInput from "react-phone-input-2";
import Call from "../assets/svg/Call.svg";
import Hide from "../assets/svg/Hide.svg";
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
    } else if (phone.length < 6) {
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
            <TitleSubTitle title={"Вход в аккаунт"} />
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
                    Telefon raqam to'liq kiritilmadi
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
                    placeholder="Пароль"
                  />
                  <span className="span2" onClick={() => handlePswShowHide()}>
                    <span>
                      <img src={Hide} alt="" />
                    </span>
                  </span>
                </InputFormFlex>
                {password_error ? (
                  <span className="inputError">
                    Parolni kiriting. Kamida 8 belgi
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
                    <label htmlFor="remember">Запомнить вход</label>
                  </div>
                  <div>
                    <Link to="/login">Забыли пароль?</Link>
                  </div>
                </FlexcheckBox>
                {login_error ? (
                  <span className="inputError">Tizimga kirishda xatolik</span>
                ) : null}
                {registerError ? (
                  <span className="inputError">
                    Telefon no`mer yoki parol da xatolik
                  </span>
                ) : null}
                {loading ? (
                  <p style={{ textAlign: "center" }}>Loading...</p>
                ) : (
                  <div className="" style={{ width: "100%" }}>
                    <button type="submit" className="appBtnGreen2">
                      Войти
                    </button>
                  </div>
                )}
              </form>
            </FormUpperDiv>
          </LoginSectionSub>
        </LoginSection>
      </AppMAIN>
      <AppFooter>
        <LogRegFooterLinkFlex>
          <div className="">
            <span>Нет аккаунта? </span>
            <Link to="/register" className="">
              Зарегистрироваться
            </Link>
          </div>
        </LogRegFooterLinkFlex>
      </AppFooter>
    </>
  );
};

export default Login;
