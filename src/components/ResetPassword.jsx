import { useState } from "react"
import { Link } from "react-router-dom"
import { AppFooter, AppHeader, AppHeaderFlex, AppMAIN } from "../styles/ContainerFluid.styled"
import { LoginSection, LoginSectionSub, LogRegFooterLinkFlex } from "../styles/LogIn.styled"
import ArrowRight from '../assets/svg/Arrow - Right.svg'
import TitleSubTitle from "./sections/TitleSubTitle"
import { FormUpperDiv, InputFormFlex } from "../styles/Global.styled"
import Hide from '../assets/svg/Hide.svg'
import Lock from '../assets/svg/Lock.svg'
import BgS from "../assets/Img/Bg's.png"

const ResetPassword = () => {
  const [pswShowHide, setPswShowHide] = useState(false)

  const handlePswShowHide = () => setPswShowHide(!pswShowHide)
  return (
    <>
      <form>
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
                title={'Сброс пароля'}
              />
              <FormUpperDiv>
                <InputFormFlex>
                  <span className="span1">
                    <span>
                      <img src={Lock} alt="" />
                    </span>
                  </span>
                  <input type={!pswShowHide ? 'password' : 'text'} name="password" placeholder="Введите новый пароль" />
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
                  <input type={!pswShowHide ? 'password' : 'text'} name="repeatpassword" placeholder="Повторите новый пароль" />
                  <span className="span2" onClick={() => handlePswShowHide()}>
                    <span>
                      <img src={Hide} alt="" />
                    </span>
                  </span>
                </InputFormFlex>
              </FormUpperDiv>
            </LoginSectionSub>
          </LoginSection>
        </AppMAIN>
        <AppFooter>
          <button type="submit" className="appBtnGreen">
            Сбросить пароль
          </button>
        </AppFooter>
      </form>
    </>
  )
}

export default ResetPassword
