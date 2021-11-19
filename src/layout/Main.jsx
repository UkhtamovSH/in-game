import { ContainerFluid } from "../styles/ContainerFluid.styled"

const Main = (props) => {
  return (
    <ContainerFluid>
      <div className="">
        header
      </div>
      {props.children}
      <div className="">
        footer
      </div>
    </ContainerFluid>
  )
}

export default Main
