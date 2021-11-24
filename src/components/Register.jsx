import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppFooter,
  AppHeader,
  AppHeaderFlex,
  AppMAIN,
} from "../styles/ContainerFluid.styled";
import {
  LoginSection,
  LoginSectionSub,
  LogRegFooterLinkFlex,
} from "../styles/LogIn.styled";
import {
  FormUpperDiv,
  FormUpperDivSub,
  InputFormFlex,
} from "../styles/Global.styled";
import PhoneInput from "react-phone-input-2";
import TitleSubTitle from "./sections/TitleSubTitle";
import Profile from "../assets/svg/Profile.svg";
import Call from "../assets/svg/Call.svg";
import Hide from "../assets/svg/Hide.svg";
import Lock from "../assets/svg/Lock.svg";
import BgS from "../assets/Img/Bg's.png";
import ArrowRight from "../assets/svg/Arrow - Right.svg";
import { GetNotAuthInstance } from "../helpers/httpClient";
import { issetToken } from "../helpers/tokenStorage";
import VerificationInput from "react-verification-input";
import Timer from "react-compound-timer/build";

const Register = () => {
  const [lists, setLists] = useState([]);
  const [listsSendCode, setListsSendCode] = useState([]);
  const [fullName, setFullName] = useState("");
  const [login, setLogin] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pswShowHide, setPswShowHide] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error_password, setError_Password] = useState(false);
  const [same_password, setSame_Password] = useState(false);
  const [count, setCount] = useState(false);
  const [code, setCode] = useState("");
  const [resetSms, setResetSms] = useState(false);

  const history = useNavigate();

  const [errors, setErrors] = useState({
    fullName_error: false,
    login_error: false,
    phone_error: false,
  });

  const { fullName_error, login_error, phone_error } = errors;

  const handlePswShowHide = () => setPswShowHide(!pswShowHide);
  const onFocus = (name) => setErrors({ ...errors, [name]: false });

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

    if (
      fullName.length >= 6 &&
      login.length >= 8 &&
      phone.length === 12 &&
      !v_password &&
      !s_password
    ) {
      const formData = new FormData();
      formData.append("full_name", fullName);
      formData.append("login", login);
      formData.append("phone", phone);
      formData.append("password", password);
      formData.append("confirm_password", confirmPassword);
      GetNotAuthInstance()
        .post("/api/v1/register/", formData)
        .then((result) => {
          sessionStorage.setItem("phone", phone);
          setLists([...lists, result.formData]);
          setFullName("");
          setLogin("");
          setPhone("");
          setPassword("");
          setConfirmPassword("");
          setLoading(false);
          setCount(true);
        })
        .catch((err) => {});
    } else if (
      fullName.length < 6 &&
      login.length < 8 &&
      phone.length !== 12 &&
      v_password &&
      s_password
    ) {
      setErrors({
        ...errors,
        fullName_error: true,
        login_error: true,
        phone_error: true,
      });
      setLoading(false);
    } else if (fullName.length < 6) {
      setErrors({
        ...errors,
        fullName_error: true,
      });
      setLoading(false);
    } else if (login.length < 8) {
      setErrors({
        ...errors,
        login_error: true,
      });
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
    } else {
      setLoading(false);
      setError_Password(v_password);
      setSame_Password(s_password);
    }
  };

  const handleVerification = (e) => {
    e.preventDefault();
    var data = new FormData();
    data.append("phone", phone);
    data.append("smscode", code);
    data.append("password", password);
    GetNotAuthInstance.post("/api/v1/accept/", data)
      .then((result) => {
        setListsSendCode([...listsSendCode, result.data]);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    if (issetToken()) {
      history("/home");
    }
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

  const phoneNumber = sessionStorage.getItem("phone");

  var numX = phoneNumber.toString().substr(5, 5);

  var numY = phoneNumber.replace(numX, "*****");

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
            {count ? (
              <TitleSubTitle
                title={"Введите 4-значный Код верификации"}
                subtitle={
                  <>
                    Код отправлен на номер +{numY} Срок действия кода истекает
                    через {timer}
                  </>
                }
              />
            ) : (
              <TitleSubTitle title={"Регистрация"} />
            )}
            <FormUpperDiv>
              {count ? (
                <FormUpperDivSub>
                  <form onSubmit={(e) => handleVerification(e)}>
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
                    <button
                      type="submit"
                      className="appBtnGreen"
                      style={{ marginTop: "40px" }}
                    >
                      Отправить
                    </button>
                  </form>
                </FormUpperDivSub>
              ) : (
                <form onSubmit={(e) => handleSubmit(e)}>
                  <InputFormFlex>
                    <span className="span1">
                      <span>
                        <img src={Profile} alt="" />
                      </span>
                    </span>
                    <input
                      onChange={(e) => setFullName(e.target.value)}
                      onFocus={() => onFocus("fullName_error")}
                      value={fullName}
                      type="text"
                      name="full_name"
                      placeholder="Полное имя"
                    />
                    <span className="span2"></span>
                  </InputFormFlex>
                  {fullName_error ? (
                    <span className="inputError">
                      To`liq immingizni kiriting. Kamida 6 belgi
                    </span>
                  ) : null}
                  <InputFormFlex>
                    <span className="span1">
                      <span>
                        <img src={Profile} alt="" />
                      </span>
                    </span>
                    <input
                      onChange={(e) => setLogin(e.target.value)}
                      onFocus={() => onFocus("login_error")}
                      value={login}
                      type="text"
                      name="login"
                      placeholder="Логин"
                    />
                    <span className="span2"></span>
                  </InputFormFlex>
                  {login_error ? (
                    <span className="inputError">
                      Loginni kiriting. Kamida 8 belgi
                    </span>
                  ) : null}
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
                  {loading ? (
                    <p>Loading...</p>
                  ) : (
                    <div className="" style={{ width: "100%" }}>
                      <button type="submit" className="appBtnGreen2">
                        Зарегистрироваться
                      </button>
                    </div>
                  )}
                </form>
              )}
            </FormUpperDiv>
          </LoginSectionSub>
        </LoginSection>
      </AppMAIN>
      <AppFooter>
        <LogRegFooterLinkFlex>
          {count ? (
            ""
          ) : (
            <div className="">
              <span>Уже есть аккаунт? </span>
              <Link to="/login" className="">
                Войти
              </Link>
            </div>
          )}
        </LogRegFooterLinkFlex>
      </AppFooter>
    </>
  );
};

export default Register;
