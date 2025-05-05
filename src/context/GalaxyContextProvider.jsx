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
            

            setGalaxyData(data.data)
            console.log(data.data);
            
        })
    }

    return(
        <GalaxyContext.Provider value={galaxyData}>{children}</GalaxyContext.Provider>
    );
}

export const useGalaxyContext = () => useContext(GalaxyContext);