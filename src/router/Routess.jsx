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
import PitchDetail from "../components/PitchDetail";
import CommentsRating from "../components/sections/CommentsRating";
import GamePlayerReting from "../components/GamePlayerReting";
import ProfileEdit from "../components/ProfileEdit";
import AllGames from "../components/AllGames";
import Photos from "../components/sections/Photos";
import Rate from "../components/sections/Rate";
import Setting from "../components/sections/Setting";
import PaymeComp from "../components/PaymeComp";
import PlayerMap from "../components/PlayerMap";
import PaymeHistory from "../components/PaymeHistory";
import PlayersPage from "../components/PlayersPage";
import Game from "../components/Game";
import GameOver from "../components/GameOver";
import ForgotAcceptVerification from "../components/ForgotAcceptVerification";

const Routess = () => {
  return (
    <Routes>
      <Route path="/" element={<OnBoarding />} />
      <Route path="/OnBoardingFirst" element={<OnBoardingFirst />} />
      <Route path="/log-in" element={<LogRegEntrance />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/forgot-accept" element={<ForgotAcceptVerification />} />
      <Route path="/home" element={<Home />} />
      <Route path="/players" element={<Players />} />
      <Route path="/newgame" element={<NewGame />} />
      <Route path="/game/:id" element={<Game />} />
      <Route path="/gameover/:id" element={<GameOver />} />
      <Route path="/pitches" element={<Pitches />} />
      <Route path="/pitches/:id" element={<PitchDetail />} />
      <Route path="/rating-players" element={<RatingPlayers />} />
      <Route path="/game-player-reting/:id" element={<GamePlayerReting />} />
      <Route path="/rating/:id/:user_id" element={<Rate />} />
      <Route path="/comments-rating" element={<CommentsRating />} />
      <Route path="/profile-edit" element={<ProfileEdit />} />
      <Route path="/all-games" element={<AllGames />} />
      <Route path="/photos/:id" element={<Photos />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/payment" element={<PaymeComp />} />
      <Route path="/player-map" element={<PlayerMap />} />
      <Route path="/payment-history" element={<PaymeHistory />} />
      <Route path="/player-page/:id" element={<PlayersPage />} />
    </Routes>
  );
};
export default Routess;
