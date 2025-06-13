import { testimonials6 } from "@/data/testimonials";
import React from "react";
import Image from "next/image";

export default function CareerFeedback() {
  return (
    <div id="clients_feedbacks" className="py-8">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10"> 
            <div className="text-center mb-5"> 
              <h2 className="h3 h2-lg mb-4">Don't Just Take Our Words</h2>
            </div>

            <div className="row g-4 justify-content-center"> 
              {testimonials6.map((testimonial, index) => (
                <div key={index} className="col-12 col-md-6"> 
                  <div className="h-100 p-4 border rounded-3"> 
                    <div className="d-flex flex-column h-100">
                      <div className="mb-3">
                        {/* <div className="d-flex align-items-center mb-3" style={{height: '48px'}}> */}
                          {/* <Image
                            className="img-fluid"
                            src={testimonial?.brandImgSrc}
                            width={170}
                            height={48}
                            alt={testimonial?.brandImgAlt}
                            style={{maxWidth: '128px'}}
                          />
                        </div> */}
                        <p className="fs-6 fw-bold text-muted mb-0"> {/* Compact text */}
                          {testimonial.text}
                        </p>
                      </div>
                      <div className="mt-auto d-flex align-items-center gap-3">
                        {/* <Image
                          className="rounded-circle"
                          src={testimonial?.avatarImgSrc}
                          width={40}
                          height={40}
                          alt={testimonial?.avatarImgAlt}
                        /> */}
                        <div>
                          <h6 className="h6 mb-0">{testimonial.name}</h6>
                          <span className="small text-muted">
                            {testimonial.position}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="text-center mt-5">
               <a
                  href="#"
                  className="uc-link dark:text-secondary fw-bold d-inline-flex items-center gap-narrow"
                >
                  <span>See all feedbacks</span>
                  <i className="icon icon-1 unicon-arrow-right rtl:rotate-180" />
                </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}