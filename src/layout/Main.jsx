import { ContainerFluid } from "../styles/ContainerFluid.styled"

const Main = (props) => {
  return (
    <ContainerFluid>
      <div className="item">{props.children}</div>
    </ContainerFluid>
  )
}

export default Main
