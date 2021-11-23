import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FlexcheckBox, LoginSection, LoginSectionSub, LogRegFooterLinkFlex } from "../styles/LogIn.styled"
import TitleSubTitle from "../components/sections/TitleSubTitle"
import { FormUpperDiv, InputFormFlex } from "../styles/Global.styled"
import PhoneInput from "react-phone-input-2"
import Call from '../assets/svg/Call.svg'
import Hide from '../assets/svg/Hide.svg'
import Lock from '../assets/svg/Lock.svg'
import ArrowRight from '../assets/svg/Arrow - Right.svg'
import BgS from "../assets/Img/Bg's.png"
import { AppFooter, AppHeader, AppHeaderFlex, AppMAIN } from "../styles/ContainerFluid.styled"
import { getInstance } from "../helpers/httpClient"
import { setToken } from "../helpers/tokenStorage"
const Login = () => {
  const [lists, setLists] = useState([])
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [remember, setRemember] = useState(true);
  const [pswShowHide, setPswShowHide] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({
    phone_error: false,
    password_error: false,
  });
  const { phone_error, password_error } = errors;
  const onFocus = (name) => setErrors({ ...errors, [name]: false });
  const handlePswShowHide = () => setPswShowHide(!pswShowHide)

  let history = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const loginData = {
      phone: phone,
      password: password
    }
    if (phone.length === 12 && password.length >= 8) {
      getInstance().post('/api/v1/login/', loginData)
        .then((result) => {
          setToken(result.data.access_token, remember)
          setLists([...lists, result.loginData])
          setPhone("")
          setPassword("")
          setLoading(false);
          history.push('/')
        }).catch((err) => { });
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
  }

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
              title={'Вход в аккаунт'}
            />
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
                    type={!pswShowHide ? 'password' : 'text'}
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
                      onChange={(e) => { setRemember(e.target.checked) }}
                    />
                    <label htmlFor="remember">Запомнить вход</label>
                  </div>
                  <div>
                    <Link to="/login">Забыли пароль?</Link>
                  </div>
                </FlexcheckBox>

                {loading
                  ?
                  <p>Loading...</p>
                  :
                  <div className="" style={{ width: '100%' }}>
                    <button type="submit" className="appBtnGreen2">Войти</button>
                  </div>
                }

              </form>
            </FormUpperDiv>
          </LoginSectionSub>
        </LoginSection>
      </AppMAIN >
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
  )
}

export default Login

