import { Link } from "react-router-dom"
import ArrowRight from '../assets/svg/Arrow - Right.svg'
import BgS from "../assets/Img/Bg's.png"
import { LoginSection, LoginSectionSub, LogRegFooterLinkFlex } from "../styles/LogIn.styled"
import TitleSubTitle from "./sections/TitleSubTitle"
import { AppFooter, AppHeader, AppHeaderFlex, AppMAIN } from "../styles/ContainerFluid.styled"

const Verification = () => {
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
              title={'Введите 4-значный Код верификации'}
              subtitle={'Код отправлен на номер +99893****09 Срок действия кода истекает через  01:30'}
            />
          </LoginSectionSub>
        </LoginSection>
      </AppMAIN>
      <AppFooter>
        <LogRegFooterLinkFlex>
          <div className="">
            <span>Не получили код?  </span>
            <Link to="/verification" className="">
              Отправить повторно
            </Link>
          </div>
        </LogRegFooterLinkFlex>
      </AppFooter>
    </>
  )
}

export default Verification

