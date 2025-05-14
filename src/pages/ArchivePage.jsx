import { Link } from "react-router-dom";
import { useGalaxyContext } from "../context/GalaxyContextProvider";
import TextPressure from "../components/TextPressure";

export default function ArchivePage() {
  const { galaxyData } = useGalaxyContext();

  const imgUrl = import.meta.env.VITE_IMAGE_URL;

  // console.log(galaxyData);

  return (
    <div className="container mt-4">
      <div style={{ position: "relative", height: "300px" }} className="d-none d-md-block">
        <TextPressure
          text="Galaxies"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={36}
        />
      </div>
      <div className="d-md-none text-center">
        <h1 className="galaxies-title">
          GALAXIES
        </h1>
      </div>

      <div className="d-flex flex-wrap">
        {galaxyData.map((galaxy) => (
          <div
            className="galaxy-card col-12 col-md-6 p-3 position-relative"
            key={galaxy.id}
          >
            <Link to={`/galaxies/${galaxy.id}`}>
              <img
                src={imgUrl + galaxy.image}
                className="w-100 z-0"
                alt="..."
              />
            </Link>
            <span className="card-name">
              {" "}
              <h2>{galaxy.name}</h2>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
