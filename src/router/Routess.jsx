import { Route, Routes } from 'react-router-dom'
import LogRegEntrance from '../components/LogRegEntrance'
import OnBoarding from '../components/OnBoarding'

const Routess = () => {
  return (
    <Routes>
      <Route path="/" element={<OnBoarding />} />
      <Route path="/log-in" element={<LogRegEntrance />} />
    </Routes >
  )
}

export default Routess