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
    <div>
      <h1>{galaxy.name}</h1>
      <img src={imgUrl + galaxy.image} alt={galaxy.image} width="400" />
      <p><strong>description:</strong> {galaxy.description}</p>
      <p><strong>diameter:</strong> {galaxy.diameter} años luz</p>
      <p><strong>mass:</strong> {galaxy.mass} masas solares</p>
      <p><strong>age:</strong> {galaxy.age} mil millones de años</p>

      {galaxy.phenomena.length > 0 && (
        <>
          <h2>Fenómenos asociados</h2>
          <ul>
            {galaxy.phenomena.map((phen) => (
              <li key={phen.id}>
                <strong>{phen.name}</strong>: {phen.description}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
