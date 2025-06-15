import React from 'react';
import Link from 'next/link';
import { Mail, Phone, Clock, MessageSquare } from 'lucide-react';

const ContactPRTeam = () => {
  return (
    <section 
      id="contact_pr"
      className="py-5 bg-light"
    //   style={{ backgroundColor: '#f8f9fa' }}
      data-anime="onview:-100; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="text-center mb-5"
              data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h2 fw-bold  mb-3">
                Contact PR Team
              </h2>
              <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
                For interview requests, media inquiries, and speaking engagements
              </p>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="row g-4 mb-4">
                  {/* Email Card */}
                  <div className="col-md-4">
                    <div
                      className="card h-100 border-0 shadow-sm"
                      style={{ transition: 'all 0.3s ease' }}
                      data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 300;"
                    >
                      <div className="card-body text-center p-4">
                        <div 
                          className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                          style={{ 
                            width: '64px', 
                            height: '64px', 
                            backgroundColor: '#e7f3ff' 
                          }}
                        >
                          <Mail className="text-primary" size={24} />
                        </div>
                        <h5 className="card-title text-dark mb-2">Email</h5>
                        <a 
                          href="mailto:pr@spacenos.com" 
                          className="text-primary text-decoration-none"
                        >
                          pr@spacenos.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Phone Card */}
                  <div className="col-md-4">
                    <div
                      className="card h-100 border-0 shadow-sm"
                      style={{ transition: 'all 0.3s ease' }}
                      data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 400;"
                    >
                      <div className="card-body text-center p-4">
                        <div 
                          className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                          style={{ 
                            width: '64px', 
                            height: '64px', 
                            backgroundColor: '#e8f5e8' 
                          }}
                        >
                          <Phone className="text-success" size={24} />
                        </div>
                        <h5 className="card-title text-dark mb-2">Phone</h5>
                        <p className="text-black mb-0">
                          +1-555-123-4567 (Global)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hours Card */}
                  <div className="col-md-4">
                    <div
                      className="card h-100 border-0 shadow-sm"
                      style={{ transition: 'all 0.3s ease' }}
                      data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 500;"
                    >
                      <div className="card-body text-center p-4">
                        <div 
                          className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                          style={{ 
                            width: '64px', 
                            height: '64px', 
                            backgroundColor: '#fff8e1' 
                          }}
                        >
                          <Clock className="text-warning" size={24} />
                        </div>
                        <h5 className="card-title text-dark mb-2">Press Office Hours</h5>
                        <p className="text-black mb-0">
                          Mon–Fri, 9AM–6PM (IST)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Inquiry Button */}
                <div className="text-center">
                  <Link
                    href="/page-contact"
                    className="btn btn-primary btn-lg px-4 py-2"
                    data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 600;"
                  >
                    <MessageSquare className="me-2" size={20} />
                    Submit a Media Inquiry
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPRTeam;