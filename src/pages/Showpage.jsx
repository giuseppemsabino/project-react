import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ShowPage() {
  const { id } = useParams();
  const apiUrl = import.meta.env.VITE_APP_FRONTEND_URL;
  const imgUrl = import.meta.env.VITE_IMAGE_URL;

  const [galaxy, setGalaxy] = useState(null);

  useEffect(() => {
    fetch(apiUrl +'/'+ id)
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
    <div className="container">
      <h1>{galaxy.name}</h1>
      <div>
        <div>

      <img src={imgUrl + galaxy.image} alt={galaxy.image} width="400" />
        </div>
        <div>

      <p><strong>diameter:</strong> {galaxy.diameter} light years</p>
      <p><strong>mass:</strong> {galaxy.mass} solar masses</p>
      <p><strong>age:</strong> {galaxy.age} billion years</p>
        </div>
      </div>
      <p><strong>description:</strong> {galaxy.description}</p>
      {galaxy.phenomena.length > 0 && (
        <>
          <h2>Phenomena Presents </h2>
          <ul>
            {galaxy.phenomena.map((phen) => (
              <li key={phen.id}>
                <strong>{phen.name}</strong>
              </li>
            ))}
          </ul>
        </>
      )}

    </div>
  );
}
