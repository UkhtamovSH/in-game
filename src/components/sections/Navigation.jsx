import Homee from "../../assets/svg/Homee.svg";
import Homee2 from "../../assets/svg/Homee2.svg";
import User2 from "../../assets/svg/2User.svg";
import User22 from "../../assets/svg/22User.svg";
import Groupp from "../../assets/svg/Groupp.svg";
import Groupp2 from "../../assets/svg/Groupp2.svg";
import Pitches from "../../assets/svg/pitches.svg";
import Pitchess from "../../assets/svg/pitchess.svg";
import Chart from "../../assets/svg/Chart.svg";
import Charts from "../../assets/svg/Charts.svg";
import { Link, NavLink } from "react-router-dom";
import { LogRegFooterLinkFlex2 } from "../../styles/LogIn.styled";
import { useEffect, useState } from "react";

const Navigation = () => {
  const links = [
    {
      img: Homee,
      to: "/home",
    },
    {
      img: User2,
      to: "/players",
    },
    {
      img: Groupp,
      to: "/newgame",
    },
    {
      img: Pitches,
      to: "/pitches",
    },
    {
      img: Chart,
      to: "/rating-players",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <LogRegFooterLinkFlex2>
        {links.map((link, item) => (
          <NavLink exact="true" to={link.to} key={item}>
            <img src={link.img} alt="" />
          </NavLink>
        ))}
      </LogRegFooterLinkFlex2>
    </>
  );
};

export default Navigation;
