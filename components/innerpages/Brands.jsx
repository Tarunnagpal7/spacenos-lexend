"use client";
import { brands3 } from "@/data/brands";
import React from "react";
import Image from "next/image";

export default function Brands() {
  return (
    <div id="trusted_brands" className="trusted-brands py-4 py-md-5 bg-light">
      <div className="container p-5">
        <div className="row justify-content-center mb-4 mb-md-5">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            <h2 className=" h3 xl:h2 mb-0">
              Where the Best Come From
            </h2>
          </div>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="brands-grid text-center">
              {brands3.map((image, index) => (
                <div key={index} className="brand-item d-inline-block mx-2 mx-md-3 my-1 my-md-2">
                  <Image
                    src={image.src}
                    width={100}
                    height={42}
                    style={{
                      height: "42px",
                      width: "auto",
                      minWidth: "90px",
                      maxWidth: "120px",
                      objectFit: "contain"
                    }}
                    alt="Brand logo"
                    className="dark:d-none"
                  />
                  <Image
                    src={image.darkSrc}
                    width={100}
                    height={42}
                    style={{
                      height: "42px",
                      width: "auto",
                      minWidth: "90px",
                      maxWidth: "120px",
                      objectFit: "contain"
                    }}
                    alt="Brand logo"
                    className="d-none dark:d-block"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .brands-grid {
          display: inline-block;
          text-align: center;
          width: 100%;
        }
        .brand-item {
          vertical-align: middle;
          transition: transform 0.3s ease;
        }
        .brand-item:hover {
          transform: scale(1.05);
        }
        @media (max-width: 576px) {
          .brand-item {
            min-width: 80px;
          }
        }
      `}</style>
    </div>
  );
}