import { useEffect, useState } from "react";
import { useGalaxyContext } from "../context/GalaxyContextProvider";
import SearchBar from "../components/SearchBar";

export default function PhenomenaPage() {
  const { phenomenonData } = useGalaxyContext();
  const [filteredPhenomena, setFilteredPhenomena]= useState(phenomenonData);
  const imgUrl = import.meta.env.VITE_IMAGE_URL;

  useEffect(() => {
    setFilteredPhenomena(phenomenonData);
  },[phenomenonData]);
  // console.log(phenomenonData);
  return (
    <div className="container ">
      <SearchBar
              data={phenomenonData}
              onfilter={setFilteredPhenomena}
              placeholder="Search Phenomenon..."
            />
      {filteredPhenomena.map((phenomenon, index) => (
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
