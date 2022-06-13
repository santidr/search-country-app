import { createContext, useState } from "react";

export const Region = createContext()

const RegionContext = ({ children }) => {

    const [ regionSelected, setRegionSelected] = useState('Africa')

    return (
        <Region.Provider value={{
            regionSelected,
            setRegionSelected
        }}>
            { children}
        </Region.Provider>
    )
}

export default RegionContext