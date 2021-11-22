import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'
import LogRegEntrance from '../components/LogRegEntrance'
import NewGame from '../components/NewGame'
import OnBoarding from '../components/OnBoarding'
import Pitches from '../components/Pitches'
import Players from '../components/Players'
import RatingPlayers from '../components/RatingPlayers'
import Register from '../components/Register'
import ResetPassword from '../components/ResetPassword'
import Verification from '../components/Verification'

const Routess = () => {
  return (
    <Routes>
      <Route path="/" element={<OnBoarding />} />
      <Route path="/log-in" element={<LogRegEntrance />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/home" element={<Home />} />
      <Route path="/players" element={<Players />} />
      <Route path="/newgame" element={<NewGame />} />
      <Route path="/pitches" element={<Pitches />} />
      <Route path="/rating-players" element={<RatingPlayers />} />
    </Routes >
  )
}

export default Routess