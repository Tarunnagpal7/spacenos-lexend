import React from "react";
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
});


export default function CareerMessage() {
  return (
    <div id="cta" className="cta section panel scrollSpysection">
      <div className="section-outer panel py-4  dark:text-white rounded-2 lg:rounded-3 mx-2 overflow-hidden">
        <div className="container xl:max-w-6xl"> 
          <div className="section-inner vstack lg:hstack items-center gap-4 lg:gap-8 text-center ltr:lg:text-start rtl:lg:text-end flex-sm-column home-6-cta">
            <div
              className="content panel vstack items-center justify-center gap-2  px-2 lg:px-6" 
              data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h2 xl:display-7">
                Message from the founder
              </h2>
              <p className="fs-5 my-0">
                “We don’t care about your pedigree. We care about your potential.
                Whether you're from IIT or a small town — if you're hungry, driven, and ready to learn — Spacenos is your launchpad.
                <span className="mt-2" >
                   <br />
                We’ve built startups from $100. Won hackathons to fund teams.
                Built medtech apps to detect TB and saved lives.
                Closed deals with Mastercard by out-hustling Ivy grads.

                </span>
                This isn’t just a job. It’s a mission to impact a billion lives.

                Join the movement.”

                </p>
                  <div className={`${greatVibes.className} dark:text-white`} style={{ fontSize: '36px', color: '#1A1A1A', textAlign: 'center', marginTop: '20px' }}>
    - Yugendhar Devale
  </div>
                 <h1 className="fs-6">
                  Yugendhar, CEO of Spacenos
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}