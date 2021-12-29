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
          <Placemark
            onClick={() => alert("Hello!!!")}
            geometry={[41.329758, 69.259521]}
            properties={{
              iconContent:
                '<img src="http://img-fotki.yandex.ru/get/6114/82599242.2d6/0_88b97_ec425cf5_M" width="20px", border-radius="50px"/>',
            }}
            options={{
              preset: "islands##yellowStretchyIcon",
              iconColor: '#000000',
              // Disabling the close balloon button.
              balloonCloseButton: false,
              // The balloon will open and close when the placemark icon is clicked.
              hideIconOnBalloonOpen: false,
            }}
          />
          {/* <Placemark geometry={[41.329758, 69.249581]} />
          <Placemark geometry={[41.319758, 69.239581]} />
          <Placemark geometry={[41.299758, 69.289581]} />
          <Placemark geometry={[41.329758, 69.249581]} />
          <Placemark geometry={[41.319758, 69.239581]} />
          <Placemark geometry={[41.299758, 69.289581]} /> */}
        </Map>
      </YMaps>
    </GoogleMapDiv>
  );
};

export default PlayerMap;
