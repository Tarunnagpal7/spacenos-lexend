"use client";

import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Setup default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png"
});

const locations = [
  { id: 1, name: "United States (New York)", type: "current", position: [40.7128, -74.0060] },
  { id: 2, name: "India (Bengaluru)", type: "current", position: [12.9716, 77.5946] },
  { id: 3, name: "Australia (Sydney)", type: "current", position: [-33.8688, 151.2093] },
  { id: 4, name: "UAE (Dubai)", type: "future", position: [25.2048, 55.2708] },
  { id: 5, name: "Germany (Berlin)", type: "future", position: [52.5200, 13.4050] },
  { id: 6, name: "Sweden (Stockholm)", type: "future", position: [59.3293, 18.0686] }
];

function ResetMapView() {
  const map = useMap();
  useState(() => {
    map.setView([20, 0], 2);
  }, [map]);
  return null;
}

export default function MapComponent() {
  const [activeLocation, setActiveLocation] = useState(null);

  const tileUrl = "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";
  const tileAttribution = '&copy; <a href="https://carto.com/">CARTO</a> & OpenStreetMap contributors';

  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      scrollWheelZoom={false}
      style={{
        height: "600px",
        width: "100%",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 0 20px rgba(0,0,0,0.15)"
      }}
    >
      <TileLayer url={tileUrl} attribution={tileAttribution} />

      {locations.map((loc) => (
        <Marker
          key={loc.id}
          position={loc.position}
          eventHandlers={{ click: () => setActiveLocation(loc) }}
        >
          <Popup>
            <div className="text-sm leading-5">
              <strong>{loc.name}</strong>
              <br />
              <span className={`font-semibold ${loc.type === "current" ? "text-green-600" : "text-orange-500"}`}>
                {loc.type === "current" ? "Active Location" : "Coming Soon"}
              </span>
            </div>
          </Popup>
        </Marker>
      ))}

      <ResetMapView />
    </MapContainer>
  );
}
