export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container text-md-left">
        <div className="row">
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
            <h5 className="text-uppercase fw-bold">The Cosmic Archive</h5>
            <p>
              Explore galaxies, stars, and phenomena that shape our universe. A
              growing archive of celestial wonders.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Explore</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/galaxies" className="text-light text-decoration-none">
                  Galaxies
                </a>
              </li>
              <li>
                <a href="/phenomena" className="text-light text-decoration-none">
                  Phenomena
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Resources</h6>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://www.nasa.gov"
                  target="_blank"
                  className="text-light text-decoration-none"
                >
                  NASA
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <p>Email: 
            </p>
            <p>
              <a href="#" className="text-light me-2">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-light me-2">
                <i className="bi bi-github"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-instagram"></i>
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="text-center pt-3 border-top border-secondary mt-3">
        <p className="mb-0">&copy; 2025 The Cosmic Archive. All rights reserved.</p>
        <p>Built with React, Bootstrap, Breeze & Laravel — 2025</p>

      </div>
    </footer>
  );
}
