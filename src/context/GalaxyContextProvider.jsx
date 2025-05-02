import { createContext, useContext, useEffect, useState } from "react"

const GalaxyContext = createContext();

export const GalaxyContextProvider = ({children}) =>{
    const apiUrl = import.meta.env.VITE_APP_FRONTEND_URL;
    
    const [galaxyData, setGalaxyData] = useState([]);

    useEffect(() => {
        fetchGalaxies();
    },[])

    const fetchGalaxies = () => {
        fetch(apiUrl)
        .then(response => response.json())
        .then((data) => {
            console.log("api response:", data.data);

            const galaxies = data.data.map((galaxy) => ({
                id: galaxy.id,
                name: galaxy.name,
                type_id: galaxy.type_id,
                diameter: galaxy.diameter,
                mass: galaxy.mass,
                age: galaxy.age
            }))

            const newGalaxyData = {...galaxyData, galaxies}

            setGalaxyData(newGalaxyData)
            
        })
    }

    return(
        <GalaxyContext.Provider value={galaxyData}>{children}</GalaxyContext.Provider>
    );
}

export const useGalaxyContext = () => useContext(GalaxyContext);