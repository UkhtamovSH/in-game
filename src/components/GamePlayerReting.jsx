import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Filter from "../assets/svg/Filter.svg";
import ArrowRight from "../assets/svg/Arrow - Right.svg";
import {
  AppHeader,
  AppHeaderFlex,
  AppMAIN,
} from "../styles/ContainerFluid.styled";
import { GetAuthInstance } from "../helpers/httpClient";

const GamePlayerReting = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  const getData = () => {
    GetAuthInstance()
      .get(`/api/v1/game-user/?game=${params.id}`)
      .then((res) => {
        setData(console.log(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, [params.id]);
  return (
    <>
      <AppHeader>
        <AppHeaderFlex>
          <div className="">
            <Link to="/" className="">
              <img src={ArrowRight} alt="" />
            </Link>
          </div>
          <div className="">
            <span>Карта игроков</span>
          </div>
          <div />
        </AppHeaderFlex>
        <AppMAIN>helllllo</AppMAIN>
      </AppHeader>
    </>
  );
};

export default GamePlayerReting;
