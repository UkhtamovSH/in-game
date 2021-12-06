import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AppFooter2,
  AppHeader,
  AppHeaderFlex,
  AppMAIN,
} from "../styles/ContainerFluid.styled";
import Navigation from "./sections/Navigation";

const NewGame = () => {
  const [munitesList, setMunitesList] = useState([61]);
  let [munites, setMunites] = useState(0);

  useEffect(() => {
    for (munites; munites < munitesList; munites++) {
      let a = munites;
      console.log(a);
    }
  }, []);

  const upMinute = () => {};

  // var foo = new Array(45);
  // for (var i = 0; i < foo.length; i++) {
  //   console.log(i);
  // }

  return (
    <>
      <AppHeader>
        <AppHeaderFlex>
          <div />
          <div className="">
            <span>Новая игра</span>
          </div>
          <div />
        </AppHeaderFlex>
      </AppHeader>
      <AppMAIN>
        <p>NewGame</p>
      </AppMAIN>
      <AppFooter2>
        <Navigation />
      </AppFooter2>
    </>
  );
};

export default NewGame;
