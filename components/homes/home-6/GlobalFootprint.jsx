"use client";
import React, { useState } from 'react';
import { MapPin, Globe } from 'lucide-react';
import Image from 'next/image';

export default function GlobalFootprint() {
  const [activeLocation, setActiveLocation] = useState(null);

  const locations = [
    // Current Presence
    { id: 1, name: 'United States', type: 'current', x: 15, y: 35 },
    { id: 2, name: 'India', type: 'current', x: 70, y: 47 },
    { id: 3, name: 'Australia', type: 'current', x: 85, y: 68 },
    
    // Future Presence
    { id: 4, name: 'Dubai', type: 'future', x: 60, y: 45 },
    { id: 5, name: 'Germany', type: 'future', x: 50, y: 35 },
    { id: 6, name: 'Sweden', type: 'future', x: 50, y: 22 }
  ];

  return (
    <div className="container-fluid p-2 xl:p-6">
      <div className="row justify-content-center">
        <div className="col-12 col-xl-10">
          <div className="py-4 py-md-5">
            
            {/* Header Section */}
            <div className="text-center mb-4 mb-md-5">
              <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle p-3 p-md-4 mb-3 mb-md-4">
                <Globe className="text-primary" style={{ width: '2rem', height: '2rem' }} />
              </div>
              <h1 className="display-4 dark:text-white display-md-3 fw-bold text-dark mb-3 mb-md-4">
                Our Global Footprint
              </h1>
              <p className="lead dark:text-white text-muted mb-0 px-md-5">
                Expanding worldwide to serve you better with strategic locations across continents
              </p>
            </div>

            {/* Interactive Map */}
            <div className="row justify-content-center p-1">
              <div className="card border-0 shadow-lg overflow-hidden">
                <div className="card-body p-0">
                  <div className="position-relative map-container">
                    
                    {/* World Map Background */}
                    <div className="position-relative w-100 h-100 bg-primary bg-opacity-5 rounded-top">
                      <Image
                        className="w-100 h-100 map-image"
                        alt="Global presence map"
                        src="/assets/images/features/image.png"
                        width={1200}
                        height={800}
                        style={{ objectFit: 'contain', objectPosition: 'center' }}
                      />
                    </div>

                    {/* Location Markers */}
                    {locations.map((location) => (
                      <div
                        key={location.id}
                        className="position-absolute marker-container"
                        style={{
                          left: `${location.x}%`,
                          top: `${location.y}%`,
                          transform: 'translate(-50%, -50%)',
                          zIndex: 10
                        }}
                      >
                        {/* Marker Button */}
                        <button
                          className={`btn btn-sm rounded-circle p-0 border-0 shadow-sm marker-btn ${
                            location.type === 'current' 
                              ? 'btn-primary marker-current' 
                              : 'btn-warning marker-future'
                          }`}
                          onClick={() => setActiveLocation(location)}
                        >
                          <MapPin className="text-white marker-icon" />
                          
                          {/* Ripple effect for current locations */}
                          {location.type === 'current' && (
                            <div className="position-absolute ripple-ring"></div>
                          )}
                        </button>

                        {/* Hover Tooltip */}
                        <div className="position-absolute tooltip-hover">
                          <div className="bg-dark text-white px-3 py-2 rounded shadow-sm">
                            <div className="fw-medium small">{location.name}</div>
                            <div className="small opacity-75">
                              {location.type === 'current' ? 'Active' : 'Coming Soon'}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .map-container {
          aspect-ratio: 3/2;
          min-height: 300px;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 0.5rem;
          overflow: visible;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .map-image {
          transition: all 0.3s ease;
          object-fit: contain !important;
        }

        .marker-btn {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
        }

        .marker-icon {
          width: 20px;
          height: 20px;
        }

        .marker-btn:hover {
          transform: scale(1.15) !important;
          box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
        }

        .marker-current {
          animation: pulse-marker 2s infinite;
        }

        .ripple-ring {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          border: 2px solid rgba(13, 110, 253, 0.4);
          border-radius: 50%;
          animation: ripple 2s infinite;
          pointer-events: none;
        }

        .tooltip-hover {
          bottom: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%);
          opacity: 0;
          transition: all 0.3s ease;
          pointer-events: none;
          white-space: nowrap;
          z-index: 15;
        }

        .marker-container:hover .tooltip-hover {
          opacity: 1;
          transform: translateX(-50%) translateY(-4px);
        }

        .tooltip-hover::before {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 6px solid rgba(33, 37, 41, 0.9);
        }

        @keyframes pulse-marker {
          0%, 100% {
            box-shadow: 0 4px 12px rgba(13, 110, 253, 0.3);
          }
          50% {
            box-shadow: 0 4px 12px rgba(13, 110, 253, 0.6);
          }
        }

        @keyframes ripple {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 767px) {
          .map-container {
            aspect-ratio: 1/1;
            min-height: 250px;
            overflow: auto;
          }
          
          .marker-btn {
            width: 24px !important;
            height: 24px !important;
          }

          .marker-icon {
            width: 12px !important;
            height: 12px !important;
          }

          .ripple-ring {
            width: 36px;
            height: 36px;
          }

          .tooltip-hover {
            font-size: 0.7rem;
            white-space: normal;
            max-width: 100px;
            text-align: center;
            word-wrap: break-word;
            bottom: calc(100% + 8px);
          }

          /* Adjust tooltip positions for edge markers */
          .marker-container:nth-child(1) .tooltip-hover,
          .marker-container:nth-child(4) .tooltip-hover {
            left: 10px;
            transform: translateX(0);
          }

          .marker-container:nth-child(3) .tooltip-hover,
          .marker-container:nth-child(6) .tooltip-hover {
            left: auto;
            right: 10px;
            transform: translateX(0);
          }

          .marker-container:hover .tooltip-hover {
            transform: translateY(-4px);
          }
        }

        /* Tablet Responsive */
        @media (min-width: 768px) and (max-width: 991px) {
          .marker-btn {
            width: 32px !important;
            height: 32px !important;
          }

          .marker-icon {
            width: 16px !important;
            height: 16px !important;
          }
        }

        /* Small Desktop */
        @media (min-width: 992px) and (max-width: 1199px) {
          .marker-btn {
            width: 36px !important;
            height: 36px !important;
          }

          .marker-icon {
            width: 18px !important;
            height: 18px !important;
          }
        }
      `}</style>
    </div>
  );
}