import { Link } from "react-router-dom"
import { AppFooter2, AppHeader, AppHeaderFlex, AppMAIN } from "../styles/ContainerFluid.styled"
import Navigation from "./sections/Navigation"

const NewGame = () => {
  return (
    <>
      <AppHeader>
        <AppHeaderFlex>
          <div />
          <div className="">
            <span>Новая игра</span>
          </div>
          <div />
        </AppHeaderFlex>
      </AppHeader>
      <AppMAIN>
        NewGame
      </AppMAIN>
      <AppFooter2>
        <Navigation />
      </AppFooter2>
    </>
  )
}

export default NewGame
