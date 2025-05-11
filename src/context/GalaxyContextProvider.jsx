import { createContext, useContext, useEffect, useState } from "react"

const GalaxyContext = createContext();

export const GalaxyContextProvider = ({children}) =>{
    const apiUrl = import.meta.env.VITE_APP_FRONTEND_URL;
    const apiPhenUrl = import.meta.env.VITE_APP_PHENOMENA_URL;
    
    const [galaxyData, setGalaxyData] = useState([]);
    const [phenomenonData, setPhenomenonData] = useState([]);

    useEffect(() => {
        fetchGalaxies();
        fetchPhenomena();
    },[])

    const fetchGalaxies = () => {
        fetch(apiUrl)
        .then(response => response.json())
        .then((data) => {
            

            setGalaxyData(data.data)
            
        })
    }
    console.log(galaxyData , phenomenonData);

    const fetchPhenomena = () => {
        fetch(apiPhenUrl)
        .then(response => response.json())
        .then((data) => {
            setPhenomenonData(data.data)
            // console.log(data.data);
            
        })
    }

    return(
        <GalaxyContext.Provider value={{galaxyData, phenomenonData}}>{children}</GalaxyContext.Provider>
    );
}

export const useGalaxyContext = () => useContext(GalaxyContext);