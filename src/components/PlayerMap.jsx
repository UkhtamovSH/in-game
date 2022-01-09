import { map } from "lodash";
import React, { useEffect, useState } from "react";
import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps";
import { GetAuthInstance } from "../helpers/httpClient";
import { GoogleMapDiv } from "../styles/PlayerMap.styled";
import DefaultImg from "../assets/Img/default.png";

const PlayerMap = () => {
  const [latLonPlayers, setLatLonPlayers] = useState([]);

  const getLanLon = () => {
    GetAuthInstance()
      .get("/api/v1/user-filter-list-mir/?per_page=10000")
      .then((res) => {
        if (res.status === 200) {
          setLatLonPlayers([...latLonPlayers, ...res.data.results]);
        }
      })
      .catch((err) => {
        setLatLonPlayers([]);
      });
  };

  useEffect(() => {
    getLanLon();
  }, []);

  return (
    <GoogleMapDiv>
      <YMaps className="Ymaps">
        <Map
          defaultState={{
            center: [41.329758, 69.259521],
            zoom: 9,
          }}
          style={{ width: "100% !important", height: "100vh" }}
        >
          {latLonPlayers.length > 0
            ? map(latLonPlayers, (latLonPlayer, index) => {
                const { latitude, longitude, avatar } = latLonPlayer;
                return (
                  <Placemark
                    key={index}
                    geometry={[latitude, longitude]}
                    options={{
                      iconLayout: "default#image",
                      iconImageHref: avatar ? avatar : DefaultImg,
                      iconImageSize: [30, 30],
                      iconImageOffset: [-15, -15],
                      iconImageRadius: [15, 15],
                      draggable: false,
                    }}
                  />
                );
              })
            : null}
          <ZoomControl />
          {/* <Placemark geometry={[41.299758, 69.289581]} />  */}
        </Map>
      </YMaps>
    </GoogleMapDiv>
  );
};

export default PlayerMap;
