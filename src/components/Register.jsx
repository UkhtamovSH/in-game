import { useState } from "react"
import { Link } from "react-router-dom"
import { AppFooter, AppHeader, AppHeaderFlex, AppMAIN } from "../styles/ContainerFluid.styled"
import { LoginSection, LoginSectionSub, LogRegFooterLinkFlex } from "../styles/LogIn.styled"
import { FormUpperDiv, InputFormFlex } from "../styles/Global.styled"
import PhoneInput from "react-phone-input-2"
import TitleSubTitle from "./sections/TitleSubTitle"
import Profile from '../assets/svg/Profile.svg'
import Call from '../assets/svg/Call.svg'
import Hide from '../assets/svg/Hide.svg'
import Lock from '../assets/svg/Lock.svg'
import BgS from "../assets/Img/Bg's.png"
import ArrowRight from '../assets/svg/Arrow - Right.svg'
import { getInstance } from "../helpers/httpClient"

const Register = () => {
  const [lists, setLists] = useState([])
  const [fullName, setFullName] = useState("")
  const [login, setLogin] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [pswShowHide, setPswShowHide] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({
    fullName_error: false,
    login_error: false,
    phone_error: false,
    password_error: false,
    confirmPsw_error: false,
  })

  const { fullName_error, login_error, phone_error, password_error, confirmPsw_error } = errors

  const handlePswShowHide = () => setPswShowHide(!pswShowHide)
  const onFocus = (name) => setErrors({ ...errors, [name]: false })

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    const regData = {
      full_name: fullName,
      login: login,
      phone: phone,
      password: password,
      confirm_password: confirmPassword,
    }

    if (fullName.length >= 6 && login.length >= 8 && phone.length === 12 && password.length >= 8 && confirmPassword.length >= 8) {
      getInstance()
        .post('/api/v1/register/', regData)
        .then((result) => {
          setLists([...lists, result.regData])
          setFullName("")
          setLogin("")
          setPhone("")
          setPassword("")
          setConfirmPassword("")
          setLoading(false)
        }).catch((err) => { });
    } else if (fullName.length < 6 && login.length < 8 && phone.length !== 12 && password.length < 8 && confirmPassword < 8) {
      setErrors({
        ...errors,
        fullName_error: true,
        login_error: true,
        phone_error: true,
        password_error: true,
      })
      setLoading(false)
    } else if (fullName.length < 6) {
      setErrors({
        ...errors,
        fullName_error: true,
      })
      setLoading(false)
    } else if (login.length < 8) {
      setErrors({
        ...errors,
        login_error: true,
      })
    } else if (phone.length !== 12) {
      setErrors({
        ...errors,
        phone_error: true,
      })
      setLoading(false)
    } else if (password.length < 8) {
      setErrors({
        ...errors,
        password_error: true,
      })
      setLoading(false)
    } else if (confirmPassword < 8) {
      setErrors({
        ...errors,
        password_error: true,
      })
      setLoading(false)
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
              title={'Регистрация'}
            />
            <FormUpperDiv>
              <form onSubmit={e => handleSubmit(e)}>
                <InputFormFlex>
                  <span className="span1">
                    <span>
                      <img src={Profile} alt="" />
                    </span>
                  </span>
                  <input
                    onChange={e => setFullName(e.target.value)}
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
                    onChange={e => setLogin(e.target.value)}
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
                    onChange={e => setPassword(e.target.value)}
                    onFocus={() => onFocus("password_error")}
                    value={password}
                    type={!pswShowHide ? 'password' : 'text'}
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
                <InputFormFlex>
                  <span className="span1">
                    <span>
                      <img src={Lock} alt="" />
                    </span>
                  </span>
                  <input
                    onChange={e => setConfirmPassword(e.target.value)}
                    onFocus={() => onFocus("password_error")}
                    value={confirmPassword}
                    type={!pswShowHide ? 'password' : 'text'}
                    name="confirm_password"
                    placeholder="Повторите пароль" />
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

                {loading
                  ?
                  <p>Loading...</p>
                  :
                  <div className="" style={{ width: '100%' }}>
                    <button type="submit" className="appBtnGreen2">Зарегистрироваться</button>
                  </div>
                }
              </form>
            </FormUpperDiv>
          </LoginSectionSub>
        </LoginSection>
      </AppMAIN>
      <AppFooter>
        <LogRegFooterLinkFlex>
          <div className="">
            <span>Уже есть аккаунт? </span>
            <Link to="/login" className="">
              Войти
            </Link>
          </div>
        </LogRegFooterLinkFlex>
      </AppFooter>
    </>
  )
}

export default Register

