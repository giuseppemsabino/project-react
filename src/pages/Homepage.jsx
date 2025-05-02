import { useGalaxyContext } from "../context/GalaxyContextProvider";

export default function Homepage() {
  const {galaxies} = useGalaxyContext();
  console.log(galaxies);

  return (
    <div className="container mt-4">
      <h2>Galaxies</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            
            <th>Name</th>
            <th>Type</th>
            <th>Distance (light years)</th>
          </tr>
        </thead>
        <tbody>
          {galaxies?.map((galaxy) => (
            <tr key={galaxy.id }>
              
              <td>{galaxy.name}</td>
              <td>{galaxy.type_id}</td>
              <td>{galaxy.mass}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
