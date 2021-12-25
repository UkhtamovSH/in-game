import { Link, NavLink } from "react-router-dom";
import {
  AppFooter2,
  AppHeader,
  AppHeaderFlex,
  AppMAIN,
  AppMainWrapp,
} from "../styles/ContainerFluid.styled";
import priceStar from "../assets/Img/Vector.png";
import Filter from "../assets/svg/Filter.svg";
import Navigation from "./sections/Navigation";
import { useEffect, useState } from "react";
import { GetAuthInstance } from "../helpers/httpClient";
import { Polya, AppMainContain } from "../styles/Pitches.style";

const Pitches = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    GetAuthInstance()
      .get("api/v1/pitch/")
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => {});
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
          <div className="">
            <Link to="/" className="">
              <img src={Filter} alt="" />
            </Link>
          </div>
        </AppHeaderFlex>
      </AppHeader>
      <AppMainWrapp>
        {data.map((item, index) => (
          <AppMAIN  key={index} 
          style={{marginTop:"0px",marginBottom:"0px"}}
          >
            <AppMainContain>
              <Polya style={{ backgroundImage: `url(${item.Image})` }}>
                <Link to={"/pitches/" + item.id}>
                  <div className="poolyaImg">
                    {/* <img src={item.Image} alt="" /> */}
                  </div>
                  <div className="stadion">
                    <div className="leftFree">
                      {<p>{item.status}</p> ? <p>Занято</p> : <p>Свободно</p>}
                    </div>
                    <div className="rightFree">
                      <img src={priceStar} alt="" />
                      <p>{item.review_avg}</p>
                    </div>
                  </div>
                  <div className="address">
                    <h4>{item.name}</h4>
                    <p>{item.region.name}, ориентир: кафе Бахор</p>
                  </div>
                </Link>
              </Polya>
            </AppMainContain>
          </AppMAIN>
        ))}
      </AppMainWrapp>

      <AppFooter2>
        <Navigation />
      </AppFooter2>
    </>
  );
};

export default Pitches;
