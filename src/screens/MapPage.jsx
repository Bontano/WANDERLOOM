import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
function Map() {
  const position = [51.505, -0.09]; // Latitude et longitude par défaut

  return (
    <MapContainer
      center={position}
      zoom={17}
      style={{ height: "2000px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
