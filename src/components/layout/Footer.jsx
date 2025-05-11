export default function Footer() {
  return (
    <footer class="bg-dark text-light pt-5 pb-4">
      <div class="container text-md-left">
        <div class="row">
          <div class="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
            <h5 class="text-uppercase fw-bold">Cosmic Atlas</h5>
            <p>
              Explore galaxies, stars, and phenomena that shape our universe. A
              growing archive of celestial wonders.
            </p>
          </div>

          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold">Explore</h6>
            <ul class="list-unstyled">
              <li>
                <a href="/galaxies" class="text-light text-decoration-none">
                  Galaxies
                </a>
              </li>
              <li>
                <a href="/phenomena" class="text-light text-decoration-none">
                  Phenomena
                </a>
              </li>
              <li>
                <a href="/about" class="text-light text-decoration-none">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold">Resources</h6>
            <ul class="list-unstyled">
              <li>
                <a
                  href="https://www.nasa.gov"
                  target="_blank"
                  class="text-light text-decoration-none"
                >
                  NASA
                </a>
              </li>
            </ul>
          </div>

          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold">Contact</h6>
            <p>Email: 
            </p>
            <p>
              <a href="#" class="text-light me-2">
                <i class="bi bi-twitter"></i>
              </a>
              <a href="#" class="text-light me-2">
                <i class="bi bi-github"></i>
              </a>
              <a href="#" class="text-light">
                <i class="bi bi-instagram"></i>
              </a>
            </p>
          </div>
        </div>
      </div>

      <div class="text-center pt-3 border-top border-secondary mt-3">
        <p class="mb-0">&copy; 2025 The Cosmic Archive. All rights reserved.</p>
        <p>Built with React, Bootstrap, Breeze & Laravel — 2025</p>

      </div>
    </footer>
  );
}
