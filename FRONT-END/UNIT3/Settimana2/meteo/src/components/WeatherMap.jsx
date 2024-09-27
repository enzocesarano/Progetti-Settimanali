import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from 'leaflet';

const UpdateMap = ({ lat, lon }) => {
  const map = useMap();

  useEffect(() => {
    if (lat && lon) {
      map.setView([lat, lon], map.getZoom());
    }
  }, [lat, lon, map]);

  return null;
};


const WeatherMap = ({ lat, lon }) => {

  const divIcon = L.divIcon({
    html: `<i class="bi bi-geo-alt-fill text-danger fs-1"></i>`,
    iconAnchor: [15, 72],
    popupAnchor: [0, 0],
  });

  return (
    <MapContainer
      center={[lat, lon]}
      zoom={10}
      style={{ height: '100%', width: '100%', borderRadius: '8px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
        <Marker position={[lat, lon]} icon={divIcon}>
          <Popup>
            Location: {lat}, {lon}
          </Popup>
        </Marker>
      <UpdateMap lat={lat} lon={lon} />
    </MapContainer>
  );
};

export default WeatherMap