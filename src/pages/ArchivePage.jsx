import { Link } from "react-router-dom";
import { useGalaxyContext } from "../context/GalaxyContextProvider";


export default function ArchivePage() {
  const { galaxyData } = useGalaxyContext();

  const imgUrl = import.meta.env.VITE_IMAGE_URL;

  console.log(galaxyData);

  return (
    <div className="container mt-4">
      <h2>Galaxies</h2>

      <div className="row gap-1 my-5 d-flex justify-content-center">
        {galaxyData.map((galaxy) => (
          <div class="card col-3" key={galaxy.id}>
            <img src={imgUrl + galaxy.image} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{galaxy.name}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <Link to={`/galaxies/${galaxy.id}`} class="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
