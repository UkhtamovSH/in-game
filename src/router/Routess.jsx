import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login'
import LogRegEntrance from '../components/LogRegEntrance'
import OnBoarding from '../components/OnBoarding'
import Register from '../components/Register'
import Verification from '../components/Verification'

const Routess = () => {
  return (
    <Routes>
      <Route path="/" element={<OnBoarding />} />
      <Route path="/log-in" element={<LogRegEntrance />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verification" element={<Verification />} />
    </Routes >
  )
}

export default Routess