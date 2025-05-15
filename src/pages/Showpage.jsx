import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ShowPage() {
  const { id } = useParams();
  const apiUrl = import.meta.env.VITE_APP_FRONTEND_URL;
  const imgUrl = import.meta.env.VITE_IMAGE_URL;

  const [galaxy, setGalaxy] = useState(null);

  useEffect(() => {
    fetch(apiUrl + "/" + id)
      .then((res) => res.json())
      .then((data) => {
        setGalaxy(data.data); // Asegurate que tu backend tenga data.data
      })
      .catch((error) => {
        console.error("Error fetching galaxy:", error);
      });
  }, [id]);

  if (!galaxy) return <p>Loading galaxy...</p>;

  return (
    <div>
      <div className="show-header-section">
        <div className="galaxy-image-container">
          <img src={imgUrl + galaxy.image} alt={galaxy.image} />
        </div>
        <div className="galaxy-show-name">
          <h1>{galaxy.name}</h1>
        </div>
      </div>
      <div className="container">
        <div className="galaxy-stats ">
          <div>
            <h3>Diameter</h3>
            <p>{galaxy.diameter} light years</p>
          </div>
          <div className="">
            <h3>Mass</h3>
            <p>{galaxy.mass} solar masses</p>
          </div>
          <div>
            <h3>Age</h3>
            <p>{galaxy.age} billion years</p>
          </div>
        </div>
        {/* Description */}
        <div className="my-5 p-4 border border-white rounded">
          <h4 className="mb-3">Description</h4>
          <p className="text-white-50">{galaxy.description}</p>
        </div>

        {/* Phenomena */}
        {galaxy.phenomena.length > 0 && (
          <div className="mb-5 p-4 border border-white rounded">
            <h4 className="mb-3">Phenomena Present</h4>
            <ul className="list-unstyled m-0">
              {galaxy.phenomena.map((phen) => (
                <li key={phen.id} className="d-flex align-items-center mb-2">
                  <span className="me-2 text-primary">★</span>
                  <strong className="text-white">{phen.name}</strong>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
