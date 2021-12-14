import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AppFooter2,
  AppHeader,
  AppHeaderFlex,
  AppMAIN,
} from "../styles/ContainerFluid.styled";
import Navigation from "./sections/Navigation";
import Endurance from "../assets/svg/Endurance.svg";
import Player1 from "../assets/svg/player1.svg";
import Player2 from "../assets/svg/player2.svg";
import {
  NewGameHeaderFlex,
  NewGamePositionCard,
  NewGameWrapper,
} from "../styles/NewGame.styled";

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
      <AppMAIN style={{ padding: "0 15px" }}>
        <NewGameWrapper>
          <NewGameHeaderFlex>
            <div className="div1Main">
              <div className="div1">Команда 1</div>
              <p>Кол-во очков</p>
            </div>
            <div className="div2">
              <img src={Endurance} alt="" />
              <p>90</p>
              <p>мин</p>
            </div>
            <div className="div1Main">
              <div className="div1">Команда 2</div>
              <p>Кол-во очков</p>
            </div>
          </NewGameHeaderFlex>

          <p className="newGame__Title">Вратари</p>
          <NewGamePositionCard>
            <div className="NewGamePositionFlex">
              <div className="div1Main">
                <div className="div1">
                  <div className="">
                    <img src={Player1} alt="" />
                    <p>Игрок</p>
                  </div>
                </div>
              </div>
              <div className="div2Main">
                <div className="div2">
                  <div className="">
                    <img src={Player2} alt="" />
                    <p>Игрок</p>
                  </div>
                </div>
              </div>
            </div>
          </NewGamePositionCard>

          <p className="newGame__Title">Защитники</p>
          <NewGamePositionCard>
            <div className="NewGamePositionFlex">
              <div className="div1Main">
                <div className="div1">
                  <div className="">
                    <img src={Player1} alt="" />
                    <p>Игрок</p>
                  </div>
                </div>
              </div>
              <div className="div2Main">
                <div className="div2">
                  <div className="">
                    <img src={Player2} alt="" />
                    <p>Игрок</p>
                  </div>
                </div>
              </div>
            </div>
          </NewGamePositionCard>

          <p className="newGame__Title">Полузащитники</p>
          <NewGamePositionCard>
            <div className="NewGamePositionFlex">
              <div className="div1Main">
                <div className="div1">
                  <div className="">
                    <img src={Player1} alt="" />
                    <p>Игрок</p>
                  </div>
                </div>
              </div>
              <div className="div2Main">
                <div className="div2">
                  <div className="">
                    <img src={Player2} alt="" />
                    <p>Игрок</p>
                  </div>
                </div>
              </div>
            </div>
          </NewGamePositionCard>

          <p className="newGame__Title">Нападащие</p>
          <NewGamePositionCard>
            <div className="NewGamePositionFlex">
              <div className="div1Main">
                <div className="div1">
                  <div className="">
                    <img src={Player1} alt="" />
                    <p>Игрок</p>
                  </div>
                </div>
              </div>
              <div className="div2Main">
                <div className="div2">
                  <div className="">
                    <img src={Player2} alt="" />
                    <p>Игрок</p>
                  </div>
                </div>
              </div>
            </div>
          </NewGamePositionCard>
        </NewGameWrapper>
      </AppMAIN>
      <AppFooter2>
        <Navigation />
      </AppFooter2>
    </>
  );
};

export default NewGame;
