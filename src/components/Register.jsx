import { useState } from "react";
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
  FlexBoxBtn,
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
import { setToken } from "../helpers/tokenStorage";
import VerificationInput from "react-verification-input";
import Timer from "react-compound-timer/build";
import { get } from "lodash";
import ShowHide from "../assets/svg/Show.svg";

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
  // const [error_password, setError_Password] = useState(false);
  // const [same_password, setSame_Password] = useState(false);
  const [count, setCount] = useState(false);
  const [code, setCode] = useState("");
  // const [setResetSms] = useState(false);

  const history = useNavigate();

  const [errors, setErrors] = useState({
    fullName_error: false,
    login_error: false,
    phone_error: false,
    code_error: false,
    password_error: false,
    confirmPassword_error: false,
    samePassword_error: false,
    user_error: false,
  });

  const {
    fullName_error,
    login_error,
    phone_error,
    code_error,
    password_error,
    confirmPassword_error,
    samePassword_error,
    user_error,
  } = errors;

  const handlePswShowHide = () => setPswShowHide(!pswShowHide);
  const onFocus = (name) => setErrors({ ...errors, [name]: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      fullName.length >= 8 &&
      login.length >= 4 &&
      phone.length === 12 &&
      password.length >= 8 &&
      confirmPassword.length >= 8
    ) {
      if (password !== confirmPassword) {
        setErrors({
          ...errors,
          samePassword_error: true,
        });
        setLoading(false);
      } else {
        const formData = new FormData();
        formData.append("full_name", fullName);
        formData.append("login", login);
        formData.append("phone", phone);
        formData.append("password", password);
        formData.append("confirm_password", confirmPassword);
        GetNotAuthInstance()
          .post("/api/v1/register/", formData)
          .then((result) => {
            const status = get(result, "data.status");
            if (status === 1) {
              sessionStorage.setItem("phone", phone);
              sessionStorage.setItem("password", password);
              setLists([...lists, result.formData]);
              setFullName("");
              setLogin("");
              setPhone("");
              setPassword("");
              setConfirmPassword("");
              setLoading(false);
              setCount(true);
              setErrors({
                ...errors,
                user_error: false,
              });
            } else {
              setErrors({
                ...errors,
                user_error: true,
                samePassword_error: false,
              });
              setLoading(false);
            }
          })
          .catch((err) => {
            setErrors({
              ...errors,
              user_error: false,
            });
          });
      }
    } else if (fullName.length < 8) {
      setErrors({
        ...errors,
        fullName_error: true,
      });
      setLoading(false);
    } else if (login.length < 4) {
      setErrors({
        ...errors,
        login_error: true,
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
    } else if (confirmPassword.length < 8) {
      setErrors({
        ...errors,
        confirmPassword_error: true,
      });
      setLoading(false);
    }
  };

  const handleVerification = (e) => {
    e.preventDefault();
    var dataCode = new FormData();
    dataCode.append("phone", sessionStorage.getItem("phone", phone));
    dataCode.append("smscode", code);
    dataCode.append("password", sessionStorage.getItem("password", password));

    GetNotAuthInstance()
      .post("/api/v1/accept/", dataCode)
      .then((result) => {
        const status = get(result, "data.status");
        if (status === 1) {
          const token = get(result, "data.token");
          setToken(token, true);
          setListsSendCode([...listsSendCode, result.dataCode]);
          setPhone("");
          setCode("");
          history("/home");
        } else {
          setErrors({
            ...errors,
            code_error: true,
          });
        }
      })
      .catch((err) => {});
  };

  const timer = (
    <Timer
      initialTime={90000}
      direction="backward"
      checkpoints={[
        {
          time: 0,
          callback: () => console.log(""),
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

  const phoneNumber = sessionStorage.getItem("phone")
    ? sessionStorage.getItem("phone")
    : "";

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
                <>
                  <FormUpperDivSub>
                    <form onSubmit={(e) => handleVerification(e)}>
                      <VerificationInput
                        removeDefaultStyles
                        length={4}
                        onChange={(e) => setCode(e)}
                        value={code}
                        validChars="0-9"
                        classNames={{
                          container: "containerValidation",
                          character: "character",
                          characterInactive: "character--inactive",
                          characterSelected: "character--selected",
                        }}
                      />

                      {code_error ? (
                        <div
                          className="inputError"
                          style={{ textAlign: "center", marginTop: "20px" }}
                        >
                          SMS kod xato
                        </div>
                      ) : null}

                      {code.length === 4 ? (
                        <button
                          type="submit"
                          className="appBtnGreen"
                          style={{ marginTop: "20px" }}
                        >
                          Отправить
                        </button>
                      ) : (
                        ""
                      )}
                    </form>
                  </FormUpperDivSub>
                </>
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
                      maxLength="30"
                    />
                    <span className="span2"></span>
                  </InputFormFlex>
                  {fullName_error ? (
                    <span className="inputError">
                      To`liq ismda kamida 8 ta belgi bo'lishi kerak
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
                      maxLength="30"
                    />
                    <span className="span2"></span>
                  </InputFormFlex>
                  {login_error ? (
                    <span className="inputError">
                      Loginda kamida 4 ta belgi bo'lishi kerak
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
                      }}
                      onFocus={() => onFocus("password_error")}
                      value={password}
                      type={pswShowHide ? "text" : "password"}
                      name="password"
                      placeholder="Пароль"
                    />
                    <span className="span2" onClick={handlePswShowHide}>
                      <span>
                        <img
                          src={pswShowHide ? ShowHide : Hide}
                          className="cursorApp"
                          alt=""
                        />
                      </span>
                    </span>
                  </InputFormFlex>
                  {password_error ? (
                    <span className="inputError">
                      Parolda kamida 8 ta belgi bo'lishi kerak
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
                      type={pswShowHide ? "text" : "password"}
                      name="confirm_password"
                      placeholder="Повторите пароль"
                    />
                    <span className="span2" onClick={handlePswShowHide}>
                      <span>
                        <img
                          src={pswShowHide ? ShowHide : Hide}
                          className="cursorApp"
                          alt=""
                        />
                      </span>
                    </span>
                  </InputFormFlex>
                  {confirmPassword_error ? (
                    <span className="inputError">
                      Parolda kamida 8 ta belgi bo'lishi kerak
                    </span>
                  ) : null}
                  {samePassword_error ? (
                    <span className="inputError">Parol bir xil emas</span>
                  ) : null}
                  {user_error ? (
                    <div className="inputError" style={{ textAlign: "center" }}>
                      Bu telefon raqami allaqachon mavjud
                    </div>
                  ) : null}

                  {fullName.length < 8 &&
                  phone.length !== 12 &&
                  login.length < 4 &&
                  password.length < 8 &&
                  confirmPassword.length < 8 ? (
                    <FlexBoxBtn>
                      <button
                        type="submit"
                        className="appBtnGreen2"
                        style={{ marginTop: "15px" }}
                      >
                        Зарегистрироваться
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
                            Зарегистрироваться
                          </button>
                        </FlexBoxBtn>
                      )}
                    </>
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
