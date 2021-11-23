/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { PositionMaps, styledMap } from "../../styles/MapGoogle";
import { useConsentCookie } from "../../context/context";

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

export default function MapGoogle({ dataIleDeFrance }) {
  const mapStyles = {
    width: "800px",
    height: "600px",
  };
  const { setConsentCookie } = useConsentCookie();
  const { setDisplay } = useConsentCookie();
  const activeComposantAvis = (item) => {
    setConsentCookie(item), setDisplay(true);
  };
  return (
    <PositionMaps>
      <LoadScript googleMapsApiKey="AIzaSyC0iQDHGXaDAQ_Os9Boc6vxGrPZHcYQHzo">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={11}
          center={{ lat: 48.866667, lng: 2.333333 }}
          options={options}
        >
          {dataIleDeFrance.dataAll &&
            dataIleDeFrance.dataAll.map((item, index) => {
              const lagLng = {
                lat: item.centre.coordinates[1],
                lng: item.centre.coordinates[0],
              };
              return (
                item.population >= 20000 && (
                  <Marker
                    index={index}
                    position={lagLng}
                    onClick={(e) => activeComposantAvis(item)}
                  />
                )
              );
            })}
        </GoogleMap>
      </LoadScript>
    </PositionMaps>
  );
}
