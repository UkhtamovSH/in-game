import { Link } from "react-router-dom"
import ArrowRight from '../assets/svg/Arrow - Right.svg'
import BgS from "../assets/Img/Bg's.png"
import { LoginSection, LoginSectionSub } from "../styles/LogIn.styled"
import TitleSubTitle from "./sections/TitleSubTitle"

const Verification = () => {
  return (
    <>
      <span className="appHeaderr">
        <Link to="/" className="">
          <img src={ArrowRight} alt="" />
        </Link>
      </span>
      <LoginSection>
        <img src={BgS} alt="" />
        <LoginSectionSub>
          <TitleSubTitle
            title={'Введите 4-значный Код верификации'}
            subtitle={'Код отправлен на номер +99893****09 Срок действия кода истекает через  01:30'}
          />
        </LoginSectionSub>
      </LoginSection>
    </>
  )
}

export default Verification

