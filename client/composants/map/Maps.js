/* eslint-disable react/no-array-index-key */
import React from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  MarkerClusterer,
  InfoWindow,
} from "@react-google-maps/api";
import { PositionMaps, styledMap } from "../../styles/MapGoogle";
import { useDataCity } from "../../context/context";
import Avis from "../avis/Avis";
const options = {
  styles: styledMap,
  strokeColor: "#c22420",
  strokeOpacity: 1.2,
  strokeWeight: 5,
  fillColor: "#c22420",
  fillOpacity: 0.5,
  clickable: true,
  editable: false,
  visible: true,
  radius: 300,
  zIndex: 1,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  fullscreenControl: false,
};

export default function MapGoogle({ dataIleDeFrance, executeScroll }) {
  const { dinamiqueMarker, selectCityInfoWindows, SetselectCityInfoWindows } =
    useDataCity();

  const mapStyles = {
    width: "auto",
    height: "800px",
  };

  // const activeComposantAvis = (item) => {
  //   setCity(item);
  //   setDisplay(true);
  //   executeScroll();
  // };

  return (
    <PositionMaps>
      <LoadScript googleMapsApiKey="AIzaSyC0iQDHGXaDAQ_Os9Boc6vxGrPZHcYQHzo">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={dinamiqueMarker ? 15 : 11}
          center={
            (dinamiqueMarker && {
              lat: dinamiqueMarker?.lat,
              lng: dinamiqueMarker?.long,
            }) || {
              lat: 48.866667,
              lng: 2.333333,
            }
          }
          options={options}
        >
          <MarkerClusterer>
            {(clusterer) =>
              dataIleDeFrance.dataAll &&
              dataIleDeFrance.dataAll.map((item, index) => {
                const lagLng = {
                  lat: item.centre.coordinates[1],
                  lng: item.centre.coordinates[0],
                };
                return (
                  <Marker
                    index={index}
                    position={lagLng}
                    clusterer={clusterer}
                    onClick={() => SetselectCityInfoWindows(item)}
                  />
                );
              })
            }
          </MarkerClusterer>
          {selectCityInfoWindows && (
            <InfoWindow
              position={{
                lat: selectCityInfoWindows.centre.coordinates[1],
                lng: selectCityInfoWindows.centre.coordinates[0],
              }}
            >
              <Avis />
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </PositionMaps>
  );
}
