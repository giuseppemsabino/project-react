import { useGalaxyContext } from "../context/GalaxyContextProvider";

export default function PhenomenaPage() {
  const { phenomenonData } = useGalaxyContext();
  const imgUrl = import.meta.env.VITE_IMAGE_URL;

  console.log(phenomenonData);
  return (
    <div className="container ">
      {phenomenonData.map((phenomenon, index) => (
        <div
          key={phenomenon.id}
          className={`d-flex flex-column gap-3 flex-md-row my-5 align-items-center ${
            index % 2 !== 0 ? "flex-column flex-md-row-reverse gap-3" : ""
          }`}
        >
          <div className=" col-12 col-md-7">
            <h4>{phenomenon.name}</h4>
            <p>{phenomenon.description}</p>
          </div>
          <div className="col-12 col-md-5">
            <img
              src={imgUrl + phenomenon.image}
              alt={phenomenon.name}
              className="phen-img "
            />
          </div>
        </div>
      ))}
    </div>
  );
}
