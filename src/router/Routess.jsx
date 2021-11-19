import { Route, Routes } from 'react-router-dom'
import OnBoarding from '../components/OnBoarding'

const Routess = () => {
  return (
    <Routes>
      <Route path="/" element={<OnBoarding />} />
    </Routes >
  )
}

export default Routess