import Particles from "../components/layout/Particles";
import "../assets/css/index.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <section>
        <div className="particles-section">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={1500}
            particleSpread={10}
            cameraDistance={20}
            speed={0.05}
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

      <section className="container intro-section ">
        <div className="d-md-flex flex-md-row">
          <div className="text-center align-items-center align-content-center col-12 col-md-6  ">
            <p className="lead ">
              The universe is full of wonders. To begin understanding its
              vastness, we can start with some of its fundamental
              <span className="">
                {" "}
                <a className="highlight shortcut" href="/phenomena">
                  Phenomena
                </a>{" "}
              </span>{" "}
              —{" "}
              <span>
                {" "}
                <a className="highlight shortcut" href="/galaxies">
                  Galaxies
                </a>{" "}
              </span>{" "}
              that shape the cosmos and the fascinating phenomena within them
              that give each galaxy its unique identity.
            </p>
          </div>
          <div className="col-12 intro-img col-md-6 p-2">
            <img
              src="src\assets\img\galaxies_in_space.jpg"
              alt=""
              className="w-100 h-100 object-fit-cover"
            />
          </div>
        </div>
      </section>

      <section className="frase-section my-3">
        <div className="frase-box text-center mx-5">
          <h3>
            Every second, somewhere in the universe, a star is born... and
            another dies.
          </h3>
        </div>
        <span className="photo-credits">
          <p>
            European Space Agency Image credit: ESA/Hubble, NASA, and C. Murray
          </p>
        </span>
      </section>

      <section className="container">
        <div className="d-flex justify-content-center align-items-center h-100 flex-column">
          <div className="explore-title">
            <h2>EXPLORE</h2>
          </div>
          <div className="text-center fs-5">
            <p>
              Not sure where to start? Head to the Galaxies section to explore
              different types, or check out the Cosmic Phenomena page to see
              what makes the universe so dynamic.
            </p>
          </div>
          <div className="d-flex w-100 justify-content-around my-4 ">
            <div>
              <a className="btn btn-danger" href="/galaxies">
                Galaxies
              </a>
            </div>
            <div>
              <a className="btn btn-danger" href="/phenomena">
                Cosmic Phenomena
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div
          id="carouselExampleRide"
          class="carousel slide"
          data-bs-ride="true"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="src\assets\img\crash_galaxies.jpg"
                class="d-block w-100"
                alt="..."
              />

              <div class="carousel-caption d-md-block">
                <a href="/phenomena" className="carousel-links">
                  <h5>Galaxies Crashing</h5>
                </a>
                <p>Have you ever seen galaxies crashing?</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="src\assets\img\lens.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption  d-md-block">
                <a href="/phenomena" className="carousel-links">
                  {" "}
                  <h5>Gravitational Lenses</h5>
                </a>
                <p>Do you know why gravitational lenses are formed?</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="src\assets\img\arms.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption  d-md-block">
                <a href="/phenomena" className="carousel-links">
                  {" "}
                  <h5>Spiral Arms</h5>
                </a>
                <p>One of the most common features of many galaxies.</p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
}
