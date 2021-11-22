import { Link } from "react-router-dom"
import ArrowRight from '../assets/svg/Arrow - Right.svg'
import BgS from "../assets/Img/Bg's.png"
import { LoginSection, LoginSectionSub } from "../styles/LogIn.styled"
import TitleSubTitle from "./sections/TitleSubTitle"

const Register = () => {
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
            title={'Регистрация'}
          />
          <div className="" style={{ width: '100%' }}>
            <Link to="/register" className="appBtnGreen">Быстрая регистрация</Link>
          </div>
        </LoginSectionSub>
      </LoginSection>
    </>
  )
}

export default Register

