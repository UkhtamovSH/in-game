import _ from "lodash";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import Filter from "../assets/svg/Filter.svg";
import { GetAuthInstance } from "../helpers/httpClient";
import {
  AppFooter2,
  AppHeader,
  AppHeaderFlex,
  AppMAIN,
} from "../styles/ContainerFluid.styled";
import Navigation from "./sections/Navigation";

const RatingPlayers = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [nextUrl, setNextUrl] = useState("");
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    if (page === 1) {
      setLoading(true);
    }
    GetAuthInstance()
      .get(`api/v1/user-filter-list?per_page=8&page=${page}`)
      .then((res) => {
        setData([...data, ...res.data.results]);
        setNextUrl(res.data.next);
        setPage(page + 1);
        setLoading(false);
        console.log(res);
        if (res.data.next) {
          setHasMore(true);
        } else {
          setHasMore(false);
        }
      })
      .catch((err) => {
        setHasMore(false);
      });
  };
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
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <InfiniteScroll
            dataLength={data.length}
            next={getData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>You have seen it all</b>
              </p>
            }
            className="infiniteScroll"
          >
            {data.map((item, index) => (
              <div className="worldPlayers" key={index}>
                <p className="numberLine">{index + 1}</p>
                <div className="avatar">
                  <div className="avatarFiltrImg">
                    <img src={_.get(item, "avatar")} alt="" />

                    <span>{_.get(item, "position")}</span>
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
                    <p>{_.get(item, "victory")}%</p>
                    <span>Побед</span>
                  </div>
                  <div className="markPersant">
                    <p>{_.get(item, "ball")}</p>
                    <span>Очков</span>
                  </div>
                </div>
              </div>
            ))}
          </InfiniteScroll>
        )}
      </AppMAIN>
      <AppFooter2>
        <Navigation />
      </AppFooter2>
    </>
  );
};

export default RatingPlayers;
