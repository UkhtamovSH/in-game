import { Link } from "react-router-dom"
import ArrowRight from '../assets/svg/Arrow - Right.svg'
import BgS from "../assets/Img/Bg's.png"
import { LoginSection, LoginSectionSub } from "../styles/LogIn.styled"
import TitleSubTitle from "../components/sections/TitleSubTitle"

const Login = () => {
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
            title={'Вход в аккаунт'}
          />
          <div className="" style={{ width: '100%' }}>
            <Link to="/login" className="appBtnGreen">Войти</Link>
          </div>
        </LoginSectionSub>
      </LoginSection>
    </>
  )
}

export default Login

