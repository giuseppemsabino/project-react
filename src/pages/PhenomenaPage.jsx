import { useGalaxyContext } from "../context/GalaxyContextProvider";

export default function PhenomenaPage(){
    const {phenomenonData} = useGalaxyContext();

    console.log(phenomenonData);
    return(
        <div className="container">
        {phenomenonData.map((phenomenon) => (
            <h1 key={phenomenon.id}>{phenomenon.name}</h1>
        ))}
    </div>
    )
}