import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import LogRegEntrance from "../components/LogRegEntrance";
import OnBoarding from "../components/OnBoarding/OnBoarding";
import OnBoardingFirst from "../components/OnBoarding/OnBoardingFirst";
import Register from "../components/Register";
import NewGame from "../components/NewGame";
import Home from "../components/Home";
import Pitches from "../components/Pitches";
import Players from "../components/Players";
import RatingPlayers from "../components/RatingPlayers";
import ResetPassword from "../components/ResetPassword";

const Routess = () => {
  return (
    <Routes>
      <Route path="/" element={<OnBoarding />} />
      <Route path="/OnBoardingFirst" element={<OnBoardingFirst />} />
      <Route path="/log-in" element={<LogRegEntrance />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/home" element={<Home />} />
      <Route path="/players" element={<Players />} />
      <Route path="/newgame" element={<NewGame />} />
      <Route path="/pitches" element={<Pitches />} />
      <Route path="/rating-players" element={<RatingPlayers />} />
    </Routes>
  );
};
export default Routess;
