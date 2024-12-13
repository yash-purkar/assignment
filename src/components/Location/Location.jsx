import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { ActionButton } from "../ActionButton/ActionButton";

// Set container style for the map
const containerStyle = {
  width: "100%",
  height: "14.5rem",
  borderRadius: "0.625rem",
};

// Default center position
const center = {
  lat: 18.922, // Latitude (e.g., San Francisco)
  lng: 72.8347, // Longitude
};

export const Location = () => {
  return (
  <div className="flex flex-col gap-05 align-start">
      <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} />
    </LoadScript>
    <ActionButton title="Get Direction"/>
  </div>
  );
};
