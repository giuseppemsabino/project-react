import Particles from "../components/layout/Particles";
import "../assets/css/index.css";

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
      <section className="container my-5 intro-section">
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
          <div className="col-12 col-md-6 p-2">
            <img
              src="src\assets\img\galaxies_in_space.jpg"
              alt=""
              className="intro-img"
            />
          </div>
        </div>
      </section>
      <section className="frase-section ">
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

      <section>
        <div></div>
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
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="src\assets\img\lens.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
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
