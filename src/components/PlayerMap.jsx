import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { GoogleMapDiv } from "../styles/PlayerMap.styled";

const PlayerMap = () => {
  return (
    <GoogleMapDiv>
      <YMaps className="Ymaps">
        <Map
          defaultState={{
            center: [41.329758, 69.259521],
            zoom: 13,
          }}
          style={{ width: "100% !important", height: "100vh" }}
        >
          <Placemark geometry={[41.329758, 69.259521]} />
        </Map>
      </YMaps>
    </GoogleMapDiv>
  );
};

export default PlayerMap;
