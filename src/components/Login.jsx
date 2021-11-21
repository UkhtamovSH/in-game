import { useState } from "react"
import { Link } from "react-router-dom"
import { FlexcheckBox, LoginSection, LoginSectionSub, LogRegFooterLinkFlex } from "../styles/LogIn.styled"
import TitleSubTitle from "../components/sections/TitleSubTitle"
import { FormUpperDiv, InputFormFlex } from "../styles/Global.styled"
import PhoneInput from "react-phone-input-2"
import Profile from '../assets/svg/Profile.svg'
import Call from '../assets/svg/Call.svg'
import Hide from '../assets/svg/Hide.svg'
import Lock from '../assets/svg/Lock.svg'
import ArrowRight from '../assets/svg/Arrow - Right.svg'
import BgS from "../assets/Img/Bg's.png"
import { AppFooter, AppHeader, AppHeaderFlex, AppMAIN } from "../styles/ContainerFluid.styled"

const Login = () => {
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
              title={'Вход в аккаунт'}
            />
            <FormUpperDiv>
              <form>
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
                <FlexcheckBox>
                  <div class="form-group">
                    <input type="checkbox" id="remember" />
                    <label for="remember">Запомнить вход</label>
                  </div>
                  <div>
                    <Link to="/login">Забыли пароль?</Link>
                  </div>
                </FlexcheckBox>
                <div className="" style={{ width: '100%' }}>
                  <button type="submit" className="appBtnGreen2">Войти</button>
                </div>
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

