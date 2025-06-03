"use client";
import React, { useState, useEffect } from 'react';
import { timelineData } from '@/data/timeline';

export default function Timeline() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animationPhase, setAnimationPhase] = useState('entering');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase('exiting');
      
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % timelineData.length);
        setAnimationPhase('entering');
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    if (index !== currentSlide) {
      setAnimationPhase('exiting');
      setTimeout(() => {
        setCurrentSlide(index);
        setAnimationPhase('entering');
      }, 300);
    }
  };

  const currentItem = timelineData[currentSlide];

  return (
    <div
      id="about-timeline"
      className="about-timeline section panel rounded sm:rounded-2 m-4 overflow-hidden bg-secondary dark:bg-gray-800"
    >
      <style jsx>{`
        .timeline-container {
          position: relative;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .timeline-slide {
          position: relative;
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-origin: center bottom;
        }

        .timeline-slide.entering {
          animation: slideInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .timeline-slide.exiting {
          animation: slideOutDown 0.3s cubic-bezier(0.55, 0.06, 0.68, 0.19) forwards;
        }

        @keyframes slideInUp {
          0% {
            opacity: 0;
            transform: translateY(60px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slideOutDown {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-30px) scale(0.98);
          }
        }

        .image-wrap {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          width: 100%;
          max-width: 300px;
          height: 300px;
          margin: 0 auto;
        }

        .image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform-origin: bottom;
          transition: transform 0.4s ease;
        }

        .timeline-slide.entering .image {
          animation: imageFloat 0.8s ease-out 0.2s both;
        }

        @keyframes imageFloat {
          0% {
            transform: translateY(20px) scale(0.9);
            opacity: 0;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        .content {
          animation-delay: 0.3s;
          max-width: 600px;
          margin: 0 auto;
        }

        .timeline-slide.entering .content {
          animation: contentFadeIn 0.6s ease-out 0.4s both;
        }

        @keyframes contentFadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .timeline-dots {
          position: relative;
          text-align: center;
          margin-top: 2rem;
          padding-bottom: 1rem;
        }

        .dot {
          display: inline-block;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          margin: 0 6px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .dot.active {
          background: #ffffff;
          transform: scale(1.2);
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
        }

        .dot:hover {
          background: rgba(255, 255, 255, 0.6);
          transform: scale(1.1);
        }

        .title-animation {
          animation: titlePulse 0.8s ease-out;
        }

        @keyframes titlePulse {
          0% {
            transform: scale(0.95);
            opacity: 0;
          }
          50% {
            transform: scale(1.02);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .progress-bar {
          position: absolute;
          bottom: -4px;
          left: 0;
          height: 2px;
          background: rgba(255, 255, 255, 0.8);
          animation: progressBar 4s linear infinite;
        }

        @keyframes progressBar {
          0% { width: 0%; }
          100% { width: 100%; }
        }

        /* Improved responsive design */
        .timeline-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          padding: 1rem;
        }

        @media (min-width: 768px) {
          .timeline-box {
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 3rem;
          }
          
          .image-wrap {
            flex: 0 0 300px;
            height: 300px;
          }
          
          .content {
            text-align: left;
            flex: 1;
            padding: 0 1rem;
          }
        }

        @media (max-width: 767px) {
          .image-wrap {
            width: 250px;
            height: 250px;
          }
          
          .content {
            text-align: center;
            padding: 0 1rem;
          }
        }

        @media (max-width: 480px) {
          .image-wrap {
            width: 200px;
            height: 200px;
          }
          
          .timeline-dots {
            margin-top: 1.5rem;
          }
        }
      `}</style>

      <div className="section-outer panel p-6">
        <div className="container max-w-7xl">
          <div className="section-inner panel">
            <div className="panel justify-center items-center gap-4">
              <h2
                className={`h4 sm:h3 lg:h2 m-0 text-center ${isVisible ? 'title-animation' : ''}`}
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
              >
                Our Journey
              </h2>
              
              <div className="timeline-container panel p-4">
                <div className={`timeline-slide ${animationPhase}`}>
                  <div className="timeline-box">
                    <div className="image-wrap panel overflow-hidden">
                      <img
                        className="image w-100 origin-bottom"
                        src={currentItem.src}
                        width={400}
                        height={400}
                        alt={currentItem.alt}
                      />
                    </div>
                    <div className="content panel vstack">
                      <h3 className="title h5 sm:h3 dark:text-white">
                        {currentItem.year}
                      </h3>
                      <p className="desc fs-6 xl:fs-5 opacity-70 dark:text-white">
                        {currentItem.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className="timeline-dots">
                  <div className="progress-bar"></div>
                  {timelineData.map((_, index) => (
                    <span
                      key={index}
                      className={`dot ${index === currentSlide ? 'active' : ''}`}
                      onClick={() => goToSlide(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}