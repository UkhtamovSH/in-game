import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login";
import LogRegEntrance from "../components/LogRegEntrance";
import OnBoarding from "../components/OnBoarding/OnBoarding";
import OnBoardingFirst from "../components/OnBoarding/OnBoardingFirst";
import OnBoardingSecond from "../components/OnBoarding/OnBoardingSecond";
import OnBoardingThird from "../components/OnBoarding/OnBoardingThird";
import Register from "../components/Register";
import Verification from "../components/Verification";

const Routess = () => {
  return (
    <Routes>
      <Route path="/" element={<OnBoarding />} />
      <Route path="/OnBoardingFirst" element={<OnBoardingFirst />} />
      <Route path="/OnBoardingSecond" element={<OnBoardingSecond />} />
      <Route path="/OnBoardingThird" element={<OnBoardingThird />} />
      <Route path="/log-in" element={<LogRegEntrance />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/home" element={<Home/>} />

    </Routes>
  );
};

export default Routess;
