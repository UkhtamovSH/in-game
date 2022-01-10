import { get, map } from "lodash";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { GetAuthInstance } from "../../helpers/httpClient";
import { GalleryPhotos, GamerPhotos } from "../../styles/Photos.style";
import ArrowRight from "../../assets/svg/Arrow - Right.svg";
import {
  AppHeader,
  AppHeaderFlex,
  AppMAIN,
} from "../../styles/ContainerFluid.styled";
import styled from "styled-components";

const SPitchesContainer = styled.div`
.SPitchesDiv{
    position: relative;
    z-index: 1;
    width: 100%;
    height: 194px;
    border-radius: 16px;
    background-color: #484343;
    overflow: hidden;
    margin: 10px auto;
  }
}
`;

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [preLoader, setPreLoader] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const getData = () => {
    setPreLoader(true);
    GetAuthInstance()
      .get(`/api/v1/game-end/?game=${params.id}`)
      .then((res) => {
        setPhotos(res.data.results);
      })
      .catch((err) => {})
      .finally(() => setPreLoader(false));
  };

  useEffect(() => {
    getData();
  }, [params.id]);

  return (
    <>
      <AppHeader>
        <AppHeaderFlex>
          <div className="">
            <span onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>
              <img src={ArrowRight} alt="" />
            </span>
          </div>
          <div>
            {photos.map((item, index) => (
              <div key={index}>
                {params.id == item.id ? (
                  <>
                    {get(item.GameClub[0], "football_club.name", 0)}{" "}
                    {get(item.GameClub[0], "goal")}:
                    {get(item.GameClub[1], "goal")}{" "}
                    {get(item.GameClub[1], "football_club.name", 1)}
                  </>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
          <div />
        </AppHeaderFlex>
      </AppHeader>
      <AppMAIN>
        {preLoader ? (
          <SPitchesContainer>
            {map([1, 2, 3, 4, 5, 6, 7, 8], (_, index) => (
              <div key={index} className="SPitchesDiv beforeAnimation33" />
            ))}
          </SPitchesContainer>
        ) : (
          <GamerPhotos>
            {photos.map((item, index) => (
              <GalleryPhotos key={index}>
                {item.Gallery.map((value, index) => (
                  <img src={value} key={index} alt="" />
                ))}
              </GalleryPhotos>
            ))}
          </GamerPhotos>
        )}
      </AppMAIN>
    </>
  );
};

export default Photos;
