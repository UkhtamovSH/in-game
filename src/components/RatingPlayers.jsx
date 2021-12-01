import { Link, NavLink } from "react-router-dom";
import {
  AppFooter2,
  AppHeader,
  AppHeaderFlex,
  AppMAIN,
} from "../styles/ContainerFluid.styled";
import Filter from "../assets/svg/Filter.svg";
import Navigation from "./sections/Navigation";
import { useState } from "react";
import { GetAuthInstance } from "../helpers/httpClient";
import { useEffect } from "react";
import _ from "lodash";

const RatingPlayers = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [data, setData] = useState([]);

  const getData = () => {
    GetAuthInstance()
      .get("api/v1/user-filter-list?per_page=5")
      .then((res) => {
        setData(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <AppHeader>
        <AppHeaderFlex>
          <div />
          <div className="">
            <span>Рейтинг игроков</span>
          </div>
          <div className="">
            <Link to="/" className="">
              <img src={Filter} alt="" />
            </Link>
          </div>
        </AppHeaderFlex>
      </AppHeader>
      <AppMAIN>
        <div className="filterOfPlayers">
          <p
            className={!changeColor ? "colorP click" : "changeP"}
            onClick={() => setChangeColor(!changeColor)}
          >
            Мировой
          </p>
          <p
            className={changeColor ? "colorP click" : "changeP"}
            onClick={() => setChangeColor(!changeColor)}
          >
            Региональный
          </p>
        </div>
        {data.map((item, index) => (
          <div className="worldPlayers">
            <p className="numberLine">1</p>
            <div className="avatar">
              <div className="avatarFiltrImg">
                <img src={_.get(item, "avatar")} alt="" />

              
             <span>
               
               {_.get(item,"position")}
               
             </span> 
  
              </div>
              <div className="AvatarName">
                <h5>{_.get(item, "full_name")}</h5>
                <div className="avatarAge">
                  <p>{_.get(item, "age")} года</p>
                  <span></span>
                  <p>{_.get(item, "city.name")} </p>
                </div>
              </div>
            </div>
            <div className="winsWrap">
              <div className="winsPersant">
                <p>{_.get(item,"victory")}%</p>
                <span>Побед</span>
              </div>
              <div className="markPersant">
                <p>{_.get(item,"ball")}</p>
                <span>Очков</span>
              </div>
            </div>
          </div>
        ))}
      </AppMAIN>
      <AppFooter2>
        <Navigation />
      </AppFooter2>
    </>
  );
};

export default RatingPlayers;
