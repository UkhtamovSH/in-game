import { Link } from "react-router-dom"

const Section = () => {
  return (
    <>
      Section

      <Link to="/" className="appBtnGreen">Продолжить</Link>
      <Link to="/" className="appBtnGray">Показать результаты</Link>
      <Link to="/" className="appBtnWhite">Отмена</Link>
    </>
  )
}

export default Section
