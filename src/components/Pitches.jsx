import { Link } from "react-router-dom";
import {
  AppFooter2,
  AppHeader,
  AppHeaderFlex,
  AppMAIN,
} from "../styles/ContainerFluid.styled";
import priceStar from "../assets/Img/Vector.png";
import AppImg1 from "../assets/Img/Images.png";
import Filter from "../assets/svg/Filter.svg";
import Navigation from "./sections/Navigation";
import { useEffect, useState } from "react";
import { GetAuthInstance } from "../helpers/httpClient";
import { Polya, AppMainContain } from "../styles/Pitches.style";
import { get, map } from "lodash";
import styled from "styled-components";

const SPitchesContainer = styled.div`
.SPitchesDiv{
    position: relative;
    z-index: 1;
    width: 100%;
    height: 254px;
    border-radius: 16px;
    background-color: #484343;
    overflow: hidden;
    margin: 10px auto;
  }
}
`;
const Pitches = () => {
  const [data, setData] = useState([]);
  const [preLoading, setPreLoading] = useState(false);

  const getData = () => {
    setPreLoading(true);
    GetAuthInstance()
      .get("api/v1/pitch/")
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => {})
      .finally(() => setPreLoading(false));
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
            <span>Поля</span>
          </div>
          <div />
          {/* <div className="">
            <Link to="/" className="">
              <img src={Filter} alt="" />
            </Link>
          </div> */}
        </AppHeaderFlex>
      </AppHeader>
      <AppMAIN style={{ marginRight: "15px", marginLeft: "15px" }}>
        {preLoading ? (
          <SPitchesContainer>
            {map([1, 2, 3, 4, 5, 6, 7, 8], (_, index) => (
              <div key={index} className="SPitchesDiv beforeAnimation33" />
            ))}
          </SPitchesContainer>
        ) : (
          <div>
            {map(data, (item, index) => {
              const {
                id,
                Image,
                status,
                review_avg,
                name,
                region,
                city,
                Orientr,
              } = item;
              return (
                <div key={index}>
                  <AppMainContain>
                    <Polya>
                      <Link to={"/pitches/" + id}>
                        <div className="poolyaImg">
                          <img
                            src={get(Image, "0") ? get(Image, "0") : AppImg1}
                            alt=""
                          />
                        </div>
                        <div className="layer" />
                        <div className="stadion">
                          <div className="leftFree">
                            <p>{status ? "Занято" : "Свободно"}</p>
                          </div>
                          <div className="rightFree">
                            <img src={priceStar} alt="" />
                            <p>{review_avg}</p>
                          </div>
                        </div>
                        <div className="address">
                          <h4>{name}</h4>
                          <p>
                            {city.name}, {region.name}
                          </p>
                          {map(Orientr, (item, index) => (
                            <p key={index}>
                              {item.address}, ориентир: {item.orientr}
                            </p>
                          ))}
                        </div>
                      </Link>
                    </Polya>
                  </AppMainContain>
                </div>
              );
            })}
          </div>
        )}
      </AppMAIN>
      <AppFooter2>
        <Navigation />
      </AppFooter2>
    </>
  );
};

export default Pitches;
