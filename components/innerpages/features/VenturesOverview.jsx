// components/VentureOverview.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ventures } from '@/data/ventures';

const VentureOverview = () => {
  
  return (
    <section className="py-5 ">
           <div
                    className="section-outer panel pb-6"
                    data-anime="onscroll: .how-it-works; onscroll-trigger: 1; translateY: [80, 0]; scale: [0.8, 1]; opacity: [0, 1]; easing: linear;"
                >
      <div className="container py-5">
         <h1 className="h3 lg:h2 xl:h1 m-0  text-center mb-4 ">
             Our Ventures
          </h1>
        
        <div className="row g-4">
          {ventures.map((venture) => (
            <div key={venture.id} className="col-12  dark:bg-gray-800 dark:text-white">
              <div className="card shadow-lg h-100 overflow-hidden  dark:bg-gray-800 dark:text-white">
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
                    
                    <div className="mt-auto ">
                      <div className="card bg-light mb-4 border-0  dark:bg-gray-800">
                        <div className="card-body p-3">
                          <blockquote className="blockquote mb-0">
                            <p className="font-italic">"{venture.testimonials[0].quote}"</p>
                            <footer className="blockquote-footer text-end">
                              {venture.testimonials[0].author}
                            </footer>
                          </blockquote>
                        </div>
                      </div>
                      
                      <Link href={venture.ctaLink} className="btn btn-primary btn-lg px-4">
                        {venture.cta} <i className="bi bi-arrow-right ms-2"></i>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="col-md-6 bg-secondary bg-opacity-10 d-flex align-items-center justify-content-center p-4">
                    <div style={{ width: '100%', height: '300px', position: 'relative' }}>
                      <Image
                        src={venture.image}
                        alt={venture.name}
                        layout="fill"
                        objectFit="contain"
                        className="img-fluid"
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
    </section>
  );
};

export default VentureOverview;