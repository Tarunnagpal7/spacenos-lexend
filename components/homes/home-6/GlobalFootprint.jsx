"use client";
import React, { useState } from 'react';
import { MapPin, Globe } from 'lucide-react';
import Image from 'next/image';

export default function GlobalFootprint() {
  const [activeLocation, setActiveLocation] = useState(null);
  const [hoveredLocation, setHoveredLocation] = useState(null);

  const locations = [
    { id: 1, name: 'United States', type: 'current', x: 12, y: 40 },
    { id: 2, name: 'India', type: 'current', x: 69, y: 47 },
    { id: 3, name: 'Australia', type: 'current', x: 84, y: 70 },
    { id: 4, name: 'Dubai', type: 'future', x: 60, y: 44 },
    { id: 5, name: 'Germany', type: 'future', x: 52, y: 30 },
    { id: 6, name: 'Sweden', type: 'future', x: 50, y: 20 }
  ];

  return (
    <div className="container p-2 mt-6">
      <div className="text-center mb-5">
      
        <h1 className="h3 lg:h2 xl:h1 m-0  text-center mb-4 ">
            Our Global Footprint
          </h1>
         <p className="fs-6 xl:fs-5 text-black dark:text-white text-opacity-70">
            Expanding worldwide to serve you better with strategic locations across continents.
            </p>
      </div>

      <div
        className="mx-auto position-relative rounded-3xl overflow-hidden border border-gray-200 shadow-sm"
        style={{ maxWidth: '1000px', width: '100%', aspectRatio: '3 / 2' }}
      >
        <Image
          src="/assets/images/features/image.png"
          alt="World Map"
          fill
          className="rounded-2xl"
          style={{ objectFit: 'contain' }}
        />

        {locations.map((loc) => (
          <div
            key={loc.id}
            className="position-absolute text-center"
            style={{
              left: `${loc.x}%`,
              top: `${loc.y}%`,
              transform: 'translate(-50%, -50%)',
              zIndex: 10
            }}
            onMouseEnter={() => setHoveredLocation(loc)}
            onMouseLeave={() => setHoveredLocation(null)}
          >
            <button
              type="button"
              className={`map-marker-btn btn btn-sm rounded-full d-flex align-items-center justify-content-center shadow border-0 ${
                loc.type === 'current' ? 'btn-primary' : 'btn-warning'
              }`}
              style={{ 
                width: 'clamp(24px, 3vw, 36px)', 
                height: 'clamp(24px, 3vw, 36px)' 
              }}
              onClick={() => setActiveLocation(loc)}
            >
              <MapPin size="clamp(12px, 1.5vw, 16px)" className="text-white" />
            </button>
            
            {(hoveredLocation?.id === loc.id || activeLocation?.id === loc.id) && (
              <div className={`tooltip-info bg-white text-black p-2 rounded-lg shadow-sm ${loc.type === 'current' ? 'border-primary' : 'border-warning'} border-2`}>
                <div className="fw-bold">{loc.name}</div>
                <div className={`small ${loc.type === 'current' ? 'text-primary' : 'text-warning'}`}>
                  {loc.type === 'current' ? 'Active Location' : 'Coming Soon'}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Hover effect styles */}
      <style jsx>{`
        .map-marker-btn {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .map-marker-btn:hover {
          transform: scale(1.2);
          box-shadow: 0 0 10px rgba(0, 123, 255, 0.5); /* Blue glow */
        }
        
        .tooltip-info {
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-bottom: 8px;
          min-width: 120px;
          text-align: center;
          white-space: nowrap;
          animation: fadeIn 0.2s ease;
          font-size: clamp(12px, 1.5vw, 14px);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(5px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </div>
  );
}