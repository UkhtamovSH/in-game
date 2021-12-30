import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { GetAuthInstance } from "../../helpers/httpClient";
import { GalleryPhotos, GamerPhotos } from "../../styles/Photos.style";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const getData = () => {
    GetAuthInstance()
      .get("/api/v1/game-end/?")
      .then((res) => {
        setPhotos(res.data.results);
      })
      .catch((err) => {});
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <GamerPhotos>
      {photos.map((item, index) => (
        <GalleryPhotos key={index}>
          {item.Gallery.map((value, index) => (
            <img src={value} key={index} alt="" />
          ))}
        </GalleryPhotos>
      ))}
    </GamerPhotos>
  );
};

export default Photos;
