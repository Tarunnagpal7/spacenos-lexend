import React from "react";
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
});


export default function Cta() {
  return (
    <div id="cta" className="cta section panel scrollSpysection">
      <div className="section-outer panel py-4 sm:py-6 xl:py-8 dark:text-white rounded-2 lg:rounded-3 mx-2 overflow-hidden">
        <div className="container xl:max-w-6xl"> 
          <div className="section-inner vstack lg:hstack items-center gap-4 lg:gap-8 text-center ltr:lg:text-start rtl:lg:text-end flex-sm-column home-6-cta">
            <div
              className="content panel vstack items-center  justify-center  px-2 lg:px-6" 
              data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h2 xl:display-6">
                Vision from the Founder
              </h2>
              <p className="fs-5 my-0">
                I founded Spacenos to address a critical gap—the countless ideas that never come to life due to limited resources, guidance, or support. With a deep appreciation for perseverance and ambition, our mission is to empower individuals to turn their visions into reality. We focus on enabling innovation, simplifying complexity through automation, and making meaningful progress accessible to all.
                 </p>
                  <div className={`${greatVibes.className} dark:text-white`} style={{ fontSize: '36px', color: '#1A1A1A', textAlign: 'center', marginTop: '20px' }}>
             - Yugendar Devale
  </div>
                 <h1 className="fs-6">
                  Yugendhar, CEO of Spacenos
                 </h1>
              <a
                href="https://themeforest.net/user/elite-themes24"
                className="btn btn-md btn-primary min-w-150px px-3 mt-4"
              >
                <span>Request a Seat</span>
                <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}