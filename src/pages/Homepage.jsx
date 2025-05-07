import Particles from "../components/layout/Particles";
import "../assets/css/index.css";
import { div, section } from "framer-motion/client";
export default function HomePage() {
  return (
    <>
      <section>
        <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={1000}
            particleSpread={10}
            cameraDistance={20}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
          <div className="particles-content-absolute">
            <h1>The Cosmic Archive</h1>
          </div>
        </div>
      </section>
      <section>

        <div className="d-flex">
         <div className="col-8">test 8</div> 
         <div className="col-4">test 4</div>
        </div>

      </section>
    </>
  );
}
