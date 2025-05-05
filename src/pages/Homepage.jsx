import { Link } from "react-router-dom";
import { useGalaxyContext } from "../context/GalaxyContextProvider";

export default function Homepage() {
  const galaxies = useGalaxyContext();

  const imgUrl = import.meta.env.VITE_IMAGE_URL;

  console.log(galaxies);

  return (
    <div className="container mt-4">
      <h2>Galaxies</h2>

      {galaxies.map((galaxy) => (
        <div class="card" key={galaxy.id}>
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{galaxy.name}</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <Link to={`/galaxies/${galaxy.id}`} class="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
