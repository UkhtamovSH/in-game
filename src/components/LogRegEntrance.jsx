import { Link } from "react-router-dom"
import { AppLogo, FlexBottom, LogRegEntranceStyle } from "../styles/LogRegEntrance.styled"
import InGameLogo from '../assets/svg/inGameLogo.svg'

const LogRegEntrance = () => {
  return (
    <>
      <LogRegEntranceStyle>
        <AppLogo>
          <div className="">
            <div>
              <img src={InGameLogo} alt="" />
            </div>
            <p>InGame</p>
          </div>
        </AppLogo>
        <FlexBottom>
          <div className="">
            <Link to="/login" className="appBtnGreen2">Войти</Link>
            <Link to="/register" className="appBtnTransparent">Быстрая регистрация</Link>
          </div>
        </FlexBottom>
      </LogRegEntranceStyle>
    </>
  )
}

export default LogRegEntrance
