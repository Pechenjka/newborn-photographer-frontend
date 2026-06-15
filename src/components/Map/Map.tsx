import React from "react";
import Styles from "./style.module.scss";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

export const Map: React.FC = () => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    throw new Error("Google Maps API key is missing");
  }

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 35.2271, // Charlotte latitude
    lng: -80.8431, // Charlotte longitude
  };

  const bounds = {
    north: 35.47,
    south: 34.98,
    west: -81.05,
    east: -80.55,
  };

  const mapOptions = {
    restriction: {
      latLngBounds: bounds,
      strictBounds: false,
    },
    styles: [
      {
        featureType: "all",
        elementType: "labels",
        stylers: [{ visibility: "on" }],
      },
      {
        featureType: "poi.business",
        elementType: "all",
        stylers: [{ visibility: "on" }],
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: [{ visibility: "on" }],
      },
      {
        featureType: "landscape.man_made",
        elementType: "geometry",
        stylers: [{ visibility: "on" }],
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [{ visibility: "on" }],
      },
    ],
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: true,
    zoomControl: true,
    language: "en",
  };

  return (
    <div className={Styles.container}>
      <h3 className={Styles.container__mapTitle}>Location</h3>
      <LoadScript
        googleMapsApiKey={apiKey}
        language="en"
        region="US"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={11}
          options={mapOptions}
        />
      </LoadScript>
    </div>
  );
};
