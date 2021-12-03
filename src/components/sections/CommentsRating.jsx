import _ from "lodash";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GetAuthInstance } from "../../helpers/httpClient";
import { CommentsWrapper, SliderDiv } from "../../styles/CommentsRating";
import { AppHeader, AppHeaderFlex, AppMAIN } from "../../styles/ContainerFluid.styled";
import Filter from "../../assets/svg/Filter.svg"
import ArrowRight from "../../assets/svg/Arrow - Right.svg"
const CommentsRating = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    GetAuthInstance()
      .get("/api/v1/game/review/")
      .then((res) => {
        setData(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <AppHeader>
        <AppHeaderFlex>
          <div className="">
            <Link to="/home" className="">
              <img src={ArrowRight} alt="" />
            </Link>
          </div>
          <div className="">
            <span>Все отзывы</span>
          </div>
          <div className="">
            <Link to="/" className="">
              <img src={Filter} alt="" />
            </Link>
          </div>
        </AppHeaderFlex>
      </AppHeader>
      <AppMAIN>
        <CommentsWrapper>
          {data.map((item, index) => (
            <SliderDiv>
              <div className="commenterImg">
                <img src={item.user.avatar} alt="" />
                <div className="commenterName">
                  <h5>{item.user.full_name}</h5>
                  <div className="ageAvatar2">
                    <p>{item.user.age} лет</p>
                    <span></span>
                    <p>{item.user.city}</p>
                  </div>
                </div>
              </div>
              <p className="swiperParagraph">{_.get(item, "content")}</p>
            </SliderDiv>
          ))}
        </CommentsWrapper>
      </AppMAIN>
    </>
  );
};

export default CommentsRating;