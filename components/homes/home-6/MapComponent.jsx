// components/MapComponent.jsx
"use client";

import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

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

export default function MapComponent() {
  const [activeLocation, setActiveLocation] = useState(null);

  return (
    <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={false} style={{ height: "600px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      {locations.map((loc) => (
        <Marker key={loc.id} position={loc.position} eventHandlers={{ click: () => setActiveLocation(loc) }}>
          <Popup>
            <strong>{loc.name}</strong><br />
            <span className={`text-${loc.type === "current" ? "primary" : "warning"}`}>
              {loc.type === "current" ? "Active Location" : "Coming Soon"}
            </span>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
