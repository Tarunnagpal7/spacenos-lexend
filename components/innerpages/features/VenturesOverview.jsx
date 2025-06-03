"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ventures } from '@/data/ventures';

const VentureOverview = () => {
  const ventureRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-enter');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    ventureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      ventureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="py-5">
      <div className="section-outer panel pb-6">
        <div className="container py-5">
          <h1 
            className="h3 lg:h2 xl:h1 m-0 text-center mb-4 animate-title"
          >
            Our Ventures
          </h1>
        
          <div className="row g-4">
            {ventures.map((venture, index) => (
              <div 
                key={venture.id} 
                className="col-12 dark:text-white"
                ref={(el) => (ventureRefs.current[index] = el)}
                style={{
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`
                }}
              >
                <div className="card shadow-lg h-100 overflow-hidden dark:bg-gray-800 dark:text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="row g-0 h-100">
                    <div className="col-md-6 p-4 p-lg-5 d-flex flex-column">
                      <div className="mb-4">
                        <h3 className="text-black fw-bold fs-1 dark:text-white">{venture.name}</h3>
                        <p className="lead text-muted fs-3">{venture.tagline}</p>
                      </div>
                      
                      <p className="mb-4">{venture.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="fw-semibold mb-3">Key Features:</h4>
                        <ul className="list-unstyled">
                          {venture.features.map((feature, idx) => (
                            <li key={idx} className="mb-2 d-flex align-items-start">
                              <span className="badge bg-success me-2 mt-1">
                                <i className="bi bi-check-lg"></i>
                              </span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-auto">
                        <div className="card bg-light mb-4 border-0 dark:bg-gray-800">
                          <div className="card-body p-3">
                            <blockquote className="blockquote mb-0">
                              <p className="font-italic">"{venture.testimonials[0].quote}"</p>
                              <footer className="blockquote-footer text-end">
                                {venture.testimonials[0].author}
                              </footer>
                            </blockquote>
                          </div>
                        </div>
                        
                        <div className="d-grid gap-2 d-md-block">
                          <Link 
                            href={venture.ctaLink} 
                            className="btn btn-primary btn-lg px-4 w-100 w-md-auto"
                          >
                            {venture.cta} <i className="bi bi-arrow-right ms-2"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-6 bg-opacity-10 d-flex align-items-center justify-content-center p-4">
                      <div 
                        className="w-100" 
                        style={{ 
                          height: '300px', 
                          position: 'relative',
                          minHeight: '250px'
                        }}
                      >
                        <Image
                          src={venture.image}
                          alt={venture.name}
                          fill
                          style={{ objectFit: 'contain' }}
                          className="img-fluid"
                          priority={index < 2}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .animate-title {
          opacity: 0;
          transform: translateY(-20px);
          animation: fadeInDown 0.8s ease-out forwards;
        }

        @keyframes fadeInDown {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-enter {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default VentureOverview;