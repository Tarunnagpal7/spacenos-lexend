import React from "react";

export default function Mission() {
  return (
    <div className="container p-6 ">
      <div className="row">
        {/* Left Column */}
        <div className="col-md-6 mb-4">
          <h6 className="text-primary fs-1 fw-bold text-uppercase mb-2">Our Mission</h6>
          <h2 className="fw-bold text-success mb-3">From Code to Cosmos</h2>
          <p className=" dark:text-white">
            At Spacenos, we believe technology is the rocket fuel for human potential. Our mission is simple yet audacious: <br />
            <strong>To empower every founder—regardless of geography, capital, or background—to launch and scale their vision with cutting-edge AI and remote teams.</strong>
            <br /><br />
            We don’t just write code; we engineer dreams. From automating supply chains in Africa to designing AI-driven therapy bots in Europe, our projects span every continent—each powered by our belief that the next unicorn could emerge from anywhere.
          </p>
        </div>

        {/* Right Column */}
        <div className="col-md-6">
          {/* Pillars */}
          <h6 className="text-primary fs-1 fw-bold text-uppercase mb-2">The Spacenos Way</h6>
          <h5 className="fw-bold text-success mb-3 fs-2">Four Pillars of Excellence</h5>
          <ul className="dark:text-white mb-4">
            <li className="m-1"><strong>Relentless Innovation:</strong> We challenge the status quo. If it’s never been done, we’re already prototyping it (quantum-optimized chatbots? We’ve sketched it on the whiteboard).</li>
            <li className="m-1"><strong>Radical Empathy:</strong> We don’t just build for clients; we build with them. Every partnership is a co-creation, and every success feels personal.</li>
            <li className="m-1"><strong>Global Synergy:</strong> Our teams in Boston, Karachi, and Bangalore operate in perfect synchrony—time zones don’t slow us, they empower us.</li>
            <li className="m-1"><strong>Ethical AI Leadership:</strong> We champion responsible AI that respects privacy, equity, and the quirks that make us human.</li>
          </ul>

          {/* Achievements */}
        </div>
          <h6 className="fw-bold text-success mb-3 fs-2">Our Mythical Achievements (Because Why Not?)</h6>
          <p className="dark:text-white">
            <strong className="m-1">Zero-Gravity Code Deployment:</strong> Tested our platform on the ISS (okay, we’re in talks!).<br />
            <strong className="m-1">AI That Dreams:</strong> Our neural networks purportedly conjure original poetry—sometimes it’s good.<br />
            <strong className="m-1">Digital Oracle:</strong> An AI prototype predicted the winner of the last three World Cups (mistakes were made, but we perfected the model!).
          </p>
      </div>
    </div>
  );
}
