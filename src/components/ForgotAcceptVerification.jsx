import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppHeader,
  AppHeaderFlex,
  AppMAIN,
} from "../styles/ContainerFluid.styled";
import { LoginSection, LoginSectionSub } from "../styles/LogIn.styled";
import {
  FlexBoxBtn,
  FormUpperDiv,
  FormUpperDivSub,
  InputFormFlex,
} from "../styles/Global.styled";
import PhoneInput from "react-phone-input-2";
import TitleSubTitle from "./sections/TitleSubTitle";
import Call from "../assets/svg/Call.svg";
import BgS from "../assets/Img/Bg's.png";
import ArrowRight from "../assets/svg/Arrow - Right.svg";
import { GetNotAuthInstance } from "../helpers/httpClient";
import { issetToken, setToken } from "../helpers/tokenStorage";
import VerificationInput from "react-verification-input";
import Timer from "react-compound-timer/build";
import { get } from "lodash";

const ForgotAcceptVerification = () => {
  const [lists, setLists] = useState([]);
  const [listsSendCode, setListsSendCode] = useState([]);
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(false);
  const [code, setCode] = useState("");
  const [setResetSms] = useState(false);

  const history = useNavigate();

  const [errors, setErrors] = useState({
    fullName_error: false,
    login_error: false,
    phone_error: false,
    code_error: false,
    user_error: false,
  });

  const { phone_error, code_error, user_error } = errors;

  const onFocus = (name) => setErrors({ ...errors, [name]: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (phone.length === 12) {
      const formData = new FormData();
      formData.append("phone", phone);
      GetNotAuthInstance()
        .post("/api/v1/forgot-password/", formData)
        .then((result) => {
          const status = get(result, "data.status");
          if (status === 1) {
            sessionStorage.setItem("phone", phone);
            setLists([...lists, result.formData]);
            setPhone("");
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
    } else if (phone.length !== 12) {
      setErrors({
        ...errors,
        phone_error: true,
      });
      setLoading(false);
    }
  };

  const handleVerification = (e) => {
    e.preventDefault();
    var dataCode = new FormData();
    dataCode.append("smscode", code);
    dataCode.append("phone", sessionStorage.getItem("phone", phone));

    GetNotAuthInstance()
      .post("/api/v1/forgot-accept/", dataCode)
      .then((result) => {
        const status = get(result, "data.status");
        if (status === 1) {
          const token = get(result, "data.token");
          sessionStorage.setItem("token", token);
          setToken(token, true);
          setListsSendCode([...listsSendCode, result.dataCode]);
          setPhone("");
          setCode("");
          localStorage.removeItem("token");
          history("/reset-password");
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
            <span onClick={() => history(-1)} style={{ cursor: "pointer" }}>
              <img src={ArrowRight} alt="" />
            </span>
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
              <TitleSubTitle title={"Номер Телефона"} />
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
                  {user_error ? (
                    <div className="inputError" style={{ textAlign: "center" }}>
                      Foydalanuvchi topilmadi!
                    </div>
                  ) : null}

                  {phone.length !== 12 ? (
                    <FlexBoxBtn>
                      <button
                        type="submit"
                        className="appBtnGreen2"
                        style={{ marginTop: "15px" }}
                      >
                        Продолжить
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
                            Продолжить
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
    </>
  );
};

export default ForgotAcceptVerification;
