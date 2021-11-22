import { Link, NavLink } from "react-router-dom"
import { AppFooter2, AppMAIN2 } from "../styles/ContainerFluid.styled"
import Navigation from '../components/sections/Navigation'

const Home = () => {
  return (
    <>
      <AppMAIN2>
        Home
      </AppMAIN2>
      <AppFooter2>
        <Navigation />
      </AppFooter2>
    </>
  )
}

export default Home
