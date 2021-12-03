import { Link, NavLink } from "react-router-dom"
import { AppFooter2, AppHeader, AppHeaderFlex, AppMAIN } from "../styles/ContainerFluid.styled"
import { LogRegFooterLinkFlex2 } from "../styles/LogIn.styled"
import Filter from '../assets/svg/Filter.svg'
import Navigation from '../components/sections/Navigation'

const Players = () => {
  return (
    <>
      <AppHeader>
        <AppHeaderFlex>
          <div />
          <div className="">
            <span>Карта игроков</span>
          </div>
          <div className="">
            <Link to="/" className="">
              <img src={Filter} alt="" />
            </Link>
          </div>
        </AppHeaderFlex>
      </AppHeader>
      <AppMAIN>
        Players
      </AppMAIN>
      <AppFooter2>
        <Navigation />
      </AppFooter2>
    </>
  )
}

export default Players