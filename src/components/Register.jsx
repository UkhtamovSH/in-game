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

const Register = () => {
  const [number, setNumber] = useState("")
  const [pswShowHide, setPswShowHide] = useState(false)

  const handlePswShowHide = () => setPswShowHide(!pswShowHide)


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
              <form>
                <InputFormFlex>
                  <span className="span1">
                    <span>
                      <img src={Profile} alt="" />
                    </span>
                  </span>
                  <input type="text" name="name" placeholder="Ваше имя" />
                  <span className="span2"></span>
                </InputFormFlex>
                <InputFormFlex>
                  <span className="span1">
                    <span>
                      <img src={Profile} alt="" />
                    </span>
                  </span>
                  <input type="text" name="loginname" placeholder="Логин" />
                  <span className="span2"></span>
                </InputFormFlex>
                <InputFormFlex>
                  <span className="span1">
                    <span>
                      <img src={Call} alt="" />
                    </span>
                  </span>
                  <PhoneInput
                    onChange={(e) => setNumber(e)}
                    // onFocus={() => onFocus("number_error")}
                    value={number}
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
                <InputFormFlex>
                  <span className="span1">
                    <span>
                      <img src={Lock} alt="" />
                    </span>
                  </span>
                  <input type={!pswShowHide ? 'password' : 'text'} name="password" placeholder="Пароль" />
                  <span className="span2" onClick={() => handlePswShowHide()}>
                    <span>
                      <img src={Hide} alt="" />
                    </span>
                  </span>
                </InputFormFlex>
                <InputFormFlex>
                  <span className="span1">
                    <span>
                      <img src={Lock} alt="" />
                    </span>
                  </span>
                  <input type={!pswShowHide ? 'password' : 'text'} name="repeatpassword" placeholder="Повторите пароль" />
                  <span className="span2" onClick={() => handlePswShowHide()}>
                    <span>
                      <img src={Hide} alt="" />
                    </span>
                  </span>
                </InputFormFlex>
                <div className="" style={{ width: '100%' }}>
                  <button type="submit" className="appBtnGreen2">Зарегистрироваться</button>
                </div>
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

